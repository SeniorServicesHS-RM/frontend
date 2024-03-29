import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/Firebase";
import { UserContext } from "./UserContext";

//only Props are children nodes
type Props = {
  children?: React.ReactNode;
};

//handles Authentication across the Application - old Context Syntax
const AuthContext: React.FunctionComponent<Props> = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleUserId } = useContext(UserContext);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        handleUserId(user.uid);
      } else {
        console.log("no authorization for this site");
        navigate("/login");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  //If user exists, render the requested page
  if (loading) return <p>loading ...</p>;

  return <>{children}</>;
};

export default AuthContext;
