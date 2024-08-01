"use client"

import React from 'react';
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Chat from "./components/chat/index"

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex items-center justify-center h-screen">
          {user && <Chat signOut={signOut} user={user} />}
        </main>
      )}
    </Authenticator>
  );
}