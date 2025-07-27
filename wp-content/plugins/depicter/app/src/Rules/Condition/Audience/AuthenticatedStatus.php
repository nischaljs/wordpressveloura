<?php

namespace Depicter\Rules\Condition\Audience;

use Averta\Core\Utility\Arr;
use Depicter\Rules\Condition\Base;

class AuthenticatedStatus extends Base
{
    /**
     * @inheritdoc
     */
    public $slug = 'Audience_AuthenticatedStatus';

    /**
     * @inheritdoc
     */
    public $control = 'dropdown';

    /**
     * @inheritdoc
     */
    protected $belongsTo = 'Audience';

    /**
     * @inheritdoc
     */
    public function getLabel(): ?string{
        return __('Login Status ', 'depicter' );
    }

    /**
     * @inheritDoc
     */
    public function getControlOptions(){
        $options = parent::getControlOptions();

        return Arr::merge( $options, [ 'options' => [
            [
                'label' => __( 'Logged In', 'depicter' ),
                'value' => 'logged_in'
            ],
            [
                'label' => __( 'Logged Out', 'depicter' ),
                'value' => 'logged_out'
            ]
        ]]);
    }

    /**
     * @inheritdoc
     */
    public function check( $value = null ): bool{

        $value = $value ?? $this->value;
        $isIncluded = empty( $value );
        if ( ! $isIncluded ) {
            $isIncluded = $value[0] == 'logged_in' ? is_user_logged_in() : ! is_user_logged_in() ;
        }

        return $this->selectionMode === 'include' ? $isIncluded : ! $isIncluded;
    }
}
