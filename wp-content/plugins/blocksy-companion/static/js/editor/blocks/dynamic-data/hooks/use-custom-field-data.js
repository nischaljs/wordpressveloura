import { useMemo, useState, useEffect } from '@wordpress/element'

import { getStableJsonKey } from 'ct-wordpress-helpers/get-stable-json-key'
import cachedFetch from 'ct-wordpress-helpers/cached-fetch'

// TODO: maybe rename this hook to show that it can be used for something else
// other than custom fields.
//
// Potentially, termId can also be provided to get term data.
const useCustomFieldData = ({ postId, fieldDescriptor }) => {
	const [fieldData, setFieldData] = useState({})
	const { provider, id, ...rest } = fieldDescriptor

	const requestDescriptor = useMemo(() => {
		const url = `${wp.ajax.settings.url}?action=blocksy_dynamic_data_block_custom_field_data`

		const body = {
			post_id: postId,
			field_provider: provider,
			field_id: id,
			...rest,
		}

		return {
			url,
			body,
			cacheKey: getStableJsonKey({ ...body, url }),
		}
	}, [postId, provider, id, rest])

	useEffect(() => {
		cachedFetch(requestDescriptor.url, requestDescriptor.body)
			.then((response) => response.json())
			.then(({ success, data }) => {
				if (!success) {
					return
				}

				setFieldData((prev) => ({
					...prev,
					[requestDescriptor.cacheKey]: data.field_data,
				}))
			})
	}, [requestDescriptor])

	return {
		fieldData: fieldData[requestDescriptor.cacheKey]
			? fieldData[requestDescriptor.cacheKey]
			: null,
	}
}

export default useCustomFieldData
