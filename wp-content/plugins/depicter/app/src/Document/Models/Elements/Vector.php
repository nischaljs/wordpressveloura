<?php

namespace Depicter\Document\Models\Elements;

use Depicter\Document\Models\Common\Styles;

class Vector extends Svg
{

	public function getSelectorAndCssList() {
		parent::getSelectorAndCssList();

		if ( empty( $this->options->customColors ) ) {
			return $this->selectorCssList;
		}
		$innerStyles = $this->prepare()->innerStyles;
		if ( !empty( $innerStyles ) ) {

			foreach( $innerStyles as $cssSelector => $styles ){
				if ( empty( $styles ) || ! $styles instanceof Styles ) {
					continue;
				}

				$generalCss = $innerStyles->{$cssSelector}->getSvgCss('svg');

				$this->selectorCssList[ '.' . $this->getStyleSelector() . ' .' . $this->removeCommonStrings( $cssSelector ) ] = $generalCss;
			}
		}

		return $this->selectorCssList;
	}

	public function removeCommonStrings( $selector ) {
		$commonStrings = [
			'depicter',
			'fill',
			'stroke',
			'stopColor',
			'color'
		];

		$selector = strtolower( $selector );
		foreach( $commonStrings as $commonString ){
			if ( $commonString == 'color') {
				if ( stripos( $selector, 'stopColor' ) === false ) {
					$selector =  $commonString == 'depicter' ? str_ireplace( $commonString, $commonString . '-' , $selector ) : str_ireplace( $commonString, '-' . $commonString , $selector );
				}
			} else {
				$selector =  $commonString == 'depicter' ? str_ireplace( $commonString, $commonString . '-' , $selector ) : str_ireplace( $commonString, '-' . $commonString , $selector );
			}
		}

		return str_replace( 'stopcolor', 'stopColor', $selector );
	}
}
