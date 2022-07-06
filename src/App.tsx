import "./App.css";
import { Private } from "./Component Prop/Private";
import { Profile } from "./Component Prop/profile";
import { AuthCon } from "./components/AuthCon";
import { Button } from "./components/Button";
import { DomRef } from "./components/DomRef";
import { ExplicitUstate } from "./components/ExplicitUstate";
import { Greet } from "./components/greet";
import { GreetList } from "./components/greetList";
import { Header } from "./components/header";
import { Input } from "./components/Input";
import { MutableRef } from "./components/MutableRef";
import { ReactNode } from "./components/ReactNode";
import { Status } from "./components/status";
import { Styles } from "./components/Styles";
import { UseCon } from "./components/UseCon";
import { UseRed } from "./components/useRed";
import { UseStateTypeAssertion } from "./components/UseStateTypeAssertion";
import { Ustate } from "./components/Ustate";
import { List } from "./Genrics/List";
import { RestrictingProps } from "./RestrictingProps/RestrictingProps";

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
      <UseCon />
      <AuthCon />
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={["ram", "sham", "dham"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 0, first: "srinibas", last: "khuntia" },
          { id: 1, first: "rahul", last: "mishra" },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RestrictingProps value={-10} isNegative/>
    </div>
  );
};

export default App;
