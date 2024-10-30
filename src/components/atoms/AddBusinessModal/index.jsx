import React, { useEffect, useState } from 'react';
import { useForm } from '../../molecules/Form';
import { AddBusinessModalWrapper } from './AddBusinessModal.style';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import Button from '../../molecules/Button';
import Toast from '../../molecules/Toast';
import ModalContainer from '../../molecules/ModalContainer';
import GoogleLocationSelector from '../GoogleLocationSelector';
import businessService from '../../../services/businessService';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import { CountriesList } from '../../Countries';

const AddBusinessModal = ({ handleSubmit, businessData }) => {
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');

  const { refetch } = useContextHook(AuthContext, v => ({
    refetch: v.refetch,
  }));
  const onSubmit = async e => {
    // setLoading(true);
    const payload = {
      business: {
        name: e?.businessName,
        country: e?.country?.value,
        address_line_1: e?.addressLine1,
        address_line_2: e?.addressLine2,
        postal_code: e?.postalCode,
        phone: e?.phone,
        support_email: e?.supportEmail,
        support_phone: e?.supportPhone,
      },
    };

    try {
      const response = await businessService.editBusiness(businessData?.id, payload);
      Toast({
        type: 'success',
        message: response?.message || 'Business updated successfully',
      });
      handleSubmit();
    } catch (error) {
      Toast({
        type: 'error',
        message: error?.message ?? 'Something Went Wrong',
      });
    } finally {
      refetch();
    }
  };

  // useEffect(() => {
  //   if (location !== '') {
  //     form.setFieldsValue({
  //       address: location?.formatted_address,
  //     });
  //   }
  // }, [location]);

  useEffect(() => {
    if (businessData) {
      form.setFieldsValue({
        businessName: businessData?.name,
        addressLine1: businessData?.address_line_1,
        addressLine2: businessData?.address_line_2,
        postalCode: businessData?.postal_code,
        country: CountriesList.filter(
          ({ value, label }) => businessData?.country.includes(value) || businessData?.country.includes(label),
        ),
        phone: businessData?.phone,
        supportPhone: businessData?.support_phone,
        supportEmail: businessData?.support_email,
        address: businessData?.address?.value,
        mid: businessData?.mid,
      });
      // setLocation({
      //   formatted_address: businessData?.address?.value,
      //   latlng: {
      //     lat: businessData?.address?.lat,
      //     lng: businessData?.address?.lng,
      //   },
      // });
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
              placeholder="Enter business name"
              label="Business name"
              rules={[
                { required: true },
                {
                  pattern: /^.{3,}$/,
                  message: 'Business name must be minimum of 3 characters.',
                },
                {
                  pattern: /^.{3,40}$/,
                  message: 'Business name should be maximum of 40 characters.',
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>

            <Form.Item
              type="text"
              name="addressLine1"
              sm
              rounded
              placeholder="Enter business address"
              label="Business address line 1"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
            {/* <ModalContainer
              width="711"
              title="Add Business Location"
              btnComponent={({ onClick }) => (
                <Form.Item
                  type="text"
                  name="address"
                  sm
                  rounded
                  placeholder="Enter Business Address"
                  onClick={onClick}
                  label="Business Address Line 1"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Field maxLength={40} />
                </Form.Item>
              )}
              content={({ onClose }) => (
                <GoogleLocationSelector
                  selectedAddress={location}
                  value={location?.value}
                  onSubmit={onClose}
                  open={true}
                  setCurrentAddress={value => setLocation(value)}
                />
              )}
            /> */}
          </div>

          <div className="input-wrap">
            <Form.Item
              type="text"
              name="addressLine2"
              sm
              rounded
              placeholder="Enter business address"
              label="Business address line 2"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>

            <Form.Item
              type="text"
              name="postalCode"
              sm
              rounded
              placeholder="Enter postal code"
              label="Postal code"
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
              type="select"
              name="country"
              sm
              rounded
              options={CountriesList}
              menuPosition="fixed"
              placeholder="Select country"
              label="Country"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item
              type="number"
              name="phone"
              sm
              rounded
              placeholder="Enter phone number"
              label="Phone number"
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
              name="supportEmail"
              sm
              rounded
              placeholder="Enter support email"
              label="Support email address"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item
              type="number"
              name="supportPhone"
              sm
              rounded
              placeholder="Enter support phone"
              label="Support phone number"
              rules={[
                {
                  required: true,
                },
              ]}>
              <Field maxLength={40} />
            </Form.Item>
          </div>

          {/* <div className="input-wrap">
            <Form.Item
              type="text"
              name="mid"
              sm
              rounded
              placeholder="Enter Business MID"
              label="Business MID"
              rules={[
                { required: true },
                {
                  pattern: /^(?!0{10}$)(?!-)(?!.*-.{10})(?!.{11,}$)\d{10}$/,
                  message: 'Business MID must be of length 10 numbers and not all zero"s',
                },
              ]}>
              <Field maxLength={10} />
            </Form.Item>
          </div> */}
          <div>
            <Button sm width="184px" loader={loading}>
              {businessData ? 'Save Changes' : 'Add Business'}
            </Button>
          </div>
        </Form>
      </AddBusinessModalWrapper>
    </>
  );
};

export default AddBusinessModal;
