<?php

namespace Blocksy\Editor\Blocks;

class DynamicData {
	public function __construct() {
		register_block_type(
			BLOCKSY_PATH . '/static/js/editor/blocks/dynamic-data/block.json',
			[
				'render_callback' => [$this, 'render'],
			]
		);

		add_filter('blocksy:block-editor:localized_data', function ($data) {
			$options = blocksy_akg(
				'options',
				blc_theme_functions()->blocksy_get_variables_from_file(
					dirname(__FILE__) . '/options.php',
					['options' => []]
				)
			);

			$options_name = 'dynamic-data';

			$data[$options_name] = $options;

			return $data;
		});

		add_action('rest_api_init', function() {
			register_rest_field('attachment', 'has_video', array(
				'get_callback' => function ($post, $field_name, $request) {
					if ($post['type'] !== 'attachment') {
						return null;
					}

					$maybe_new_video = blocksy_get_post_options($post['id']);
					$media_video_source = blocksy_akg('media_video_source', $maybe_new_video, 'upload');

					$video_url = '';

					if ($media_video_source === 'upload') {
						$video_url = blocksy_akg('media_video_upload', $maybe_new_video, '');
					}

					if ($media_video_source === 'youtube') {
						$video_url = blocksy_akg('media_video_youtube_url', $maybe_new_video, '');
					}

					if ($media_video_source === 'vimeo') {
						$video_url = blocksy_akg('media_video_vimeo_url', $maybe_new_video, '');
					}

					if (! empty($video_url)) {
						return true;
					}

					return false;
				}
			));
		});

		add_action(
			'wp_ajax_blocksy_blocks_retrieve_dynamic_data_descriptor',
			function () {
				$blocksy_manager = blc_theme_functions()->blocksy_manager();

				if (
					! current_user_can('manage_options')
					||
					! $blocksy_manager
				) {
					wp_send_json_error();
				}

				$data = json_decode(file_get_contents('php://input'), true);

				// TODO: remove tmp override
				if (! isset($data['post_id'])) {
					$potential_post_types = $blocksy_manager->post_types->get_all();

					$fields = [];

					foreach ($potential_post_types as $single_cpt) {
						$fields = array_merge(
							$fields,
							$this->get_custom_fields($single_cpt)
						);
					}

					wp_send_json_success(apply_filters(
						'blocksy:general:blocks:dynamic-data:data',
						[
							'post_id' => null,
							'post_type' => 'post',
							'fields' => array_map(
								"unserialize",
								array_unique(
									array_map(
										"serialize",
										$fields
									)
								)
							),
							'dynamic_styles' => $this->get_dynamic_styles_for(),
							'$potential_post_types' => $potential_post_types
						]
					));
				}

				if (! $data || ! isset($data['post_id'])) {
					wp_send_json_error();
				}

				if (! function_exists('blc_get_ext')) {
					wp_send_json_error();
				}

				$post_type = get_post_type($data['post_id']);

				$fields = $this->get_custom_fields($post_type, $data['post_id']);

				if (in_array($post_type, ['ct_product_tab', 'ct_size_guide'])) {
					$fields = $this->get_custom_fields('product');
				}

				wp_send_json_success(apply_filters(
					'blocksy:general:blocks:dynamic-data:data',
					[
						'post_id' => $data['post_id'],
						'post_type' => $post_type,
						'fields' => $fields,
						'dynamic_styles' => $this->get_dynamic_styles_for()
					]
				));
			}
		);

		add_action(
			'wp_ajax_blocksy_dynamic_data_block_custom_field_data',
			function () {
				if (! current_user_can('manage_options')) {
					wp_send_json_error();
				}

				$data = json_decode(file_get_contents('php://input'), true);

				if (
					! $data
					||
					! isset($data['post_id'])
					||
					! isset($data['field_provider'])
					||
					! isset($data['field_id'])
				) {
					wp_send_json_error();
				}

				$post_type = get_post_type($data['post_id']);

				if (
					$data['field_provider'] === 'woo'
					&&
					$data['field_id'] === 'brands'
				) {
					$brands = get_the_terms($data['post_id'], 'product_brand');

					$brands_result = [];

					foreach ($brands as $term) {
						$term_atts = get_term_meta(
							$term->term_id,
							'blocksy_taxonomy_meta_options'
						);


						if (empty($term_atts)) {
							$term_atts = [[]];
						}

						$term_atts = $term_atts[0];

						$maybe_image_id = isset($term->term_id) ? get_term_meta($term->term_id, 'thumbnail_id', true) : '';

						if (! empty($maybe_image_id)) {
							$term_atts['icon_image'] = [
								'attachment_id' => $maybe_image_id,
								'url' => wp_get_attachment_image_url($maybe_image_id, 'full')
							];
						}

						$maybe_image = blocksy_akg('icon_image', $term_atts, '');

						if (is_array($maybe_image)) {
							$attachment = $maybe_image;
						}

						$brands_result[] = [
							'term_id' => $term->term_id,
							'name' => $term->name,
							'slug' => $term->slug,
							'image' => $attachment
						];
					}

					wp_send_json_success([
						'post_id' => $data['post_id'],
						'post_type' => $post_type,
						'field_data' => $brands_result
					]);
				}

				if (
					$data['field_provider'] === 'woo'
					&&
					$data['field_id'] === 'attributes'
				) {
					if (
						! $data['post_id']
						||
						! $data['attribute']
					) {
						wp_send_json_error();
					}

					$product = wc_get_product($data['post_id']);

					if (! $product) {
						wp_send_json_error();
					}

					$attributes = $product->get_attributes();
					$taxonomy_name = wc_attribute_taxonomy_name($data['attribute']);

					if (
						! $attributes
						||
						! isset($attributes[sanitize_title($taxonomy_name)])
					) {
						wp_send_json_error();
					}

					$attribute = $attributes[sanitize_title($taxonomy_name)];

					

					if (! $attribute) {
						wp_send_json_error();
					}

					$terms = $attribute->get_terms();
					$terms_result = [];

					if ($terms) {
						foreach ($terms as $term) {

							$terms_result[] = [
								'term_id' => $term->term_id,
								'name' => $term->name,
								'slug' => $term->slug,
								
							];

							
						}
					}

					wp_send_json_success([
						'post_id' => $data['post_id'],
						'post_type' => $post_type,
						'field_data' => $terms_result
					]);
				}

				$maybe_ext = blc_get_ext('post-types-extra');

				if (! $maybe_ext || ! $maybe_ext->dynamic_data) {
					wp_send_json_error();
				}

				$field_render = blc_get_ext('post-types-extra')
					->dynamic_data
					->get_field_to_render(
						[
							'id' => $data['field_provider'] . '_field',
							'field' => $data['field_id'],
						],
						[
							'post_type' => $post_type,
							'post_id' => $data['post_id'],
							'allow_images' => true
						]
					);

				wp_send_json_success([
					'post_id' => $data['post_id'],
					'post_type' => $post_type,
					'field_data' => $field_render['value']
				]);
			}
		);

		add_filter(
			'render_block_data',
			function ($parsed_block) {
				if ($parsed_block['blockName'] !== 'blocksy/dynamic-data') {
					return $parsed_block;
				}

				$element_block_styles = [
					'overlay' => [
						'color' => [
							'background' => '#000000'
						]
					],
				];

				if (isset($parsed_block['attrs']['style']['elements'])) {
					$element_block_styles = $parsed_block['attrs']['style']['elements'];
				}

				if (! $element_block_styles) {
					return $parsed_block;
				}

				$class_name = wp_get_elements_class_name($parsed_block);

				$updated_class_name = isset($parsed_block['attrs']['className']) ? $parsed_block['attrs']['className'] . " $class_name" : $class_name;

				_wp_array_set(
					$parsed_block,
					['attrs', 'className'],
					$updated_class_name
				);

				$overlayOpacity = intval(blocksy_akg(
					'dimRatio',
					$parsed_block['attrs'],
					50
				)) / 100;

				$element_types = [
					'link' => [
						'selector'       => ".$class_name a",
						'hover_selector' => ".$class_name a:hover"
					],

					'overlay' => [
						'selector' => ".$class_name .wp-block-cover__background",

						'additional_styles' => [
							'opacity' => $overlayOpacity
						]
					]
				];

				foreach ($element_types as $element_type => $element_config) {
					$element_style_object = isset($element_block_styles[$element_type]) ? $element_block_styles[ $element_type ] : null;

					// Process primary element type styles.
					if ($element_style_object) {
						blc_call_gutenberg_function(
							'wp_style_engine_get_styles',
							[
								$element_style_object,
								[
									'selector' => $element_config['selector'],
									'context' => 'block-supports',
								]
							]
						);

						if (isset($element_config['additional_styles'])) {
							blc_get_gutenberg_class('\WP_Style_Engine')::store_css_rule(
								'block-supports',
								$element_config['selector'],
								$element_config['additional_styles']
							);
						}

						if (isset($element_style_object[':hover'])) {
							blc_call_gutenberg_function(
								'wp_style_engine_get_styles',[
									$element_style_object[':hover'],
									[
										'selector' => $element_config['hover_selector'],
										'context' => 'block-supports',
									]
								]
							);
						}
					}
				}

				return $parsed_block;
			},
			10, 1
		);
	}

