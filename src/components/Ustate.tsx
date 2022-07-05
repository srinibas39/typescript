import { useState } from "react";

export const Ustate = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <button onClick={()=>setIsLoggedin(true)}>login</button>
      <button onClick={()=>setIsLoggedin(false)}>logout</button>
      <p>{isLoggedin ? "I am logged in" : "I am logged out"}</p>
    </>
  );
};
