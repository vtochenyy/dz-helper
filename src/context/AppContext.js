import React, { createContext, useState } from 'react';

export const AppContext = createContext({ setSubject: () => null });

const AppContextProvider = (props) => {
	const [subject, setSubject] = useState('Математика');
	return (
		<AppContext.Provider value={{ subject, setSubject }}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
