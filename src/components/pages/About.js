import React, { Fragment } from 'react';

export const About = () => {
	return (
		<Fragment>
			<h1>About This App</h1>
			<p>
				React app to search Github profiles. This app uses the Context API along
				with the useContext and useReducer hooks for state management.
			</p>
			<p>Version 1.0.0</p>
		</Fragment>
	);
};

export default About;
