import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './index.scss'
const LoginForm = ({ onSubmit }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .max(30, 'maximum characters 30')
                .min(5, 'minimum characters 5')
                .required('field cannot be empty'),
            password: Yup.string()
                .max(30, 'maximum characters 30')
                .min(5, 'minimum characters 5')
                .required('field cannot be empty'),
        }),
        onSubmit: values => {
            return onSubmit(values)
        },

    });

    return (
        <form className='L-login-form' onSubmit={formik.handleSubmit}>

            <div className='L-login-form-input'>
                <label htmlFor="username">username</label>
                <input
                    className={formik.touched.email &&  formik.errors.email ? 'L-login-form-input-error-email' : null}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ?
                    <div className='L-login-form-error'>{formik.errors.email}</div> : null}
            </div>
            <div className='L-login-form-input'>
                <label htmlFor="password">password</label>
                <input
                    className={formik.touched.password && formik.errors.password ? 'L-login-form-input-error-password' : null}
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ?
                    <div className='L-login-form-error'>{formik.errors.password}</div> : null}
            </div>
            <div className='L-login-form-check G-flex G-align-center'>
                <input type="checkbox" />
                <span>Remember Me</span>
            </div>
            <div className='L-login-form-btn'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}
export default LoginForm