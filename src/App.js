import React from "react";
import logo from "./logo.svg";
import "./App.css";

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={false} />
    </div>
  );
}

export default App;
