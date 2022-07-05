import { useAuth } from "../Context/AuthContext";

export const AuthCon = () => {
  const { user, setUser } = useAuth();
  return (
    <div>
      <button
        onClick={() =>
          setUser({
            name: "srinibas",
            email: "srinibas39@gmail.com",
          })
        }
      >
        login
      </button>
      <button onClick={() => setUser(null)}>logout</button>
      <div>My name is {user?.name}</div>
      <div>My email is {user?.email}</div>
    </div>
  );
};
