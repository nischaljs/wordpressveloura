<?php
namespace Depicter\Document\Models\Elements;

use Averta\Core\Utility\Arr;
use Depicter\Document\Models;
use Depicter\Html\Html;

class Group extends Models\Element
{

	public function render() {

		if ( empty( $this->childrenObjects ) ) {
			return '';
		}

		$args = $this->getDefaultAttributes();

		$div = Html::div( $args, "\n" );
		foreach ( $this->childrenObjects as $element ) {
			// if dataSheet is available for current group, assign it elements of this group as well
			if( $this->getDataSheet() ){
				$element->prepare()->setDataSheet( $this->getDataSheet() );
			}

			$div->nest( $element->prepare()->render() );
		}

		if ( false !== $a = $this->getLinkTag() ) {
			return $a->nest( $div );
		}

		return $div . "\n";
	}

	/**
	 * Get list of selector and CSS for element and belonging child elements
	 *
	 * @return array
	 * @throws \JsonMapper_Exception
	 */
	public function getSelectorAndCssList(){
		parent::getSelectorAndCssList();

		foreach ( $this->childrenObjects as $element ) {
			$element->isChild = true;
			$this->selectorCssList = Arr::merge( $this->selectorCssList, $element->prepare()->getSelectorAndCssList() );
		}

		return $this->selectorCssList;
	}

	/**
	 * Retrieves list of fonts used in typography options
	 *
	 * @return array
	 * @throws \JsonMapper_Exception
	 */
	public function getFontsList()
	{
		$fontsList = parent::getFontsList();
		if ( empty( $this->childrenObjects ) ) {
			return '';
		}

		foreach ( $this->childrenObjects as $element ) {
			if ( $element->type == 'group' ) {
				$elementFontsList = $this->getGroupFonts($element);
				$fontsList = Arr::merge( $elementFontsList, $fontsList);
				continue;
			}

			$elementFontsList = ! empty( $element->prepare()->styles ) ? $element->prepare()->styles->getFontsList() : [];
			\Depicter::app()->documentFonts()->addFonts( $element->getDocumentID(), $elementFontsList, 'google' );
			$fontsList = Arr::merge( $elementFontsList, $fontsList);
		}

		return $fontsList;
	}

	public function getGroupFonts($element) {
		$fontsList = [];
		$element = $element->prepare();
		if ( empty( $element->childrenObjects ) ) {
			return '';
		}

		foreach ( $element->childrenObjects as $innerElement ) {
			if ( $innerElement->type == 'group') {
				$innerElementFontsList = $this->getGroupFonts($innerElement);
				$fontsList = Arr::merge( $innerElementFontsList, $fontsList);
				continue;
			}

			$innerElementFontsList = ! empty( $innerElement->prepare()->styles ) ? $innerElement->prepare()->styles->getFontsList() : [];
			\Depicter::app()->documentFonts()->addFonts( $innerElement->getDocumentID(), $innerElementFontsList, 'google' );
		}

		return $fontsList;
	}
}
