import { createElement, RawHTML } from '@wordpress/element'
import { useSelect } from '@wordpress/data'
import { __ } from 'ct-i18n'

import classnames from 'classnames'
import useCustomFieldData from '../../hooks/use-custom-field-data'

const AttributesPreview = ({
	postId,
	postType,

	fallback,

	attributes,
	attributes: { attribute: req_attribute, separator },

	fieldsDescriptor,
}) => {
	const { fieldData } = useCustomFieldData({
		postId,
		fieldDescriptor: {
			provider: 'woo',
			id: 'attributes',
			attribute: req_attribute,
		},
	})

	const taxonomyName = `Attributes: ${req_attribute}`

	if (!postId || !fieldData) {
		return `${taxonomyName}`
	}

	if (fieldData.length === 0) {
		return fallback || `${taxonomyName}`
	}

	let TagName = 'span'

	return fieldData.map((t, index) => (
		<>
			<TagName
				className={classnames(
					{
						[`ct-term-${t.term_id}`]:
							attributes.termAccentColor === 'yes',
					},
					attributes.termClass
				)}
				dangerouslySetInnerHTML={{ __html: t.name }}
			/>
			{index !== fieldData.length - 1
				? separator.replace(/ /g, '\u00A0')
				: ''}
		</>
	))
}

export default AttributesPreview