	public function render($attributes, $content, $block) {
		if (
			isset($attributes['lightbox'])
			&&
			$attributes['lightbox'] === 'yes'
		) {
			if (wp_script_is('wp-block-image-view', 'registered')) {
				wp_enqueue_script('wp-block-image-view');
			}

			if (function_exists('wp_scripts_get_suffix')) {
				wp_register_script_module(
					'@wordpress/block-library/image',
					includes_url("blocks/image/view.min.js"),
					array('@wordpress/interactivity'),
					defined('GUTENBERG_VERSION') ? GUTENBERG_VERSION : get_bloginfo('version')
				);

				wp_enqueue_script_module('@wordpress/block-library/image');
			}
		}

		$post_id = get_the_ID();

		$maybe_special_post_id = blocksy_get_special_post_id([
			'context' => 'local',
			'block_context' => $block->context,
		]);

		$old_post = null;

		if ($maybe_special_post_id && $post_id !== $maybe_special_post_id) {
			global $post;

			$old_post = $post;

			$post = get_post($maybe_special_post_id);
			setup_postdata($post);
		}

		$content = blocksy_render_view(
			dirname(__FILE__) . '/view.php',
			[
				'attributes' => $attributes,
				'content' => $content,
				'block_instance' => $this,
				'block' => $block
			]
		);

		if ($old_post !== null) {
			wp_reset_postdata();
			$post = $old_post;
		}

		return $content;
	}

