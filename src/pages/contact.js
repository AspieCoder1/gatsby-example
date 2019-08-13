import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => (
	<Layout>
		<Head title="Contact" />
		<h1>Contact Me</h1>
		<p>
			The best way to contact me is by{' '}
			<a href="http://www.twitter.com">twitter</a>
		</p>
	</Layout>
);

export default ContactPage;
