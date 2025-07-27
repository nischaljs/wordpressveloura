import { createElement } from '@wordpress/element'

import ImagePreview from '../wp/ImagePreview'

const CustomImageField = ({
	fieldData,

	attributes,
	attributes: { sizeSlug },

	postId,
}) => {
	let maybeUrl = fieldData?.value?.url

	if (fieldData?.value?.sizes?.[sizeSlug]) {
		if (typeof fieldData.value.sizes[sizeSlug] === 'string') {
			maybeUrl = fieldData.value.sizes[sizeSlug]
		} else {
			maybeUrl = fieldData.value.sizes[sizeSlug].url
		}
	}

	return (
		<ImagePreview postId={postId} attributes={attributes} url={maybeUrl} />
	)
}

export default CustomImageField
