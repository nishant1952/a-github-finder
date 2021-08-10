import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};

	const onChange = (e) => setText(e.target.value);

	return (
		<div className='search'>
			<form id='form' onSubmit={onSubmit} className='form '>
				<div class='form__group field'>
					<input
						type='input'
						class='form__field'
						placeholder='Search github users'
						name='name'
						id='name'
						autocomplete='off'
						value={text}
						onChange={onChange}
					/>
					<label for='name' class='form__label'>
						Search github users
					</label>
				</div>

				<button type='submit' id='search' className='btn-clrs'>
					<i class='fas fa-search'></i>
				</button>
			</form>
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
