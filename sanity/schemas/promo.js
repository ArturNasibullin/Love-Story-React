import { MdInsertEmoticon } from 'react-icons/md'

export default {
	name: 'promo',
	type: 'document',
	title: 'Акции и скидки на главной',
	icon: MdInsertEmoticon,
	fields: [
		{
			name: 'heading',
			type: 'string',
			title: 'Заголовок',
		},
		{
			name: 'tagline',
			type: 'text',
			title: 'Подробности',
		},
	],
}
