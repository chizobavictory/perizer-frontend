export interface Team {
  id: number;
  name: string;
  description: string;
}

export interface UserData {
  _id: string;
  isActive: boolean;
  picture: string;
  team: Team;
  role: string;
  name: string;
  gender: string;
  email: string;
  phone: string;
  location: string;
}
