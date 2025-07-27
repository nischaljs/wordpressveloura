<?php

namespace Depicter\Rules\Condition\WordPress;

use Averta\Core\Utility\Arr;
use Depicter\Rules\Condition\Base as ConditionBase;

class IsLanguage extends ConditionBase
{
	/**
	 * @inheritdoc
	 */
	public $slug = 'WordPress_IsLanguage';

	/**
	 * @inheritdoc
	 */
	public $control = 'dropdown';

	/**
	 * @inheritdoc
	 */
	protected $belongsTo = 'WordPress';

	/**
	 * Tier of this condition
	 *
	 * @var string
	 */
	protected $tier = 'pro-user';

	/**
	 * @inheritdoc
	 */
	public function getLabel(): ?string{
		return __('WP Language', 'depicter' );
	}

	/**
	 * @inheritDoc
	 */
	public function getDescription(): ?string{
		return __( 'When displayed page is in the specified language.', 'depicter' );
	}

	/**
	 * @inheritDoc
	 */
	public function getControlOptions(){
		$options = parent::getControlOptions();

        if (function_exists('PLL')) {
            $polylang = PLL();
            if ( $polylang ) {
                $languages = $polylang->model->get_languages_list();
                $languageOptions = [];
                foreach ($languages as $key => $language) {
                    $languageOptions[$key] = [
                        'label' => $language->name,
                        'value' => $language->slug
                    ];
                }
                $options = Arr::merge( $options, [ 'options' => $languageOptions ]);
            }
        } else if ( function_exists('icl_get_languages') ) {
            $languages = apply_filters( 'wpml_active_languages', NULL, array( 'skip_missing' => 0 ) );

			if ( !empty( $languages ) ) {
				$languageOptions = [];
				foreach( $languages as $lang ) {
					$languageOptions[] = [
						'label' => $lang['translated_name'],
						'value' => $lang['language_code']
					];
				}

				$options = Arr::merge( $options, [ 'options' => $languageOptions ]);
			}

		}

		return $options;
    }

	/**
	 * @inheritdoc
	 */
	public function check( $value = null ): bool{

		$value = $value ?? $this->value;
		if ( empty( $value ) ) {
			$value = $this->defaultValue;
		}
		
        $isIncluded = false;

        if ( function_exists('pll_current_language') ) {
            $currentLanguage = pll_current_language();
            $isIncluded = $currentLanguage === $value[0] || $value[0] == 'all';
        } else if ( function_exists('icl_get_languages') ) {
            $currentLanguage = apply_filters( 'wpml_current_language', NULL );
            $isIncluded = $currentLanguage === $value[0] || $value[0] == 'all';
        } else if ( $value[0] == 'all' ) {
			$isIncluded = true;
		}

		return $this->selectionMode === 'include' ? $isIncluded : ! $isIncluded;
	}

	/**
	 * Check if the condition is visible or not
	 *
	 * @return boolean
	 */
	public function isVisible() {
		return function_exists('PLL') || function_exists('icl_get_languages');
	}
}
