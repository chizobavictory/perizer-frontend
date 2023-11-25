import React, { useState, useEffect } from "react";
import useUserData from "../hooks/userData";
import useSearchUserData from "../hooks/searchUserData";
import { UserData } from "../hooks/userData.interface";
import UserCard from "./UserCard";

interface GenderFilter {
  id: number;
  text: string;
  checked: boolean;
}

const User: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserData[] | null>(null);

  // Use the useUserData hook to get all users
  const userData = useUserData();

  // Use the useSearchUserData hook to search users based on criteria
  const searchedUserData = useSearchUserData({ name: searchQuery });

  useEffect(() => {
    if (searchedUserData !== null) {
      setFilteredUsers(searchedUserData);
    } else if (userData !== null) {
      setFilteredUsers(userData);
    }
  }, [searchedUserData, userData]);

  const totalUser = filteredUsers ? filteredUsers.length : 0;

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col pt-10">
      <div className="flex justify-between items-center">
        <div className="text-neutral-900 flex flex-col gap-1">
          <p className="font-[degularbold] text-2xl">{totalUser} Users</p>
          <p className="font-[degularmedium] text-gray-600">You can search for users by name, email, gender, role, or team</p>
        </div>
        <div className="flex gap-2">
          <input
            className="bg-gray-100 text-neutral-900 p-4 items-center flex gap-2 rounded-full font-[degularsemibold] h-12"
            placeholder="Search users"
            value={searchQuery}
            onChange={(e) => handleSearchQueryChange(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full border-t mt-4 border-gray-300" />
      <div className="flex flex-col gap-4 pt-6">
        {filteredUsers !== null ? filteredUsers.map((user, index) => <UserCard key={index} user={user} />) : "Loading..."}
      </div>
    </div>
  );
};

export default User;
