import React from "react";

import InviteAdmin from "../invite-admin";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-between p-24">
      Success! Logged in!
      <InviteAdmin />
    </main>
  );
}
