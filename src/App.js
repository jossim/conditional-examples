import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

const Mailbox = (props) => {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}

const messages = ['Hello', 'How are you?', 'Please resond', 'you good?'];

function App() {
  return (
    <div className="App">
      <Mailbox unreadMessages={messages} />
    </div>
  );
}

export default App;
