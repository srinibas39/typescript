import "./App.css";
import { Greet } from "./components/greet";
import { GreetList } from "./components/greetList";
import { Header } from "./components/header";
import { ReactNode } from "./components/ReactNode";
import { Status } from "./components/status";

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
      <Status status={"data"}/>
      <Header>I am a header</Header>
      <ReactNode>
        <Header>I am a react component</Header>
      </ReactNode>
    </div>
  );
};

export default App;
