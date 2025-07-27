<?php
namespace Depicter\Document\Models\Common\Styles;


use Depicter\Document\CSS\Breakpoints;

class Svg extends States
{

	public function set( $css ) {
		$devices = Breakpoints::names();
		foreach ( $devices as $device ) {
			if ( !empty( $this->{$device}->fill ) ) {
				$css[ $device ][ 'fill' ] = $this->{$device}->fill;
			}

			if ( !empty( $this->{$device}->stroke ) ) {
				$css[ $device ][ 'stroke' ] = $this->{$device}->stroke;
			}

			if ( !empty( $this->{$device}->strokeWidth ) ) {
				$css[ $device ][ 'stroke-width' ] = $this->{$device}->strokeWidth->value . $this->{$device}->strokeWidth->unit;
			}

			if ( !empty( $this->{$device}->color ) ) {
				$css[ $device ][ 'color' ] = $this->{$device}->color;
			}

			if ( !empty( $this->{$device}->stopColor ) ) {
				$css[ $device ][ 'stop-color' ] = $this->{$device}->stopColor;
			}
		}

		return $css;
	}
}
