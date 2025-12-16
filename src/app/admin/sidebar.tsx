"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import logo from "../../../public/img/logo.svg";
import "./admin.css";
import Cookies from 'js-cookie';
import Image from "next/image";
export default function Page() {
  const router = useRouter();
  const [userRole, setUserRole] = useState('');
  console.log(userRole, 'userRoleuserRole')
  useEffect(() => {
    const role = Cookies.get('userRole'); // Get the role from cookies
    setUserRole(role);
  }, [])

  const handleNavigate = (route) => {
    router.push(route);
  };

  const handleLogout = () => {
    Cookies.remove('userRole'); // Assuming 'userRole' is the cookie you want to clear
    router.push('/admin'); // Redirect to the admin login page or any other as needed
  };

  return (
    <>
      <div className="main__sidebar">
        <div className="admin__sidebar">
          <div className="logo_admin">
            <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo_zqvf04.webp" width="100" height="100" className="mr-3 h-6 sm:h-9" alt="logo" />
          </div>
          <a onClick={() => handleNavigate("/admin/adminBlog")} className="sidebar__nav">
            <i className="fa fa-list-alt me-2" aria-hidden="true"></i>   Blogs
          </a>
          <a onClick={() => handleNavigate("/admin/adminPages")} className="sidebar__nav">
            <i className="fa fa-list-alt me-2" aria-hidden="true"></i>   Pages
          </a>
          {userRole === 'superAdmin' && (
            <a onClick={() => handleNavigate("/admin/adminContact-us")} className="sidebar__nav">
              <i className="fa fa-phone me-2" aria-hidden="true"></i> Contact Us
            </a>
          )}
          {userRole === 'superAdmin' && (
            <a onClick={() => handleNavigate("/admin/adminQuotes")} className="sidebar__nav">
              <i className="fa fa-pencil-square-o me-2" aria-hidden="true"></i>  Quotes List
            </a>
          )}
          <a className="logout_admin" onClick={handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
        </div>
      </div>
    </>
  );
}
