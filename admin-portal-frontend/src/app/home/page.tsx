import React from "react";

import AdminCards from "../components/admin-cards";
import InviteAdmin from "../components/invite-admin";

export default function Home() {
  return (
    <>
      <InviteAdmin />
      <AdminCards />
    </>
  );
}
