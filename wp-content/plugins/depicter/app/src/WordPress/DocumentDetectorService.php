<?php

namespace Depicter\WordPress;

use Averta\Core\Utility\Arr;
use Averta\WordPress\Utility\JSON;
use Elementor\Plugin;

class DocumentDetectorService
{

	protected array $documentIDs = [];

	public function __construct() {
		$this->init();
	}

	public function init() {

		$conditionalDocumentIDs = \Depicter::document()->getConditionalDocumentIDs();
		if ( ! empty( $conditionalDocumentIDs ) ) {
			$this->documentIDs = Arr::merge( $this->documentIDs, $conditionalDocumentIDs );
		}

		$this->checkForElementorWidget();
		$this->checkForGutenbergWidget();
		$this->checkForDiviWidget();
		$this->checkForBeaverWidget();

		$this->documentIDs = array_unique( $this->documentIDs );
	}

	public function hasAnyDocument() {
		return !empty( $this->documentIDs );
	}

	public function getDocumentsList() {
		return $this->documentIDs;
	}

	public function checkForElementorWidget(){
		if ( ! class_exists('\Elementor\Plugin') ) {
			return;
		}

		if (!is_page() && !is_singular()) {
			return;
		}

		$document = Plugin::$instance->documents->get( get_the_ID() );
		if ( ! $document || ! $document->is_built_with_elementor() ) {
			return;
		}

		$elementor_data = get_post_meta( get_the_ID(), '_elementor_data', true );
		$elementor_data = JSON::isJson( $elementor_data ) ? $elementor_data : JSON::encode( $elementor_data );
		preg_match_all( '/"slider_id":"#(\d+)"/', $elementor_data, $sliderIDs, PREG_SET_ORDER );
		if ( ! empty( $sliderIDs ) ) {
			foreach( $sliderIDs as $sliderID ) {
				if ( !empty( $sliderID[1] ) ) {
					$this->documentIDs[] = $sliderID[1];
				}
			}
		}

		preg_match_all( '/\[depciter id="(\d+)"/', $elementor_data, $sliders, PREG_SET_ORDER );
		if ( ! empty( $sliders ) ) {
			foreach ( $sliders as $slider ) {
				if ( ! empty( $slider[1] ) ) {
					$this->documentIDs[] = $slider[1];
				}
			}
		}
	}

	public function checkForGutenbergWidget(){
		if (!is_page() && !is_singular()) {
			return;
		}

		$post_content = get_post( get_the_ID() )->post_content;
		if (strpos($post_content, 'wp:depicter/slider') === false && strpos($post_content, '[depicter id="') === false) {
			return;
		}

		preg_match_all( '/wp:depicter\/slider \{"id":(\d+)\}/', $post_content, $sliders, PREG_SET_ORDER );
		if ( ! empty( $sliders ) ) {
			foreach ( $sliders as $slider ) {
				if ( ! empty( $slider[1] ) ) {
					$this->documentIDs[] = $slider[1];
				}
			}
		}

		preg_match_all( '/\[depciter id="(\d+)"/', $post_content, $sliders, PREG_SET_ORDER );
		if ( ! empty( $sliders ) ) {
			foreach ( $sliders as $slider ) {
				if ( ! empty( $slider[1] ) ) {
					$this->documentIDs[] = $slider[1];
				}
			}
		}
	}

	public function checkForBeaverWidget() {
		if (!is_page() && !is_singular()) {
			return;
		}

		$flbuilder_data = get_post_meta( get_the_ID(), '_fl_builder_data', true);
		$flbuilder_data = is_array( $flbuilder_data ) ? maybe_serialize( $flbuilder_data ) : $flbuilder_data;
		preg_match_all( '/document_id";s:\d+:"(\d+)"/', $flbuilder_data, $sliderIDs, PREG_SET_ORDER );
		foreach( $sliderIDs as $key => $sliderID ) {
			if ( !empty( $sliderID[1] ) ) {
				$this->documentIDs[] = $sliderID[1];
			}
		}
	}

	public function checkForDiviWidget(){

		if ( ! function_exists( 'et_core_is_builder_used_on_current_request' ) ) {
			return;
		}

		if (!is_page() && !is_singular() && ! et_core_is_builder_used_on_current_request()) {
			return;
		}

		$post_content = get_post( get_the_ID() )->post_content;
		preg_match_all( '/document_id="(\d+)"/', $post_content, $sliderIDs, PREG_SET_ORDER );
		foreach( $sliderIDs as $key => $sliderID ) {
			if ( !empty( $sliderID[1] ) ) {
				$this->documentIDs[] = $sliderID[1];
			}
		}
	}
}
