import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { SVGHome } from "../components/SVGHome";
import { LogIn } from "./LogIn";
import { Home } from "./Home";
import MainFooter from "../components/MainFooter";

export function Welcome() {
  const navigate = useNavigate();
  const { user } = useUser();

  if (user) {
    return (
      <div className="flex h-full w-full justify-start items-center flex-col gap-2 bg-gray-900">
        <Home />
      </div>
    );
  } else {
    return (
      <div className="pt-16">
        <div className="flex w-full h-full items-center justify-between bg-gray-900">
          <div className="w-[50%] flex items-center justify-center">
            <SVGHome width={450} height={450} />
          </div>
          <div
            id="right-side"
            className="w-[50%] flex flex-col items-center justify-center px-4 py-4"
          >
            <LogIn />
          </div>
        </div>
        <div className="p-4 w-full">
          <MainFooter />
        </div>
      </div>
    );
  }
}
