// useUserData.tsx
import { useState, useEffect } from "react";
import { UserData } from "./userData.interface";

const useUserData = (searchQuery: string = "") => {
  const [allUsersData, setAllUsersData] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let url = "https://pertizer-task.onrender.com/api/users";
        if (searchQuery) {
          url += `?name=${searchQuery}`; // Add other query parameters as needed
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setAllUsersData(data);
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    };

    fetchUserData();
  }, [searchQuery]);

  return allUsersData;
};

export default useUserData;
