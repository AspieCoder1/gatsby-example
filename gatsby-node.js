const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const postTemplate = path.resolve('./src/templates/blog-post.js');
	const res = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	res.data.allContentfulBlogPost.edges.forEach(edge => {
		createPage({
			path: `/post/${edge.node.slug}`,
			component: postTemplate,
			context: {
				slug: edge.node.slug,
			},
		});
	});
};
