import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [size, setSize] = useState(window.innerWidth)

	const checkSize = () => {
		setSize(window.innerWidth)
	}
 
	useEffect(() => {
		window.addEventListener('resize', checkSize)
		// this is a clean up function which clears any side effect we produce while we rerender our app every time some change need to/ takes place !!
		return () => window.removeEventListener('resize',checkSize)

		// NOTE :: 	we could also pass an empty arr and render only initially the side effect but this would have further problems while doing conditional rendering where one modal when multiple times hides and shows up would basically add that side effect as that would be an initial render for it 
		// ::SO:: best practise is to add the clean up function for every side effect !! 
	},/*[]*/)
  return<>
  	<h1>Window</h1>
  	<h2>Size: {size} px</h2>;
  </> 
};

export default UseEffectCleanup;
