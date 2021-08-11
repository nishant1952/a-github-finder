import React, { Fragment } from 'react';

export const About = () => {
	return (
		<Fragment>
			<div className='my-2'>
				<h1>About This App</h1>
				<h2 className='my-3'>
					React app to search Github profiles. This app uses the Context API
					along with the useContext and useReducer hooks for state management.
				</h2>
				<h3>
					Source Code hosted on -{' '}
					<a href='https://github.com/nishant1952' className='underline'>
						{' '}
						<i className='fab fa-github' /> Github
					</a>
				</h3>
			</div>
		</Fragment>
	);
};

export default About;
