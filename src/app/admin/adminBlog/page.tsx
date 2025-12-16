"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminBlog from "./adminBlog";
import Sidebar from "../sidebar";
import "../admin.css";
import Cookies from 'js-cookie';

export default function AdminBlogs() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
    const userRole = Cookies.get('userRole');
    // Redirect if not logged in or not the correct user role
    if (!userRole || userRole === '') {
      router.push('/admin'); // Adjust login route as necessary
    }
  }
  }, [router]);

  return (
    <>
    <div className="sidebar__with__data">
      <div className="side__bar">
        <Sidebar />
      </div>
      <div className="main__page__content mt-5">
        <AdminBlog />
      </div>
    </div>

    </>
  );
}
