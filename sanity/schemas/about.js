export default {
	name: 'about',
	title: 'О нас',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'desc',
			title: 'Описание магазина',
			type: 'text',
			rows: 20,
		},
		{
			name: 'imageurl',
			title: 'Фото к описанию',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'imageurl',
		},
	},
}
