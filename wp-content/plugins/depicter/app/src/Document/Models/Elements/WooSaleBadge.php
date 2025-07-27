<?php

namespace Depicter\Document\Models\Elements;

use Depicter\Html\Html;

class WooSaleBadge extends Button {

    public function render() {
		$post = $this->getDataSheet()['post'] ?? null;
        if ( $post ) {
			$product = wc_get_product( $post->ID );
			if ( ! $product->is_on_sale() ) {
				return "";
			}
        }

		$tag = $this->options->tag ?? 'p';

		$args = $this->getDefaultAttributes();

        if ( ! empty( $this->options->iconAlign ) && $this->options->iconAlign == 'right' )  {
			$args['class'] .= ' dp-icon-right';
		}

        $iconTag = "";
		if ( ! empty( $this->options->iconContent) ) {
			$iconTag = Html::span([
				'class' => 'dp-icon-container'
			], $this->options->iconContent );
		}

		$content = ! empty ( $this->options->iconOnly ) && $this->options->iconOnly ? "" : $this->maybeReplaceDataSheetTags( $this->options->content );

        $buttonContent = Html::span( [
			'class' => 'dp-inner-content'
		], $iconTag . $content);

		$output =  Html::$tag( $args, $buttonContent );

		if ( false !== $a = $this->getLinkTag() ) {
			return $a->nest( $output ) . "\n";
		}
		return $output . "\n";
	}
}
