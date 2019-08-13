import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
	<Layout>
		<Head title="About" />
		<h1>About Me</h1>
		<p>
			I'm Luke from Manchester, to if want to get in touch you are always
			welcome to <Link to="/contact">contact me</Link>
		</p>
	</Layout>
);

export default AboutPage;
