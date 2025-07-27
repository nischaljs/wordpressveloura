<?php
namespace Depicter\Services;

use Averta\Core\Utility\Arr;
use Averta\Core\Utility\Data;
use Depicter\Document\Helper\Helper;
use Depicter\Utility\Sanitize;

class SettingsManagerService
{
    protected array $generalSettings;

    protected array $paidSettings;

    protected function setGeneralSettings()
    {
        $this->generalSettings = [
            [
                'type' => 'select',
                'id' => 'use_google_fonts',
                'label' => __( 'Google Fonts', 'depicter' ),
                'options' => [
                    'on' => __( 'Default (Enable)', 'depicter' ),
                    'off' => __( 'Disable', 'depicter' ),
                    'editor_only' => __( 'Load in Editor Only', 'depicter' ),
                    'save_locally' => __( 'Save Locally', 'depicter' )
                ],
                'description' => __( 'Enable, disable, or save Google Fonts locally on your host.', 'depicter' ),
                'sanitize_callback' => function( $value ) {
                    if ( in_array( $value, [ 'editor_only', 'save_locally' ] ) ) {
                        return $value;
                    }

                    return Data::isTrue( $value ) ? 'on' : 'off';
                }
            ],
            [
                'type' => 'select',
                'id' => 'resource_preloading',
                'label' => __( 'Resource Preloading', 'depicter' ),
                'options' => [
                    'on' => __( 'Default (Enable)', 'depicter' ),
                    'off' => __( 'Disable', 'depicter' )
                ],
                'description' => __( 'Enable or disable preloading of website resources (images and CSS) for faster page load speed.', 'depicter' ),
                'sanitize_callback' => function( $value ) {
                    return Data::isTrue( $value ) ? 'on' : 'off';
                }
            ],
            [
                'type' => 'select',
                'id' => 'allow_unfiltered_data_upload',
                'label' => __( 'Allow SVG & JSON Upload?', 'depicter' ),
                'options' => [
                    'off' => __( 'Disable', 'depicter' ),
                    'on'  => __( 'Enable', 'depicter' )
                ],
                'description' => __( 'Attention! Allowing uploads of SVG or JSON files is a potential security risk.<br/>Although Depicter sanitizes such files, we recommend that you only enable this feature if you understand the security risks involved.', 'depicter' ),
                'sanitize_callback' => function( $value ) {
                    return Data::isTrue( $value ) ? 'on' : 'off';
                }
            ],
            [
                'type' => 'button',
                'id' => 'regenerate_css_flush_cache',
                'label' => __( 'Regenerate CSS & Flush Cache', 'depicter' ),
                'button_text' => __( 'Regenerate CSS & Flush Cache', 'depicter' ),
                'class' => 'button button-secondary depicter-flush-cache',
                'icon' => '<span class="dashicons dashicons-update" style="line-height:28px; margin-right:8px; height:28px;"></span>',
                'store_callback' => function( $value ) {
                    try{
                        $documents = \Depicter::documentRepository()->select( [ 'id' ] )->findAll()->get();
                        if ( $documents )  {
                            $documents = $documents->toArray();
                            foreach( $documents as $document ) {
                                \Depicter::front()->render()->flushDocumentCache( $document['id'] );
                            }
                        }
                        return true;
                    } catch( \Exception $e ){
                        return false;
                    }
                }
            ],
            [
                'type' => 'checkbox',
                'id' => 'always_load_assets',
                'label' => __( 'Load assets on all pages?', 'depicter' ),
                'description' => "<br><br>". __( 'By default, Depicter will load corresponding JavaScript and CSS files on demand. but if you need to load assets on all pages, check this option. <br>(For example, if you plan to load Depicter via Ajax, you need to enable this option)', 'depicter' ),
                'sanitize_callback' => function( $value ) {
                    return Data::isTrue($value);
                }
            ]
        ];
    }

