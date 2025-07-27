<?php
namespace Depicter\Modules\WooCommerce;

use Averta\Core\Utility\Arr;

class Module {

    /**
     * Add product to cart
     * @throws \Exception
     */
    public function addToCart( $product_id, $args = [] ) {
        if ( ! function_exists('wc_get_product') ) {
            throw new \Exception( __( 'WooCommerce is not installed.', 'depicter' ) );
        }

        $defaults = [
            'product_sku' => "",
            'quantity' => 1,
        ];
        $args = Arr::merge( $args, $defaults );

        $product_id        = apply_filters( 'woocommerce_add_to_cart_product_id', $product_id );
        $product           = wc_get_product( $product_id );
        $quantity          = empty( $args['quantity'] ) ? 1 : wc_stock_amount( wp_unslash( $args['quantity'] ) );
        $passed_validation = apply_filters( 'woocommerce_add_to_cart_validation', true, $product_id, $quantity );
        $product_status    = get_post_status( $product_id );
        $variation_id      = 0;
        $variation         = [];

        if ( $product && 'variation' === $product->get_type() ) {
            $variation_id = $product_id;
            $product_id   = $product->get_parent_id();
            $variation    = $product->get_variation_attributes();
        }

        if ( $passed_validation && false !== WC()->cart->add_to_cart( $product_id, $quantity, $variation_id, $variation ) && 'publish' === $product_status ) {

            do_action( 'woocommerce_ajax_added_to_cart', $product_id );

            ob_start();

            woocommerce_mini_cart();

            $mini_cart = ob_get_clean();

            $data = [
                'fragments' => apply_filters(
                    'woocommerce_add_to_cart_fragments',
                    [
                        'div.widget_shopping_cart_content' => '<div class="widget_shopping_cart_content">' . $mini_cart . '</div>',
                    ]
                ),
                'cart_hash' => WC()->cart->get_cart_hash(),
            ];

        } else {

            // If there was an error adding to the cart, redirect to the product page to show any errors.
            $data = [
                'error'       => true,
                'product_url' => apply_filters( 'woocommerce_cart_redirect_after_error', get_permalink( $product_id ), $product_id ),
            ];
        }

        return $data;
    }
}
