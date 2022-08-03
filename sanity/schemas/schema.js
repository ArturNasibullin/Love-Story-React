import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'

import banner from './banner'
import about from './about'
import category from './category'
import product from './product'
import vendor from './vendor'
import social from './social'
import ad from './ad'
import sizes from './sizes'

import siteConfig from './siteConfig'
import head from './head'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import figure from './objects/figure'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		banner,
		about,
		product,
		vendor,
		category,
		social,
		ad,
		sizes,

		blockContent,
		localeText,
		localeBlockContent,
		localeString,
		figure,
	]),
})
