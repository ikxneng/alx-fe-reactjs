import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string()
        .min(3, 'Username must be at least 3 Characters')
        .required('Username is required'),

        email: Yup.string()
        .email('Invalid Email address')
        .required('Email is required'),

        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form data submitted: ', values);
        },
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
            />

            {formik.touched.username && formik.errors.username? (
                <div className="error">{formik.errors.username}</div>
            ): null }

            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
            />

            {formik.touched.email && formik.errors.email? (
                <div className="error">{formik.errors.email}</div>
            ): null }

            </div>

            <div>
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} 
            />

            {formik.touched.password && formik.errors.password? (
                <div className="error">{formik.errors.password}</div>
            ): null }

            </div>

            <button type="submit">Register</button>

        </form>
    );
};

export default formikForm;