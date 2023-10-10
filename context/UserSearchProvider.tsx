"use client";
import React, { useState } from "react";
import UserSearchContext from "./userSearchContext";

interface UserSearchProviderProps {
	children: React.ReactNode;
}

const UserSearchProvider: React.FC<UserSearchProviderProps> = ({
	children,
}) => {
	const [searchInput, setSearchInput] = useState<string>("Hotels in Ghana");

	return (
		<UserSearchContext.Provider value={{ searchInput, setSearchInput }}>
			{children}
		</UserSearchContext.Provider>
	);
};

export default UserSearchProvider;
