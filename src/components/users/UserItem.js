import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className='card3 bg-green text-center'>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: '60px' }}
			/>
			<h2>{login}</h2>
			<div>
				<Link to={`/user/${login}`} className='btn btn-dark my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
