import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { auth } from "../services/firebaseConfig";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Loading } from "./Loading";
import { Text } from "./Text";

export function Header() {
  const [user] = useAuthState(auth);
  const { userData } = useUser();
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };

  if (userData?.photoURL === auth.currentUser?.photoURL) {
    return (
      <div className="flex w-full items-center justify-between gap-4 p-4 border-b-2 border-green-500">
        <Heading>
          <div className=" hover:text-green-500 hover:translate-x-2 transition-all duration-100">
          <a
            href="/"
          >
            Caderneta Digital
          </a>
          </div>
        </Heading>
        <div className="flex w-[30%] gap-6 items-center justify-end">
          <div className="flex items-center justify-center gap-2">
            <Text size="md" >{userData?.name}</Text>
            {userData?.photoURL !== null ? (
              <div className="shadow-md shadow-black rounded-full">
                <img
                  className="rounded-full w-10 ring-2 ring-green-500"
                  src={userData?.photoURL}
                  alt="User Image from Google Account"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : null}
          </div>
          <div className="">
            <Button size="sm" onClick={logout}>
              Sair
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
