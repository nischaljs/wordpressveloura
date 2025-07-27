<?php

namespace Depicter\Document\Models\Elements;

use Averta\Core\Utility\Data;

class WooAddToCart extends Button {

    public function getDefaultAttributes()
    {
        $defaultAttributes = parent::getDefaultAttributes();
        $product = $this->getDataSheet()['post'] ?? null;
        if ( $product ) {
            $defaultAttributes['data-product-id'] = $product->ID;
        }
        
        if ( ! empty( $this->options->canUseAjax) ) {
            $defaultAttributes['data-can-use-ajax'] = $this->maybeReplaceDataSheetTags( $this->options->canUseAjax ) ? 'true' : 'false';
        }

        if ( ! empty( $this->options->purchasable) ) {
            $defaultAttributes['data-purchasable'] = $this->maybeReplaceDataSheetTags( $this->options->purchasable ) ? 'true' : 'false';
        }

        if ( ! empty( $this->options->useAjax) ) {
            $defaultAttributes['data-use-ajax'] = Data::cast( $this->options->useAjax, 'bool' ) ? 'true' : 'false';
        }

        if ( ! empty( $this->options->cartPageLabel) ) {
            $defaultAttributes['data-added-label'] = $this->options->cartPageLabel;
        }

        $defaultAttributes['data-cart-page'] = wc_get_cart_url();

        return $defaultAttributes;
    }
}
