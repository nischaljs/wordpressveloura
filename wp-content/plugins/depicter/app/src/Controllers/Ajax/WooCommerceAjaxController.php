<?php

namespace Depicter\Controllers\Ajax;

use Depicter\Utility\Sanitize;
use WPEmerge\Requests\Request;

class WooCommerceAjaxController
{

    public function addToCart( Request $request ) {
        $product_id = Sanitize::int( $request->body( 'product_id', 0 ) );
        if ( ! $product_id ) {
            return \Depicter::json([
                'errors' => [ __( 'Product ID is required.', 'depicter' ) ]
            ])->withStatus(400);
        }

        $buy_now = (bool) $request->body( 'buy_now', false );
        $args = [
            'quantity' => Sanitize::int( $request->body( 'quantity', 1 ) ),
            'product_sku' => Sanitize::textfield( $request->body( 'sku', '' ) )
        ];

        try {
            $data = \Depicter::WooCommerce()->addToCart( $product_id, $args );
            if ( !empty( $data['error'] ) ) {
                // If there was an error adding to the cart, redirect to the product page to show any errors.
                return \Depicter::redirect()->to( $data['product_url'] );
            }

            if ( $buy_now ) {
                $checkout_page = wc_get_checkout_url();
                return \Depicter::redirect()->to( $checkout_page );
            }

            return \Depicter::json( $data )->withStatus( 200 );
        } catch ( \Exception $e ){
            return \Depicter::json([
                'errors' => [ $e->getMessage() ]
            ])->withStatus(400);
        }
    }
}
