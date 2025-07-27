<?php

namespace Blocksy;

class ConditionsManagerAPI {
	public function __construct() {
		add_action('wp_ajax_blc_retrieve_conditions_data', function () {
			$capability = blc_get_capabilities()->get_wp_capability_by('conditions');

			if (! current_user_can($capability)) {
				wp_send_json_error();
			}

			$filter = 'all';

			$allowed_filters = [
				'archive',
				'singular',
				'product_tabs',
				'product_waitlist',
				'maintenance-mode',
				'content_block_hook'
			];

			if (
				$_REQUEST['filter']
				&&
				in_array($_REQUEST['filter'], $allowed_filters)
			) {
				$filter = $_REQUEST['filter'];
			}

			$languages = [];

			if (function_exists('blocksy_get_current_language')) {
				$languages = blocksy_get_all_i18n_languages();
			}

			$conditions_manager = new ConditionsManager();

			wp_send_json_success([
				'languages' => $languages,
				'conditions' => $conditions_manager->get_all_rules([
					'filter' => $filter
				]),
			]);
		});
	}
}

