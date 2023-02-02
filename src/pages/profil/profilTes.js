import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { updateProfile } from "../../slices/regSlice";

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
  } from 'antd';
// prettier-ignore

const Profile = () => {
    const { name,
        countryId,
        provinceId,
        cityId,
        districtId,
        address } = useSelector(
        (store) => store.user
    );
    const navigate = useNavigate();

   
    /* 
        if user's city is not registered, set it to default value which
        is the first region
    */
 

    const dispatch = useDispatch();

    const initialValues = {
        name: name,
        countryId: countryId,
        provinceId: provinceId,
        cityId: cityId,
        districtId: districtId,
        address: address,
    };
    const validationSchema = () => {
        const validationObject = {
            name: Yup.string()
                .required("Tolong masukkan nama lengkap anda")
                .matches(/^[\A-Za-z\s]+$/, "Tolong hanya masukkan alphabet"),
            city: Yup.string().required(),
            street: Yup.string().required(
                "Tolong masukkan alamat lengkap anda"
            ),
            phoneNumber: Yup.string()
                .required("Tolong masukkan nomor handphone anda")
                .matches(/^[\0-9]+$/, "Tolong hanya masukkan angka")
                .min(11, "Nomor handphone minimal 11 angka")
                .max(13, "Nomor handphone maksimal 13 angka"),
            image: Yup.string().required("Tolong pilih Avatar"),
        };
        return Yup.object().shape(validationObject);
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            toast.loading("Memperbarui profil . . .");
            dispatch(updateProfile(values))
                .unwrap()
                .then(() => {
                    toast.dismiss();
                    toast.success("Berhasil memperbarui profil!");
                    navigate("/");
                });
        },
    });


    return (
        <>

            <section className="pt-5 md:pt-8">
                <div className="container-small relative">
                    <Link
                        to="/"
                        className="absolute md:-left-76px block w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
                    >
                        {/* prettier-ignore  */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <p className="text-center font-medium mb-10 md:hidden pt-1">
                        Lengkapi Info Akun
                    </p>
                    <form
                        onSubmit={formik.handleSubmit}
                        method="POST"
                        encType="multipart/form-data"
                    >
                       
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                                Nama <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nama"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.name}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                                country <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="countryId"
                                placeholder="countryId"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.countryId}
                            />
                            {formik.touched.countryId && formik.errors.countryId && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.countryId}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                            provinceId <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="provinceId"
                                placeholder="provinceId"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.provinceId}
                            />
                            {formik.touched.provinceId && formik.errors.provinceId && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.provinceId}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                            cityId <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="cityId"
                                placeholder="provinceId"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cityId}
                            />
                            {formik.touched.cityId && formik.errors.cityId && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.cityId}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                            districtId <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="districtId"
                                placeholder="provinceId"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.districtId}
                            />
                            {formik.touched.districtId && formik.errors.districtId && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.districtId}
                                </span>
                            )}
                        </fieldset>
                        <fieldset className="flex flex-col mt-4 space-y-1">
                            <label>
                            address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                            {formik.touched.address && formik.errors.address && (
                                <span className="text-sm text-red-500">
                                    {formik.errors.address}
                                </span>
                            )}
                        </fieldset>
                        
                        <button type='submit' className='bg-primary text-white rounded-lg text-lg w-full py-1' >Update</button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Profile;
