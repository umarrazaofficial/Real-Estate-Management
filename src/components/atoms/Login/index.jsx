import React, { useState } from 'react';
import OnboardingTemplate from '../OnboardingTemplate';
import { FormContent } from './Login.styles';
import Button from '../../molecules/Button';
import Form, { useForm } from '../../molecules/Form';
import Field from '../Field';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import Layout from '../../Layout';

function Login() {
  const [form] = useForm();

  const { onLogin, loading_user } = useContextHook(AuthContext, v => ({
    onLogin: v.onLogin,
    loading_user: v.loading_user,
  }));

  const handleSubmit = e => {
    const payload = {
      email: e?.email,
      password: e?.password,
      type: 'admin',
    };
    onLogin(payload);
  };

  return (
    <Layout showTemplate={false}>
      <OnboardingTemplate>
        <FormContent>
          <div className="heading-text">
            <h1>Let&apos;s Sign you In</h1>
            <p>Please fill the details below to start with your existing account.</p>
          </div>
          <Form form={form} onSubmit={handleSubmit}>
            <Form.Item
              label="Email Address"
              type="email"
              rounded
              name="email"
              lg
              placeholder="Enter your email address"
              rules={[
                {
                  required: true,
                  message: 'Email is Required',
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
              rules={[
                {
                  required: true,
                  message: 'Password is Required',
                },
              ]}>
              <Field />
            </Form.Item>

            <div className="btn-holder">
              <Button loader={loading_user} variant="white" width="256px">
                Sign In!
              </Button>
            </div>
          </Form>
        </FormContent>
      </OnboardingTemplate>
    </Layout>
  );
}

export default Login;
