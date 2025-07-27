<?php

$login_label = do_shortcode(
	blocksy_translate_dynamic(
		blocksy_default_akg(
			'login_label',
			$atts,
			__('Login', 'blocksy-companion')
		),
		$panel_type . ':' . $section_id . ':' . $item_id . ':login_label'
	)
);

$loggedout_account_label_visibility = blocksy_akg(
	'loggedout_account_label_visibility',
	$atts,
	[
		'desktop' => false,
		'tablet' => false,
		'mobile' => false,
	]
);

$loggedout_icon_visibility = blocksy_akg(
	'loggedout_icon_visibility',
	$atts,
	[
		'desktop' => true,
		'tablet' => true,
		'mobile' => true,
	]
);

$link = '#account-modal';
$aria_controls = 'aria-controls="account-modal"';

$login_account_action = blocksy_akg('login_account_action', $atts, 'modal');

if ($login_account_action === 'custom') {
	$link = do_shortcode(blocksy_akg('loggedout_account_custom_page', $atts, ''));
	$aria_controls = '';
}

if ($login_account_action === 'woocommerce_account') {
	$link = get_permalink(get_option('woocommerce_myaccount_page_id'));
	$aria_controls = '';
}

$loggedout_label_position = blocksy_expand_responsive_value(
	blocksy_akg('loggedout_label_position', $atts, 'left')
);

$attr['data-state'] = 'out';
$data_label_attr = '';

if (blocksy_akg('logged_out_style', $atts, 'icon') !== 'none') {
	$data_label_attr = 'data-label="' . $loggedout_label_position[$device] . '"';
}

echo '<div ' . blocksy_attr_to_html($attr) . '>';

echo '<a href="' . $link . '" class="ct-account-item" ' . $data_label_attr . ' ' . $aria_controls . ' aria-label="' .  $login_label . '">';

if (! empty($login_label)) {
	echo '<span class="' . trim('ct-label ' . blocksy_visibility_classes(
		$loggedout_account_label_visibility
	)) . '" aria-hidden="true">';

	echo $login_label;

	echo '</span>';
}

if (blocksy_akg('logged_out_style', $atts, 'icon') === 'icon') {
	$media_html = $icon[
		blocksy_default_akg('accountHeaderIcon', $atts, 'type-1')
	];

	if (function_exists('blc_get_icon')) {
		$icon_source = blocksy_default_akg('logged_out_icon_source', $atts, 'default');

		if ( $icon_source === 'custom' ) {
			$media_html = blc_get_icon([
				'icon_descriptor' => blocksy_akg(
					'logged_out_custom_icon',
					$atts,
					['icon' => 'blc blc-user']
				),
				'icon_container' => false,
				'icon_html_atts' => [
					'class' => trim('ct-icon ' . blocksy_visibility_classes($loggedout_icon_visibility))
				]
			]);
		}

	}

	echo $media_html ;
}

echo '</a>';

echo '</div>';
