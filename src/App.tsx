import "./App.css";
import { AuthCon } from "./components/AuthCon";
import { Button } from "./components/Button";
import { ExplicitUstate } from "./components/ExplicitUstate";
import { Greet } from "./components/greet";
import { GreetList } from "./components/greetList";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { ReactNode } from "./components/ReactNode";
import { Status } from "./components/status";
import { Styles } from "./components/Styles";
import { UseCon } from "./components/UseCon";
import { UseRed } from "./components/useRed";
import { UseStateTypeAssertion } from "./components/UseStateTypeAssertion";
import { Ustate } from "./components/Ustate";

const App = () => {
  const nameList = [
    { first: "srinibas", last: "khuntia" },
    { first: "ankita", last: "rath" },
    { first: "ayush", last: "panda" },
  ];
  return (
    <div className="App">
      <Greet
        name={{ first: "srinibas", last: "khuntia" }}
        count={1}
        isLoggedin={true}
      />
      <GreetList nameList={nameList} />
      <Status status={"data"} />
      <Header>I am a header</Header>
      <ReactNode>
        <Header>I am a react component</Header>
      </ReactNode>
      <Button handleClick={(e, id) => console.log("clicked", id)} />
      <Input handleChange={(e, text) => console.log(text)} />
      <Styles styles={{ color: "white", backgroundColor: "black" }} />
      <Ustate />
      <ExplicitUstate />
      <UseStateTypeAssertion />
      <UseRed />
      <UseCon/>
      <AuthCon/>
    </div>
  );
};

export default App;
