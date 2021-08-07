import React, { useContext, useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';
const User = ({ match }) => {
	const githubContext = useContext(GithubContext);
	const { user, loading, getUser, repos, getUserRepos } = githubContext;

	useEffect(() => {
		getUser(match.params.login);
		getUserRepos(match.params.login);
		// eslint-disable-next-line
	}, []);
	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		company,
	} = user;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back to Search
			</Link>

			<div className='card-nb bg-green grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt=''
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Location : {location}</p>
				</div>
				<div>
					{bio && (
						<Fragment>
							{' '}
							<h3>Bio</h3>
							<h4>{bio}</h4>
						</Fragment>
					)}
					<a href={html_url} className='btn my-1'>
						Visit Github Profile
					</a>
					<ul>
						<li>
							{login && (
								<Fragment>
									<strong>Username: </strong>
									{login}
								</Fragment>
							)}
						</li>
						<li>
							{company && (
								<Fragment>
									<strong>Company: </strong>
									{company}
								</Fragment>
							)}
						</li>
						<li>
							{blog && (
								<Fragment>
									<strong>Website: </strong>

									<a href={blog} className='underline'>
										{blog}
									</a>
								</Fragment>
							)}
						</li>
					</ul>
				</div>
			</div>
			<div className='card-nb text-center grid-2'>
				<div className='badge badge-light'>Followers: {followers}</div>
				<div className='badge badge-light'>Following: {following}</div>
				<div className='badge badge-light'>Public Repos: {public_repos}</div>
				<div className='badge badge-light'>Public Gists: {public_gists}</div>
			</div>
			<div className='card-nb bg-green'>
				<Repos repos={repos} />
			</div>
		</Fragment>
	);
};

export default User;
