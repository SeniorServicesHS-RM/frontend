import React, { ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import { firestore } from "./Firebase";
import User from "../data/User";

interface UserContextInterface {
  userId: string;
  handleUserId: (id: string) => void;
  role: number;
  user: User;
}
interface UserInterface {
  role: number;
  id: string;
  plannerId?: string;
  marts?: string[];
  employeeId?: string;
  seniorId?: string;
  firstName?: string;
  lastName?: string;
}

interface Props {
  children?: ReactNode | ReactNode[];
}

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

export const UserProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string | null>(null);
  //roles: 0  -> not logged in
  //1 -> planner
  //2 -> employee
  //3 -> senior
  const [role, setRole] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);

  const handleUserId = (id: string) => {
    setUserId(id);
  };

  useEffect(() => {
    if (userId === null) {
      return;
    }
    const unsub = onSnapshot(collection(firestore, "users"), (snapshot) => {
      const receivedUsers: UserInterface[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as UserInterface[];
      setRole(
        receivedUsers.find((user) => {
          return user.id.trim() === userId.trim();
        }).role
      );
      setUser(
        new User(
          receivedUsers.find((user) => {
            return user.id.trim() === userId.trim();
          }).firstName,
          receivedUsers.find((user) => {
            return user.id.trim() === userId.trim();
          }).lastName
        )
      );
    });
    console.log("setRoleEntered");
    return unsub;
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, handleUserId, role, user }}>
      {children}
    </UserContext.Provider>
  );
};
