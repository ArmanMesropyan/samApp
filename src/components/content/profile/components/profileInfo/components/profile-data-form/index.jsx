import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
const ProfileDataForm = (props) => {
  const {onSubmit} = props
  const formik = useFormik({
    initialValues: {
      aboutMe: '',
      fullName: '',
      lookingForAJobDescription: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, 'maximum characters 15')
        .min(5, 'minimum characters 5')
        .required('field cannot be empty'),
    }),
    onSubmit: values => {
      
      return onSubmit(values)
    },

  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <button type='submit'>Save</button>
      <div className='L-profile-about-me'>
        About Me:
        <input
          type="text"
          id="aboutMe"
          name="aboutMe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.aboutMe}
          placeholder='fill'
          />
      </div>
      <div className='L-profile-about-me'>
        Full Name::
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
          className={formik.touched.email && formik.errors.email ? 'L-login-form-input-error-email' : null}
          placeholder='fullName' />
      </div>

      <div className='L-profile-about-me'>
        Job Description::
        <input
          type="text"
          id="lookingForAJobDescription"
          name="lookingForAJobDescription"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lookingForAJobDescription}
          placeholder='lookingForAJobDescription' />
      </div>
    </form>
  )
}

export default ProfileDataForm
