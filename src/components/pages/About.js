import React, { Fragment } from 'react';

export const About = () => {
	return (
		<Fragment>
			<h1>About This App</h1>
			<h3 className='my-3'>
				React app to search Github profiles. This app uses the Context API along
				with the useContext and useReducer hooks for state management.
			</h3>
			<h3>
				Source Code hosted on -{' '}
				<a href='https://github.com/nishant1952' className='underline'>
					{' '}
					<i className='fab fa-github'> Github </i>
				</a>
			</h3>
		</Fragment>
	);
};

export default About;
