<?php
namespace Depicter\Services;

use Averta\WordPress\Utility\JSON;
use Depicter\Exception\EntityException;

class ExportService
{

	/**
	 * Create zip file from slider data
	 *
	 * @param $documentID
	 *
	 * @return false|string
	 * @throws EntityException
	 */
	public function pack( $documentID ) {

		$sliderData = $this->sliderData( $documentID );

		$zip = new \ZipArchive();
		$tmp = tempnam('temp','zip');
		$zip->open( $tmp, \ZipArchive::OVERWRITE );
		$zip->addFromString( 'data.json', JSON::encode( $sliderData['data'] ) );
		if ( !empty( $sliderData['assets'] ) ){
			foreach( $sliderData['assets'] as $assetID ){
				$attachmentUrl = wp_get_attachment_url( $assetID );
				$attachmentName = pathinfo( $attachmentUrl, PATHINFO_BASENAME );
				if ( strpos( $attachmentName, ' ' ) !== false ) {
					$attachmentUrl = str_replace( $attachmentName, rawurlencode( $attachmentName ), $attachmentUrl );
				}
				$zip->addFromString( 'assets/' . get_the_title( $assetID ) . '-' . $assetID . '.' . pathinfo( $attachmentUrl, PATHINFO_EXTENSION ), \Depicter::storage()->filesystem()->read( $attachmentUrl ) );
			}
		}

		if ( !empty( $sliderData['data']['jsonAssets'] ) ) {
			foreach( $sliderData['data']['jsonAssets'] as $key => $jsonURL ) {
				$zip->addFromString( 'assets/' . pathinfo( $jsonURL, PATHINFO_BASENAME ), \Depicter::storage()->filesystem()->read( $jsonURL ) );
			}
		}
		$zip->close();
		return $tmp;
	}

	/**
	 * Get slider data
	 *
	 * @param $documentID
	 *
	 * @return array
	 * @throws EntityException
	 */
	protected function sliderData( $documentID ) {
		$type = \Depicter::documentRepository()->getFieldValue( $documentID, 'type' );
		$jsonContent = \Depicter::document()->getEditorData( $documentID );
		$jsonContent = JSON::encode( $jsonContent );
		$assetIDs = [];
		preg_match_all( '/\"(source|src)\":\"(\d+)\"/', $jsonContent, $assets, PREG_SET_ORDER );
		if ( !empty( $assets ) ) {
			foreach( $assets as $asset ) {
				if ( !empty( $asset[2] ) ) {
					$assetIDs[] = $asset[2];
				}
			}
		}

		preg_match_all( '/"src":\{[^\}]+\}/', $jsonContent, $backgroundImages, PREG_SET_ORDER );
		if ( ! empty( $backgroundImages ) ) {
			foreach( $backgroundImages as $backgroundImage ) {
				if ( ! empty( $backgroundImage[0] ) ) {
					$patterns = [ '"default":"(\d+)"','"tablet":"(\d+)"','"mobile":"(\d+)"'];
					foreach( $patterns as $pattern ) {
						if ( preg_match( '/' . $pattern . '/', $backgroundImage[0], $asset ) ) {
							$assetIDs[] = $asset[1];
						}	
					}
				}
			}
		}

		$jsonAssets = [];
		if ( strpos( $jsonContent, 'dpcLottie') ) {
			preg_match_all( '/"src":"(http[^"]+?.json)/', $jsonContent, $jsonFiles, PREG_SET_ORDER );
			if ( !empty( $jsonFiles ) ) {
				foreach( $jsonFiles as $jsonFile ) {
					$jsonAssets[] = stripslashes( $jsonFile[1] );
				}
			}
		}

		return [
			'data' => [
				'content' => $jsonContent,
				'type' => $type,
				'jsonAssets' => $jsonAssets,
				"uploadURL" => \Depicter::storage()->uploads()->getBaseUrl()
			],
			'assets' => $assetIDs,
		];
	}
}
