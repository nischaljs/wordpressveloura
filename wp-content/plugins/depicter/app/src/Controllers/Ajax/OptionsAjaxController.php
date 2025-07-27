<?php
namespace Depicter\Controllers\Ajax;

use Averta\Core\Utility\Arr;
use Averta\WordPress\Utility\JSON;
use Averta\WordPress\Utility\Sanitize;
use Psr\Http\Message\ResponseInterface;
use WPEmerge\Requests\RequestInterface;

class OptionsAjaxController {

	/**
	 * update setting
	 *
	 * @param RequestInterface $request
	 * @param                  $view
	 *
	 * @return ResponseInterface
	 */
	public function update( RequestInterface $request, $view ) {
		$id = Sanitize::textfield( $request->body('id', '') );

        if ( $id != 'allow_unfiltered_data_upload' ) {
            return \Depicter::json([
                'errors' => [__('You only has the right to update uploading unfiltered data option', 'depicter' ) ]
            ])->withStatus(403);
        }

        $value = (bool) $request->body('value', false) ? 'on' : 'off';
        if ( \Depicter::options()->set( 'allow_unfiltered_data_upload', $value ) ) {
	        return \Depicter::json([
				'success' => true,
                'value' => $value
            ])->withStatus(200);
        }

		return \Depicter::json([
			'errors' => [ __('Option value not changed.' , 'depicter' ) ]
		])->withStatus(400);
	}

	/**
	 * get settings list
	 *
	 * @param RequestInterface $request
	 * @param string $view
	 *
	 * @return ResponseInterface
     */
	public function index( RequestInterface $request, $view ): ResponseInterface
    {
		$options = \Depicter::settings()->getAll();
		$response = [];
		foreach( $options as $option ) {
			$response[ $option['id'] ] = $option['type'] == 'password' ? "*************" :  \Depicter::settings()->getSettingValue( $option['id'] );
		}
		return \Depicter::json( $response )->withStatus(200);
	}

	/**
	 * get settings list
	 *
	 * @param RequestInterface $request
	 * @param string $view
	 *
	 * @return ResponseInterface
     */
	public function get( RequestInterface $request, $view ): ResponseInterface
    {
		return \Depicter::json([
			'hits' => \Depicter::settings()->getAll()
		])->withStatus(200);
	}

	/**
	 * update setting
	 *
	 * @param RequestInterface $request
	 * @param string           $view
	 *
	 * @return ResponseInterface
	 */
	public function store( RequestInterface $request, $view ): ResponseInterface
    {
		$settings = ! empty( $request->body('settings', '') ) ? Sanitize::textfield( $request->body('settings', '') ) : Sanitize::textfield( $request->getBody()->getContents(), '' );
		$settings = JSON::decode( $settings, true );

		if ( empty( $settings ) ) {
			return \Depicter::json([
				'errors' => ['missing settings!']
			])->withStatus(400);
		}
		
		$settings = \Depicter::settings()->map( $settings );
		$failedJobs = [];
		foreach ( $settings as $settingKey => $settingValue ) {
			if ( ! \Depicter::settings()->store( Sanitize::textfield( $settingKey ), Sanitize::textfield( $settingValue ) ) ) {
				$failedJobs[] = $settingKey;
			}
		}
		
		if ( empty( $failedJobs ) ) {
			return \Depicter::json([
				'success' => true
			])->withStatus(200);
		}

		return \Depicter::json([
			'errors' => [ sprintf( __( 'Saving the following options failed: %s. Please try again!', 'depicter' ) , implode( ',', $failedJobs ) ) ]
		])->withStatus(400);
	}

	/**
	 * Flush documents cache
	 *
	 * @param RequestInterface $request
	 * @param string           $view
	 *
	 * @return ResponseInterface
	 */
	public function flushCache( RequestInterface $request, $view ): ResponseInterface
	{
		depicter_flush_documents_cache();
		return \Depicter::json([
			'success' => true
		])->withStatus(200);
	}
}