	public function get_dynamic_styles_for() {
		if (
			! function_exists('blc_get_ext')
			||
			! blc_get_ext('post-types-extra')
			||
			! blc_get_ext('post-types-extra')->taxonomies_customization
		) {
			return '';
		}

		$styles = [
			'desktop' => '',
			'tablet' => '',
			'mobile' => ''
		];

		$css = new \Blocksy_Css_Injector();
		$tablet_css = new \Blocksy_Css_Injector();
		$mobile_css = new \Blocksy_Css_Injector();

		blc_get_ext('post-types-extra')
			->taxonomies_customization
			->get_terms_dynamic_styles([
				'css' => $css,
				'tablet_css' => $tablet_css,
				'mobile_css' => $mobile_css,
				'context' => 'global',
				'chunk' => 'global'
			]);

		$styles['desktop'] .= $css->build_css_structure();
		$styles['tablet'] .= $tablet_css->build_css_structure();
		$styles['mobile'] .= $mobile_css->build_css_structure();

		$final_css = '';

		if (! empty($styles['desktop'])) {
			$final_css .= $styles['desktop'];
		}

		if (! empty(trim($styles['tablet']))) {
			$final_css .= '@media (max-width: 999.98px) {' . $styles['tablet'] . '}';
		}

		if (! empty(trim($styles['mobile']))) {
			$final_css .= '@media (max-width: 689.98px) {' . $styles['mobile'] . '}';
		}

		return $final_css;
	}

	public function get_custom_fields($post_type, $post_id = null) {
		$providers = [];

		if (
			function_exists('blc_get_ext')
			&&
			blc_get_ext('post-types-extra')
			&&
			blc_get_ext('post-types-extra')->dynamic_data
		) {
			$providers = [
				'acf',
				'metabox',
				'custom',
				'toolset',
				'jetengine',
				'pods',
				'acpt'
			];
		}

		$fields = [];

		foreach ($providers as $provider) {
			$maybe_fields = blc_get_ext('post-types-extra')
				->dynamic_data
				->retrieve_dynamic_data_fields([
					'post_type' => $post_type,
					'provider' => $provider,
					'allow_images' => true,
					'post_id' => $post_id,
				]);

			if (empty($maybe_fields)) {
				continue;
			}

			$result = [];

			foreach ($maybe_fields as $field => $label) {
				$field_render = blc_get_ext('post-types-extra')
					->dynamic_data
					->get_field_to_render(
						[
							'id' => $provider . '_field',
							'field' => $field,
						],
						[
							'post_type' => $post_type,
							'post_id' => $post_id,
							'allow_images' => true
						]
					);

				if (! $field_render) {
					continue;
				}

				$field_type = 'text';

				if (
					is_array($field_render['value'])
					&&
					isset($field_render['value']['type'])
				) {
					if ($field_render['value']['type'] === 'image') {
						$field_type = 'image';
					}
				}

				$result[] = [
					'id' => $field,
					'label' => $label,
					'type' => $field_type
				];
			}

			$fields[] = [
				'provider' => $provider,
				'fields' => $result
			];
		}

		return $fields;
	}
}


