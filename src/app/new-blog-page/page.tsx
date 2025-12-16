import React from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Newblogbanner from "./Newblogbanner";
import "./Newblog.css";
import Bloglanding from "./Bloglanding";
export default function page() {
  return (
    <div>
      <Header />
      <Newblogbanner />
      <Bloglanding />
      <Footer />
    </div>
  );
}
