import React from 'react';
import { FormContent, MainWrapperForm } from './Login.styles';
import Button from '../../molecules/Button';
import Form, { useForm } from '../../molecules/Form';
import Field from '../Field';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import Layout from '../../Layout';
import Select from '../../molecules/Select';
import Logo from '../../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';
export const typeOptions = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'merchant',
    label: 'Merchant',
  },
];

function Login() {
  const [form] = useForm();

  const { onLogin, user_loading } = useContextHook(AuthContext, v => ({
    onLogin: v.onLogin,
    // user_loading: v.user_loading,
  }));
  // const navigate = useNavigate();

  const handleSubmit = e => {
    onLogin({ ...e, type: 'admin' });
  };
  return (
    <Layout showTemplate={false}>
      <MainWrapperForm>
        <div className="logo-wrapper">
          <img src={Logo} alt="insifr-logo" />
        </div>
        <div className="text-wrapper">
          <p>Please fill the details below to start with your INSIFR account</p>
        </div>
        <FormContent>
          <Form form={form} onSubmit={handleSubmit}>
            {/* <Form.Item
              label="Account type"
              type="select"
              rounded
              name="type"
              lg
              placeholder="Type"
              options={typeOptions}
              $bgWhite
              rules={[
                {
                  required: true,
                  // message: 'Type is Required',
                },
              ]}>
              <Field />
            </Form.Item> */}
            <Form.Item
              label="Email address"
              type="email"
              rounded
              name="email"
              lg
              placeholder="Enter your email address"
              $bgWhite
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field />
            </Form.Item>
            <Form.Item
              label="Password"
              type="password"
              rounded
              name="password"
              lg
              placeholder="Password"
              $bgWhite
              rules={[
                {
                  required: true,
                  // message: 'Password is Required',
                },
              ]}>
              <Field />
            </Form.Item>

            <div className="btn-holder">
              {/* <Button loader={user_loading} variant="white" width="256px">
                Sign In!
              </Button> */}
              <Button variant="white">Sign in</Button>
            </div>
          </Form>
        </FormContent>
      </MainWrapperForm>
    </Layout>
  );
}

export default Login;
