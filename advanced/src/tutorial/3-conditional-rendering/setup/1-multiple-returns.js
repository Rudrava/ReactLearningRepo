import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const [users, setUsers] = useState('default')	

	useEffect(() => {
		console.log('here');
		fetch(url)
			.then(res => {
				if(res.status >= 200 && res.status <= 299)	return res.json()
				throw new Error(res.statusText)
				
			})
				.then(user => {
					const { login } = user;
					setUsers(login)
					setIsLoading(false)
				})
			.catch((error) => {
				setIsLoading(false)
				setIsError(true)
				console.log(error)
			});
	},[])

	if (isLoading) {
		return <div><h2>Loading . . .</h2></div>
	}
	if (isError) {
		return <div><h2>Err . . .</h2></div>
	}
	return <h2>{users}</h2>;

};

export default MultipleReturns;
