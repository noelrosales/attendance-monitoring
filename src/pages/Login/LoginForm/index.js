import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginFrom = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={SignInSchema}
            onSubmit={values => {
                console.log(values);
                props.history.push("/");
            }}
        >
            {({errors, touched}) => (
                <StyledForm>
                    <h3 className="mb-4">GenDC : Attendance Monitoring System</h3>
                    <Field name="email" type="email" className="form-control" placeholder="Email Address"/>
                    {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
                    <Field name="password" type="password" className="form-control" placeholder="Password"/>
                    {errors.password && touched.password ? <Error>{errors.password}</Error> : null}
                    <button type="submit" className="btn btn-primary">Login</button>
                </StyledForm>
            )}       
        </Formik>
    )
}

export default withRouter(LoginFrom);

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .required('Username is required.'),
    password: Yup.string()
        .min(6, 'Password should be 6 or more characters long.')
        .required('Password is reqiured.')
});

const StyledForm = styled(Form)`
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    min-width: 30%;


    input, button{
        margin-top: 10px
    }
`;

const Error = styled.div`
    color: red
`;