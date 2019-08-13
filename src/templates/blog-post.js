import React from 'react';
import { graphql } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			slug
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

const Post = ({ data }) => {
	return (
		<Layout>
			<Head title={data.contentfulBlogPost.title} />
			<h1>{data.contentfulBlogPost.title}</h1>
			<p>{data.contentfulBlogPost.publishedDate}</p>
			<div
				dangerouslySetInnerHTML={{
					__html: data.contentfulBlogPost.body.childMarkdownRemark.html,
				}}
			></div>
		</Layout>
	);
};

export default Post;
