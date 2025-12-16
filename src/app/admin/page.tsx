"use client";

import React from "react";
import { useRouter } from "next/navigation";
import logo from "../../../public/img/logo.png";
import "./admin.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie';
import Image from "next/image";


type FormValues = {
  role: string;
  email: string;
  password: string;
};

export default function Page() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await axios.post('https://adminbackend.base2brand.com/api/auth/login', data);
      console.log(response.data);
      Cookies.set('userRole', response.data.role, { expires: 7 }); // Expires in 7 days

      router.push('/admin/adminBlog');
      // Handle navigation or storage of login data here based on role
    } catch (error) {
      console.error(error);
      alert('Invalid credentials')

    }
  };



  return (
    <>
      <div className="login__form">
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-9">
              <div className="AppForm shadow-lg">
                <div className="row">

                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="AppFormLeft">
                      <h1>Login</h1>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group position-relative mb-3">
                          <select {...register("role", { required: true })} className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none">
                            <option value="" selected disabled>Select role</option>
                            <option value="admin">Admin</option>
                            <option value="superAdmin">Super Admin</option>
                          </select>
                          {errors.role && <p>Role is required.</p>}
                          <i className="fa fa-user-o"></i>
                        </div>
                        <div className="form-group position-relative mb-3">
                          <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Entered value does not match email format" } })} className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="Email" />
                          {errors.email && <p>{errors.email.message}</p>}
                          <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="form-group position-relative mb-3">
                          <input type="password" {...register("password", { required: "Password is required" })} className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none" placeholder="Password" />
                          {errors.password && <p>Password is required.</p>}
                          <i className="fa fa-key"></i>
                        </div>
                        <button type="submit" className="btn btn-success btn-block shadow border-0 py-2 text-uppercase w-100">Login</button>
                      </form>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="AppFormRight position-relative d-flex justify-content-center flex-column align-items-center text-center p-5 text-white">
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo_zqvf04.webp" width="100" height="100" className="login__logo" alt="logo" />

                      <h2 className="position-relative px-4 pb-3 mb-4">Welcome </h2>
                      <p>Lorem ipsuing elit. Molomos totam est voluptatum i omos totam est voluptatum i ure sit consectetur ill</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
