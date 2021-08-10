import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className='card-nb bg-dark-grey'>
			<h3>
				<a href={repo.html_url} target='_blank' rel='noreferrer noopener'>
					{repo.name}
				</a>
			</h3>
		</div>
	);
};
RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};
export default RepoItem;
