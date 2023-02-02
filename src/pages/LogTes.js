import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from '../slices/regSlice';


const Signing = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        name:"",
        email: "",
        password: "",
        address:""
    };
    const validationSchema = () => {
        const validationObject = {
            email: Yup.string()
                .email("Email tidak valid")
                .required("Tolong masukkan email"),
            password: Yup.string().required("Tolong masukkan password"),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            toast.loading("Signing in . . .");
            dispatch(login(values))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Login berhasil!");
                    navigate("/");
                });
        },
    });
 
  return (
    <Fragment>
      <div className=' bg-sky-100 h-screen flex justify-center items-center'>
        <div className='bg-white rounded-2xl p-4 shadow-lg container mx-auto max-w-sm'>
            <div className='bg-sky-900 text-white rounded-2xl -mt-10 shadow-lg px-5 py-4'>
              <h1 className='text-2xl font-semibold'>Register</h1>
            </div>
            <form onSubmit={formik.handleSubmit} method="POST" className='px-10 py-4'>
              <div className="username mb-3">
                <h3>Email</h3>
                <input 
                placeholder='Please input email' 
                className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' 
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email && (
                            <span className="text-sm text-red-500">
                                {formik.errors.email}
                            </span>
                        )}
              </div>
              
              <div className="password mb-5">
                <h3>Password</h3>
                <input type='password' className='w-full mr-2 px-3 py-1 focus:outline-none border border-primary rounded-lg' 
                placeholder='Please input password' id='password' name='password' 
                isPasswordInput={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                            <span className="text-sm text-red-500">
                                {formik.errors.password}
                            </span>
                        )}
              </div>
              <button type='submit' className='bg-primary text-white rounded-lg text-lg w-full py-1' >Masuk</button>
            </form>
        </div>
    </div>
    </Fragment>
  );
};
export default Signing;