import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from '../../molecules/Form';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import Button from '../../molecules/Button';
// import Select from '../../molecules/Select';
import adminService from '../../../services/adminService';
// import { useContextHook } from 'use-context-hook';
// import { AuthContext } from '../../../Context/authContext';
import Toast from '../../molecules/Toast';
import { AddAdminModalWrapper } from '../AddAdminModal/AddAdminModal.style';

const AddMerchantModal = ({ onSubmit, isEdit, onlyPassword, data, btnText, setData }) => {
  const [form] = useForm();
  // const { refetch } = useContextHook(AuthContext, ['refetch']);
  const [state, setState] = useState({});
  // const { roles_data } = adminService.GetRoles({ getAll: true });
  // const roles = useMemo(() => roles_data.roles.map(({ _id, type }) => ({ value: _id, label: type })), [roles_data]);
  // const roles = useMemo(() => roles_data.roles.filter(elem => elem.type === 'BUSINESS_OWNER'), [roles_data]);
  // console.log(roles[0]?._id);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (data && !onlyPassword) {
  //     form.setFieldsValue({
  //       email: data?.email,
  //       roles: roles?.filter(({ value }) => data?.roles?.find(({ _id }) => _id === value)),
  //     });
  //     setState({
  //       email: data?.email,
  //       roles: roles?.filter(({ value }) => data?.roles?.find(({ _id }) => _id === value)),
  //     });
  //   }
  // }, [roles_data, data, onlyPassword, roles]);
  const handleSubmit = async e => {
    try {
      setLoading(true);
      if (data && !onlyPassword) {
        // edit password
        await adminService.updateAdmin(data._id, {
          email: e.email,
          roles: e.roles.map(({ value }) => value),
        });
        Toast({
          type: 'success',
          message: 'Admin updated successfully',
        });
        setData({});
      } else if (data && onlyPassword) {
        await adminService.updateAdmin(data._id, {
          password: e.password,
        });
        Toast({
          type: 'success',
          message: 'Password updated successfully',
        });
        setData({});
      } else {
        await adminService.addBusinessUser({
          email: e?.email,
          first_name: e?.first_name,
          last_name: e?.last_name,
          phone_number: e?.phone_number,
          password: e?.password,
          // permissions: state.permissions,
          // roles: [roles[0]?._id],
        });
        Toast({
          type: 'success',
          message: 'Merchant Added successfully',
        });
      }
      // refetch();
      onSubmit();
      setLoading(false);
    } catch (error) {
      Toast({
        type: 'error',
        message: error.message,
      });
    }
  };
  return (
    <>
      <AddAdminModalWrapper>
        <Form form={form} onSubmit={onSubmit} onTouched={_ => setState(__ => ({ ...__, ..._ }))}>
          <div className="input-wrap">
            {!onlyPassword && (
              <>
                <Form.Item
                  type="text"
                  name="first_name"
                  inputSm
                  rounded
                  placeholder="Merchant First name"
                  label="Merchant First Name"
                  rules={[
                    { required: true },
                    {
                      pattern: /^[a-zA-Z\s]+$/,
                      message: 'First name should be Alphabets.',
                    },
                    {
                      pattern: /^[a-zA-Z\s]{3,}$/,
                      message: 'Owner first name must be minimum of 3 characters.',
                    },
                    {
                      pattern: /^[a-zA-Z\s]{3,40}$/,
                      message: 'Owner first name should be maximum of 40 characters.',
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>
                <Form.Item
                  type="text"
                  name="last_name"
                  inputSm
                  rounded
                  placeholder="Enter Last name"
                  label="Merchant Last Name"
                  rules={[
                    { required: true },
                    {
                      pattern: /^[a-zA-Z\s]+$/,
                      message: 'Last name should be Alphabets.',
                    },
                    {
                      pattern: /^[a-zA-Z\s]{3,}$/,
                      message: 'Merchant last name must be minimum of 3 characters.',
                    },
                    {
                      pattern: /^[a-zA-Z\s]{3,40}$/,
                      message: 'Merchant last name should be maximum of 40 characters.',
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>
                <Form.Item
                  disabled={isEdit}
                  type="email"
                  name="email"
                  inputSm
                  rounded
                  placeholder="Enter Email Address"
                  label="Email"
                  rules={[
                    { required: true },
                    { email: true, message: 'Please enter a valid email' },
                    { max: 40, message: 'Email should be at max 40 characters!' },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>

                <Form.Item
                  type="text"
                  name="phone_number"
                  inputSm
                  rounded
                  placeholder="Enter Phone Number"
                  label="Merchant Phone no."
                  rules={[
                    { required: true },
                    {
                      pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                      message: 'Enter Complete Merchant Phone Number',
                    },
                    {
                      changeRegex: 'phone_number',
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>
              </>
            )}
            {(onlyPassword || !data) && (
              <>
                <Form.Item
                  type="password"
                  name="password"
                  inputSm
                  rounded
                  placeholder="Enter Password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                    },
                    { password: true },
                    {
                      pattern: /^.{8,64}$/,
                      message: 'Minimum Character Length is 8 and Maximum Character Length is 64',
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>

                <Form.Item
                  type="password"
                  name="confirmPassword"
                  inputSm
                  rounded
                  placeholder="Re-Enter Password"
                  label="Confirm Password"
                  rules={[
                    {
                      required: true,
                    },
                    {
                      password: true,
                    },
                    {
                      transform: value => value !== form.getFieldValue('password'),
                      message: 'The two passwords that you entered do not match!',
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>
              </>
            )}
            {/* {!onlyPassword && (
              <Form.Item
                type="text"
                name="roles"
                inputSm
                rounded
                options={roles}
                placeholder="Add Role"
                label="Role"
                isMulti
                menuPosition={'fixed'}
                rules={[
                  { required: true, message: 'Select atleast one role' },
                  {
                    transform: value => !value?.length,
                    message: 'Select at least one role',
                  },
                ]}>
                <Select />
              </Form.Item>
            )} */}
          </div>

          <div>
            <Button sm width="211px" loader={loading}>
              {btnText}
            </Button>
          </div>
        </Form>
      </AddAdminModalWrapper>
    </>
  );
};

export default AddMerchantModal;
