<?php
namespace Depicter\Document\Models\Elements;

use Depicter\Document\CSS\Selector;
use Depicter\Document\Helper\Helper;
use Depicter\Document\Models\Common\Styles;
use Depicter\Document\Models\Element;
use Depicter\GuzzleHttp\Exception\GuzzleException;
use Depicter\Html\Html;

class HoverSwitchImage extends Element
{
    /**
     * @throws GuzzleException
     * @throws \JsonMapper_Exception
     */
    public function render()
    {
        $args                = $this->getDefaultAttributes();
        $args[ 'data-type' ] = "hoverSwitch";

        if ( ! empty( $this->options->switchDuration ) ) {
            $args[ 'data-switch-duration' ] = $this->options->switchDuration;
        }

        $output = Html::div( $args );
        if ( ! empty( $this->options->primarySource->src ) ) {
            $primarySrcset = \Depicter::media()->getSrcSet( $this->maybeReplaceDataSheetTags( $this->options->primarySource->src ) );
            $source = ! empty( $primarySrcset ) ? Html::source( [
                'data-depicter-srcset' => $primarySrcset,
                'srcset'               => \Depicter::media()::IMAGE_PLACEHOLDER_SRC,
            ] ) : ""; 

            $img = Html::img( '', [
                'src'               => \Depicter::media()::IMAGE_PLACEHOLDER_SRC,
                'data-depicter-src' => \Depicter::media()->getSourceUrl( $this->maybeReplaceDataSheetTags( $this->options->primarySource->src ) ),
                'alt'               => \Depicter::media()->getAltText( $this->maybeReplaceDataSheetTags( $this->options->primarySource->src ) )
            ] );

            $primaryImage = Html::picture( [
                'class' => Selector::prefixify( 'primary' )
            ], $source . $img );

            $output->nest( "\n" . $primaryImage );
        }

        if ( ! empty( $this->options->secondarySource->src ) ) {

            $secondarySrcset = \Depicter::media()->getSrcSet( $this->maybeReplaceDataSheetTags( $this->options->secondarySource->src ) );
            $source = ! empty( $secondarySrcset ) ? Html::source( [
                'data-depicter-srcset' => $secondarySrcset,
                'srcset'               => \Depicter::media()::IMAGE_PLACEHOLDER_SRC,
            ] ) : ""; 

            $img = Html::img( '', [
                'src'               => \Depicter::media()::IMAGE_PLACEHOLDER_SRC,
                'data-depicter-src' => \Depicter::media()->getSourceUrl( $this->maybeReplaceDataSheetTags( $this->options->secondarySource->src ) ),
                'alt'               => \Depicter::media()->getAltText( $this->maybeReplaceDataSheetTags( $this->options->secondarySource->src ) )
            ] );

            $secondaryImage = Html::picture( [
                'class' => Selector::prefixify( 'secondary' )
            ], $source . $img );

            $output->nest( "\n" . $secondaryImage );
        }

        return $output;
    }
}
