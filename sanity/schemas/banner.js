import { MdWhatshot } from 'react-icons/md'

export default {
	name: 'banner',
	title: 'Banner',
	type: 'document',
	icon: MdWhatshot,
	fields: [
		{
			name: 'name',
			title: 'Название вещи',
			type: 'string',
		},
		{
			name: 'discount',
			title: 'Скидка',
			type: 'number',
		},
		{
			name: 'imageurl',
			title: 'Фото',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
}
