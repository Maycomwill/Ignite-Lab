import React from "react";
import { loginWithGoogle } from "../services/loginWithGoogle";
import { SVGGoogle } from "./SVGGoogle";
import { Text } from "./Text";

function LoginWithGoogle() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Text>Login com:</Text>
      <button onClick={loginWithGoogle}>
        <SVGGoogle width={30} height={30} />
      </button>
    </div>
  );
}

export default LoginWithGoogle;
