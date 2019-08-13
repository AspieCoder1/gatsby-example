import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Head from '../components/head';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
						body {
							childMarkdownRemark {
								excerpt
							}
						}
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<Head title="Blog" />
			<h1>Blog</h1>
			<ol className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map(({ node: post }) => (
					<li className={blogStyles.post} key={post.id}>
						<Link to={`/post/${post.slug}`}>
							<h2>{post.title}</h2>
							<p>{post.body.childMarkdownRemark.excerpt}</p>
							<p>{post.publishedDate}</p>
						</Link>
					</li>
				))}
			</ol>
		</Layout>
	);
};

export default Blog;