    protected function setPaidSettings()
    {
        $this->paidSettings = [
            [
                'type' => 'text',
                'id' => 'google_recaptcha_client_key',
                'label' => __( 'Google Recaptcha (v3) Client key', 'depicter' ),
                'description' => "",
            ],
            [
                'type' => 'password',
                'id' => 'google_recaptcha_secret_key',
                'label' => __( 'Google Recaptcha (v3) Secret key', 'depicter' ),
                'description' => "",
            ],
            [
                'type' => 'number',
                'id' => 'google_recaptcha_score_threshold',
                'label' => __( 'Score Threshold', 'depicter' ),
                'default' => 0.6,
                'description' => __( 'reCAPTCHA v3 returns a score (1.0 is very likely a good interaction, 0.0 is very likely a bot). If the score less than or equal to this threshold, the form submission will be blocked and the message below will be displayed.', 'depicter' ),
                'sanitize_callback' => function( $value ) {
                    return Sanitize::float( $value );
                }
            ],
            [
                'type' => 'textarea',
                'id' => 'google_recaptcha_fail_message',
                'label' => __( 'Fail Message', 'depicter' ),
                'default' => __('Google reCAPTCHA verification failed, please try again later.', 'depicter' ),
                'description' => __( 'Displays to users who fail the verification process.', 'depicter'),
            ],
            [
                'type' => 'password',
                'id' => 'google_places_api_key',
                'label' => __( 'Google Places Api key', 'depicter' ),
                'description' => sprintf(
                    __("To fetch and display reviews of a place on your website (Google Reviews), you need to provide %s a valid Google Places API key%s.", 'depicter' ),
                    '<a href="https://docs.depicter.com/article/290-google-places-api-key" target="_blank">',
                    '</a>'
                )
            ]
        ];
    }

    protected function getGeneralSettings(): array
    {
        return $this->generalSettings;
    }

    protected function getPaidSettings(): array
    {
        return $this->paidSettings;
    }

    public function getAll(): array
    {
        $this->setGeneralSettings();
        $this->setPaidSettings();

        $settings = $this->getGeneralSettings();
        if ( \Depicter::auth()->isPaid() ) {
            $settings = Arr::merge( $this->getPaidSettings(), $settings );
        }

        return $settings;
    }

    /**
     * get setting by its id
     *
     * @param  string  $id
     *
     * @return array|null
     */
    public function get(string $id): ?array
    {
        $settings = $this->getAll();
        foreach ( $settings as $setting ) {
            if ( $setting['id'] == $id ) {
                return $setting;
            }
        }

        return null;
    }

    public function store( string $id, $value ): bool
    {
        $setting = $this->get( $id );
        if (!$setting) {
            return false;
        }

        if ( isset( $setting['store_callback'] ) && is_callable( $setting['store_callback'] ) ) {
            return call_user_func( $setting['store_callback'], $value );
        }

        if ( isset( $setting['sanitize_callback'] ) && is_callable( $setting['sanitize_callback'] ) ) {
            $value = call_user_func( $setting['sanitize_callback'], $value );
        } else {
            $value = Sanitize::textfield( $value );
        }

        return \Depicter::options()->get( $id ) == $value || \Depicter::options()->set( $id, $value );
    }

    public function getSettingValue(string $id)
    {
        $setting = $this->get( $id );
        if (!$setting) {
            return null;
        }
        return \Depicter::options()->get( $id );
    }

    public function map($settings) {
        $mappedSettings = [];
        foreach ( $settings as $settingKey => $settingValue ) {
            if ( is_array( $settingValue ) ) {
                foreach ( $settingValue as $key =>  $value ) {
                    $mappedSettings[ Helper::camelCaseToSnakeCase( $settingKey ) . '_' .  Helper::camelCaseToSnakeCase( $key ) ] = $value;
                }
            } else {
                $mappedSettings[ Helper::camelCaseToSnakeCase( $settingKey ) ] = $settingValue;
            }
        }

        return $mappedSettings;
    }
}
