// Import necessary dependencies
import { useState, useEffect } from "react";
import { UserData } from "./userData.interface";

// Define the search criteria interface
interface SearchCriteria {
  name?: string;
  email?: string;
  gender?: string;
  role?: string;
  team?: number;
}

// Define the useSearchUserData hook
const useSearchUserData = (searchCriteria: SearchCriteria) => {
  const [searchedUserData, setSearchedUserData] = useState<UserData[] | null>(null);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        // Convert search criteria object to URL parameters
        const params = new URLSearchParams();
        Object.entries(searchCriteria).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            params.append(key, value.toString());
          }
        });

        // Fetch data using the search endpoint
        const response = await fetch(`https://pertizer-task.onrender.com/api/users/search?${params}`);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        setSearchedUserData(data);
      } catch (error) {
        console.error("Error fetching searched user data:", error);
      }
    };

    fetchSearchData();
  }, [searchCriteria]);

  return searchedUserData;
};

export default useSearchUserData;
