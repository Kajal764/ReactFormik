import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

function YoutubeForm() {

    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        addres: ''
    }

    const onSubmit = values => {
        console.log(values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        channel: Yup.string().required('Required')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>

            <Form>

                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field type='text' id='email' name='email' />
                    <ErrorMessage name='email'>
                        {errormsg => <div className='error'>{errormsg}</div>}
                    </ErrorMessage>
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' placeholder='youtube channel' />
                    <ErrorMessage name='channel' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {props => {
                            const { field, meta } = props
                            return (
                                <div>
                                    <input type='text' id='address' {...field} />
                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                </div>
                            )
                        }
                        }
                    </Field>
                </div>

                <button type="submit">Submit</button>

            </Form>
        </Formik>
    )
}
export default YoutubeForm

//To Simplied our code more
// Replace useFormik with Formik Component
// Replace html form tag with Form and remove onSubmit Form internally handle onSubmit
// Replace input html tag with Field and get rid of getFieldProps which internally provided by Field
 // it also handle event like onChange,values,onBlur