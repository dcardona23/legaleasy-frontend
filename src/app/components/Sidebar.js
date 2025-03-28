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
import Button from 'react-bootstrap/Button'

function Sidebar() {

  const handleLogout = async (e) => {
    e.preventDefault()
    endSession()
  }

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
          <Link href="/" className="text-decoration-none" style={{ color: "inherit", fontSize: "2em" }}>LegalEasy</Link>
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
          <Button variant="link" className="text-decoration-none" style={{ color: "inherit", fontSize: "1em" }} onClick={handleLogout}>Logout</Button>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default Sidebar;
