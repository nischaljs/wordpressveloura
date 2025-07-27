<?php
namespace Depicter\Document\Models\Elements;

use Depicter\Document\CSS\Selector;
use Depicter\Html\Html;

class Survey extends Form
{
	/**
	 * @throws \JsonMapper_Exception
	 */
	public function render() {
		$args = $this->getDefaultAttributes();
		$output = '';

		$args['data-type'] = $this->componentType;
        switch ( $this->componentType ) {
            case 'survey:input':
                $output = Html::div( $args, $this->getInputContent() );
                break;
            case 'survey:errorMessage':
                $output = Html::div( $args, $this->getErrorMessage() );
                break;
            default:
                break;
        }

		return $output . "\n";
	}

	protected function getErrorMessage(): string{
		$output = '';
		if ( ! empty( $this->options->content )) {
			$output .= "\n" . Html::p([
				'class' => Selector::prefixify( 'message' ) . ' ' . Selector::prefixify( 'message-error' )
            ], $this->options->content );
		}

		return $output;
	}
}
