import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatRoomCreationForm from "./ChatRoomCreationForm";
import ChatRoomList from "./ChatRoomList";
import ChatRoom from "./ChatRoom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ChatRoomCreationForm />
          <ChatRoomList />
        </Route>
        <Route path="/chat-room/:chatRoomId">
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
