import { MdShoppingCart } from 'react-icons/md'

export default {
	name: 'product',
	title: 'Product',
	type: 'document',
	icon: MdShoppingCart,

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			title: 'Price',
			name: 'price',
			type: 'number',
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string',
				},
			],
			options: {
				layout: 'tags',
			},
		},
		{
			name: 'vendor',
			title: 'Vendor',
			type: 'reference',
			to: { type: 'vendor' },
		},
		{
			title: 'Размер',
			name: 'sizes',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'sizes' },
				},
			],
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'category' },
				},
			],
		},
		{
			name: 'body',
			title: 'Body',
			type: 'localeBlockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'images[0]',
		},
	},
}
