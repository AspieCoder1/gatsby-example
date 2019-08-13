module.exports = {
	siteMetadata: {
		title: 'Your site title goes here',
		author: 'The site author goes here',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.COTENTFUL_SPACE_ID,
				accessToken: process.env.COTENTFUL_API_KEY,
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
			},
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images-contentful',
						options: {
							maxWidth: 750,
						},
					},
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							classPrefix: 'language-',
						},
					},
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {},
					},
				],
			},
		},
	],
};
