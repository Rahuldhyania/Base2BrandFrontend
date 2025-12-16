import React from 'react'
import { notFound } from "next/navigation";
export default function Notfound() {
  console.log("hello from not found");
  
  return notFound()
}
