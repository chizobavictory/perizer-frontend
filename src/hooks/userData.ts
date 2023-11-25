import { useState, useEffect } from "react";
import { UserData } from "./userData.interface";

const useUserData = () => {
  const [allUsersData, setAllUsersData] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchAllUsersData = async () => {
      try {
        const response = await fetch("https://pertizer-task.onrender.com/api/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllUsersData(data);
      } catch (error) {
        console.error("Error fetching all users data:", error);
      }
    };

    fetchAllUsersData();
  }, []);

  return allUsersData;
};

export default useUserData;
