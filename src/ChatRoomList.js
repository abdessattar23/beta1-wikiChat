import React, { useEffect, useState } from "react";
import { database } from "./firebase";

function ChatRoomList() {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const chatRoomsRef = database.ref("chat-rooms");
    chatRoomsRef.on("value", (snapshot) => {
      const chatRooms = [];

      snapshot.forEach((childSnapshot) => {
        const chatRoom = {
          id: childSnapshot.key,
          name: childSnapshot.child("name").val(),
        };

        chatRooms.push(chatRoom);
      });

      setChatRooms(chatRooms);
    });

    return () => {
      chatRoomsRef.off();
    };
  }, []);

  return (
    <ul>
      {chatRooms.map((chatRoom) => (
        <li key={chatRoom.id}>{chatRoom.name}</li>
      ))}
    </ul>
  );
}

export default ChatRoomList;
