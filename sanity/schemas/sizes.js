export default {
	title: 'Размеры',
	name: 'sizes',
	type: 'document',
	fields: [
		{
			title: 'Размеры одежды',
			name: 'sizes',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
		},
	],
}
