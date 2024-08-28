import React from 'react';
import { useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required')
            .min(3, 'Username must be at least 3 characters'),
            
        email: Yup.string().required('Email is required')
            .email('Invalid email address'),
           
        password: Yup.string().required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
            
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form data submitted:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <Field
                    type="text"
                    id="username"
                    name="username"
                />
                <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                />
                <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <Field
                    type="password"
                    id="password"
                    name="password"
                />
                <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default FormikForm;
