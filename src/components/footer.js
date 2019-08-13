import React from 'react';
import moment from 'moment';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`);
	return (
		<footer className={footerStyles.footer}>
			<p>
				Created by {data.site.siteMetadata.author}, &copy; {moment().year()}
			</p>
		</footer>
	);
};

export default Footer;
