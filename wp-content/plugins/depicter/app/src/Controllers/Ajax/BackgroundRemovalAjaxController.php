<?php

namespace Depicter\Controllers\Ajax;

use Depicter\Utility\Sanitize;
use Psr\Http\Message\ResponseInterface;
use WPEmerge\Requests\Request;

class BackgroundRemovalAjaxController
{

    /**
     * Upload media to process for background removal
     * @param  Request  $request
     * @param           $view
     *
     * @return ResponseInterface
     */
    public function upload( Request $request, $view ): ResponseInterface
    {
        $id = Sanitize::textfield( $request->body('id', '') );
        if ( empty( $id ) ) {
            return \Depicter::json([
                'errors' => [__('Asset id is required', 'depicter' ) ]
            ])->withStatus(400);
        }

        if ( strpos( $id, '@') !== 0 && ! is_numeric( $id )  ) {
            return \Depicter::json([
                'errors' => [__('Media ID is not valid.', 'depicter' ) ]
            ])->withStatus(400);
        }

        $result = \Depicter::backgroundRemoval()->upload( $id );
        $statusCode = empty( $result['errors'] ) ? 200 : 400;
        return \Depicter::json( $result )->withStatus( $statusCode );
    }

    /**
     * Get removed background image
     * @param  Request  $request
     * @param           $view
     *
     * @return ResponseInterface
     */
    public function getRemovedBackgroundImage( Request $request, $view ): ResponseInterface
    {
        $process = Sanitize::textfield( $request->query('process', '') );
        if ( empty( $process ) ) {
            return \Depicter::json([
                'errors' => [__('Process token is required', 'depicter' ) ]
            ]);
        }

        $result = \Depicter::backgroundRemoval()->getRemovedBackgroundImage( $process );
        $statusCode = empty( $result['errors'] ) ? 200 : 400;
        return \Depicter::json( $result )->withStatus( $statusCode );
    }
}
