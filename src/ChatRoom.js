import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "./firebase";

function ChatRoom() {
  const { chatRoomId } = useParams();
  const [messages, set
