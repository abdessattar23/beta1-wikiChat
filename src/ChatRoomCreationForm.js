import React, { useState } from "react";
import { database } from "./firebase";

function ChatRoomCreationForm() {
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (roomName.trim() !== "") {
      const newRoom = database.ref("chat-rooms").push();
      newRoom.set({ name: roomName });
      setRoomName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a room name"
        value={roomName}
        onChange={(event) => setRoomName(event.target.value)}
      />
      <button type="submit">Create Room</button>
    </form>
  );
}

export default ChatRoomCreationForm;
