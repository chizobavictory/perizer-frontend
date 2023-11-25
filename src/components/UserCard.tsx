import React from "react";
import male from "../assets/gender-male.svg";
import female from "../assets/gender-female.svg";
import { UserData } from "../hooks/userData.interface";
import classnames from "classnames";

interface UserCardProps {
  user: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div
          className={classnames(
            "w-12",
            "h-12",
            {
              "bg-green-100": user.gender === "male",
              "bg-red-100": user.gender === "female",
            },
            "rounded-full",
            "flex",
            "items-center",
            "justify-center"
          )}
        >
          <img src={user.gender === "male" ? male : female} alt={user.gender} />
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-neutral-900 text-base font-[degularmedium]">{`${user.name}`}</p>
          <p className="text-neutral-900 text-base font-[degularmedium]">{`${user.phone}`}</p>
          <p className="text-neutral-900 text-base font-[degularmedium]">{`Gender: ${user.gender}`}</p>
          <p className="text-neutral-900 text-base font-[degularmedium]">{`Email: ${user.email}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <p className="text-neutral-900 text-base font-[degularmedium]">{`Role: ${user.role}`}</p>
        <p className="text-neutral-900 text-base font-[degularmedium]">{`${user.teamName || "Unknown Team"}`}</p>
        <p className="text-neutral-900 text-base font-[degularmedium]">{`Location: ${user.location}`}</p>
        <p className="text-neutral-900 text-base font-[degularmedium]">{`Is Active: ${user.isActive}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
