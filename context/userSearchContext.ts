import { createContext, useContext } from "react";

export interface UserSearchContextType {
	searchInput: string;
	setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const UserSearchContext = createContext<UserSearchContextType | undefined>(
	undefined
);

export const useUserSearchContext = () => {
	const context = useContext(UserSearchContext);
	if (context === undefined) {
		throw new Error(
			"useUserSearchContext must be used within a UserSearchProvider"
		);
	}
	return context;
};

export default UserSearchContext;
