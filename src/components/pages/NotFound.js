import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='my-2'>
			<h1>Not found</h1>
			<h2 className='my-3'>The page you are looking for does not exist.</h2>
			<h3>
				Head back to -{' '}
				<Link to='/' className='underline'>
					<i class='fas fa-home' /> Home
				</Link>
			</h3>
		</div>
	);
};
export default NotFound;
