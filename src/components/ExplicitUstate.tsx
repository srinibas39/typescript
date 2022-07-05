import { useState } from "react";

type Auth = {
  name: string;
  email: string;
};

export const ExplicitUstate = () => {
  const [isLoggedin, setIsLoggedin] = useState<Auth | null>(null);
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
      <button onClick={() => setIsLoggedin(null)}>logout</button>
      <p>{isLoggedin ? `name:${isLoggedin?.name} email:${isLoggedin?.email}` : "I am logged out"}</p>
    </>
  );
};
