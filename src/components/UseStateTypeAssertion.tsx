
import { useState } from "react";

type Auth = {
  name: string;
  email: string;
};

export const UseStateTypeAssertion = () => {
  const [isLoggedin, setIsLoggedin] = useState<Auth>({} as Auth);
  return (
    <>
      <button
        onClick={() =>
          setIsLoggedin({
            name: "srinibas",
            email: "srinibas@gmail.com",
          })
        }
      >
        login
      </button>
      <p>{isLoggedin ? `name:${isLoggedin?.name} email:${isLoggedin?.email}` : "I am logged out"}</p>
    </>
  );
};
