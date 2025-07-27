<?php
namespace Depicter\Document\Models\Elements;

use Averta\Core\Utility\Arr;
use Depicter\Document\Models;
use Depicter\Document\Models\Common\Styles;
use Depicter\Html\Html;

class Button extends Models\Element
{

	public function render() {

		$args = $this->getDefaultAttributes();

		if ( $this->componentType && ( $this->componentType == 'survey:submit' || $this->componentType == 'survey:next' || $this->componentType == 'survey:prev' ) ) {
			$args['data-type'] = $this->componentType;
		}

		if ( $this->componentType && $this->componentType == 'survey:next' ) {
			if ( ! empty( $this->options->toggleToSubmit ) ) {
				$args['data-toggle-to-submit'] = 'true';
			}

			if ( ! empty( $this->options->removeIconOnSubmit ) ) {
				$args['data-remove-icon-on-submit'] = 'true';
			}

			if ( ! empty( $this->options->submitContent ) ) {
				$args['data-submit-text'] = $this->options->submitContent;
			} 
		}
		
		if ( ! empty( $this->options->iconAlign ) && $this->options->iconAlign == 'right' )  {
			$args['class'] .= ' dp-icon-right';
		}

		if ( ! empty( $this->options->disableOnFirst ) ) {
			$args['data-disable-on-first'] = 'true';
		}

		if ( ! empty( $this->options->disableOnLast ) ) {
			$args['data-disable-on-last'] = 'true';
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

		$button = Html::button( $args, $buttonContent );

		if ( false !== $a = $this->getLinkTag() ) {
			return $a->nest( $button );
		}

		return $button;
	}

	/**
	 * Get list of selector and CSS for element
	 *
	 * @return array
	 * @throws \JsonMapper_Exception
	 */
	public function getSelectorAndCssList(){
		$this->selectorCssList = parent::getSelectorAndCssList();

		// Add SVG selector and css
		$this->selectorCssList[ $this->getSvgSelector() ] = $this->getSvgCss();
		if ( ! empty( $this->selectorCssList[ $this->getSvgSelector() ]['hover'] ) ) {
			$this->selectorCssList[ $this->getHoverSvgSelector() ] = $this->selectorCssList[ $this->getSvgSelector() ]['hover'];
			unset( $this->selectorCssList[ $this->getSvgSelector() ]['hover'] );
		}

		return $this->selectorCssList;
	}

	/**
	 * Get svg selector
	 *
	 * @return string
	 */
	protected function getSvgSelector() {
		return '.' . $this->getSelector() . ' svg, .' . $this->getSelector() . ' path';
	}

	/**
	 * Get svg selector
	 *
	 * @return string
	 */
	protected function getHoverSvgSelector() {
		return '.' . $this->getSelector() . ':hover svg, .' . $this->getSelector() . ':hover path';
	}

	/**
	 * Get styles of svg
	 *
	 * @return array|array[]
	 * @throws \JsonMapper_Exception
	 */
	protected function getSvgCss() {
		// Get styles list from styles property
		return ! empty( $this->styles ) ? $this->styles->getSvgCss() : [];
	}
}
