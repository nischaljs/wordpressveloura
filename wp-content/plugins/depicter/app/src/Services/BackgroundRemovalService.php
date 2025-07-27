<?php
namespace Depicter\Services;

use Averta\WordPress\Utility\JSON;
use Depicter;
use Depicter\GuzzleHttp\Exception\GuzzleException;

class BackgroundRemovalService
{
    /**
     * Upload media to process for background removal
     * @param $assetIDorURL
     *
     * @return array
     */
    public function upload( $assetIDorURL ): array
    {

        $type = '';
        if ( is_numeric( $assetIDorURL ) ) {
            try {
                $type = get_post_mime_type( $assetIDorURL );
                if ( $type !== 'image/jpeg' && $type !== 'image/png' ) {
                    return [
                        'succeed' => false,
                        'error' => [ __( 'Invalid Media Type', 'depicter' ) ]
                    ];
                }
                $assetIDorURL = \Depicter::media()->getSourceUrl($assetIDorURL);
            } catch ( GuzzleException|\Exception $e ){
                return [
                    'succeed' => false,
                    'errors' => [ $e->getMessage() ]
                ];
            }
        } elseif ( strpos( $assetIDorURL, '@' ) != 0 ) {
            return [
                'succeed' => false,
                'errors' => [ __('Media ID is not valid.', 'depicter' ) ]
            ];
        }

        try {
            $response = \Depicter::remote()->post( 'v1/uploadcare/image/upload', [
                'form_params' => [
                    'process_input'  => $assetIDorURL,
                    'type' => $type
                ]
            ] );

            $response = JSON::decode( $response->getBody()->getContents(), true );

            if ( ! empty( $response['errors'] ) ) {
                return [
                    'succeed' => false,
                    'errors' => $response['errors']
                ];
            }

            return [
                'succeed' => true,
                'hits' => $response['hits']
            ];
        } catch ( GuzzleException $e ){
            return [
                'succeed' => false,
                'errors' => $e->getMessage()
            ];
        }
    }

    /**
     * Get removed background image
     * @param $processID
     *
     * @return array
     */
    public function getRemovedBackgroundImage( $processID ): array
    {
        if ( file_exists( \Depicter::storage()->uploads()->getPath() . '/' . $processID . '.png' ) ) {
            $url = \Depicter::storage()->uploads()->getUrl() . '/' . $processID . '.png';
            $attachmentID = attachment_url_to_postid( $url );
            if ( $attachmentID ) {
                return [
                    'status' => 'done',
                    'hits' => [
                        'attachmentID' => $attachmentID,
                        'attachmentURL' => $url
                    ]
                ];
            }
        }

        try {
            $response = \Depicter::remote()->post( 'v1/uploadcare/image/removebg', [
                'form_params' => [
                    'process' => $processID
                ]
            ] );

            if ( $response->getHeader('Content-Type')[0] == 'application/json' ) {
                $response = JSON::decode( $response->getBody()->getContents(), true );
                if ( ! empty( $response['errors'] ) ) {
                    return [
                        'errors' => $response['errors']
                    ];
                }

                return [
                    'status' => $response['status'],
                    'hits' => [
                        'attachmentID' => "",
                        'attachmentURL' => ""
                    ]
                ];
            } else {
                $body = $response->getBody()->getContents();
                $path = \Depicter::storage()->uploads()->getPath() . '/' . $processID . '.png';
                \Depicter::storage()->filesystem()->write( $path, $body );
                $attachmentID = \Depicter::media()->library()->insertAttachment( $processID, $path, 'image/png', $processID );
                if ( ! empty( $attachmentID ) ) {
                    return [
                        'status' => 'done',
                        'hits' => [
                            'attachmentID' => $attachmentID,
                            'attachmentURL' => Depicter::media()->getSourceUrl( $attachmentID )
                        ]
                    ];
                }

                return [
                    'errors' => [ __( 'Error while importing the new background removed image', 'depicter' ) ]
                ];
            }
        } catch ( GuzzleException|\Exception $e ){
            return [
                'errors' => [ $e->getMessage() ]
            ];
        }
    }
}
