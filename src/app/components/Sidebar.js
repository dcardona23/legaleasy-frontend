"use client";
import { endSession } from "@/legalEasyApiCalls";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Sidebar() {
  const [logoutError, setLogoutError] = useState(null);
  const router = useRouter();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await endSession();
      console.log("the response is:", response);
      if (response.success) {
        router.push("/");
      }
    } catch (error) {
      setLogoutError("An error occurred while trying to logout.");
    }
  };

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="teal"
        style={{ width: "20%", fontSize: "1.5em" }}
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit", fontSize: "2em" }}
          >
            LegalEasy
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="columns">
              <Link href="/dashboard">Dashboard</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="user">
              <Link href="/profile">Profile page</Link>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line">
              <Link href="/analytics">Analytics</Link>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <Button
            variant="link"
            className="text-decoration-none"
            style={{ color: "inherit", fontSize: "1em" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
