import React from "react";
import Head from "next/head";
//local components
import { CommonCard } from "components/card";
import { AdminNavbar, Header } from "components/elements";
import AdminCalendar from "components/elements/AdminCalendar";

const Tasks = () => {
  return (
    <>
      <Head>
        <title>Admin Tasks</title>
      </Head>
      <div className="sticky-top">
        <Header />
        <AdminNavbar />
      </div>
      <div className="container-fluid py-3 px-5 bg-light">
        <CommonCard>
          <AdminCalendar />
        </CommonCard>
      </div>
    </>
  );
};

export default Tasks;
