import React, { useEffect, useState } from 'react';
import { useForm } from '../../molecules/Form';
import { AddBusinessModalWrapper } from './AddBusinessModal.style';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import Button from '../../molecules/Button';
import Toast from '../../molecules/Toast';
import businessService from '../../../services/businessService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import { CountriesList } from '../../Countries';

const AddBusinessModal = ({ handleSubmit, businessData }) => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);

  const { refetch } = useContextHook(AuthContext, v => ({
    refetch: v.refetch,
  }));
  const onSubmit = async e => {
    setLoading(true);
    const payload = {
      name: e?.businessName.trim(),
      location: e?.location.trim(),
      area: e?.area.trim(),
    };

    if (businessData) {
      try {
        await businessService.editBusiness(businessData?._id, payload);
        Toast({
          type: 'success',
          message: 'Property updated successfully',
        });
        handleSubmit();
      } catch (error) {
        Toast({
          type: 'error',
          message: error?.message ?? 'Something Went Wrong',
        });
      } finally {
        refetch();
        setLoading(false);
      }
    } else {
      try {
        await businessService.createBusiness(payload);
        Toast({
          type: 'success',
          message: 'Property created successfully',
        });
        handleSubmit();
      } catch (error) {
        Toast({
          type: 'error',
          message: error?.message ?? 'Something Went Wrong',
        });
      } finally {
        refetch();
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (businessData) {
      form.setFieldsValue({
        businessName: businessData?.name,
        location: businessData?.location,
        area: businessData?.area,
      });
    }
  }, [businessData, form]);

  return (
    <>
      <AddBusinessModalWrapper>
        <Form form={form} onSubmit={onSubmit}>
          <div className="input-wrap">
            <Form.Item
              type="text"
              name="businessName"
              sm
              rounded
              placeholder="Enter property name"
              label="Property name"
              rules={[
                { required: true },
                {
                  pattern: /^.{3,}$/,
                  message: 'Property name must be minimum of 3 characters.',
                },
                {
                  pattern: /^.{3,64}$/,
                  message: 'Property name should be maximum of 64 characters.',
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>

            <Form.Item
              type="text"
              name="location"
              sm
              rounded
              placeholder="Enter property location"
              label="Property location"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
          </div>

          <div className="input-wrap">
            <Form.Item
              type="text"
              name="area"
              sm
              rounded
              placeholder="5 marla, 10 marla etc."
              label="Property Area"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
          </div>

          <div>
            <Button sm width="184px" loader={loading}>
              {businessData ? 'Save Changes' : 'Add Property'}
            </Button>
          </div>
        </Form>
      </AddBusinessModalWrapper>
    </>
  );
};

export default AddBusinessModal;
