import React, { useEffect } from 'react';
import { useForm } from '../../molecules/Form';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import Button from '../../molecules/Button';
import { EditBusinessModalWrapper } from './EditBusinessModal.style';

const EditBusinessModal = ({ onClose  }) => {
  const [form] = useForm();

  

  return (
    <>
      <EditBusinessModalWrapper>
        <Form form={form} onSubmit={onClose}>
          <div className="input-wrap">
            <Form.Item
              type="text"
              name="businessName"
              sm
              rounded
              placeholder="Enter Business Name"
              label="Business Name">
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item
              type="text"
              name="businessAddress"
              sm
              rounded
              placeholder="Enter Business Address"
              label="Business Address">
              <Field maxLength={40} />
            </Form.Item>
          </div>

          <div className="input-wrap">
            <Form.Item type="text" name="ownerName" sm rounded placeholder="Enter Owner Name" label="Owner Name">
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item
              type="text"
              name="ownerAddress"
              sm
              rounded
              placeholder="Enter Owner Address"
              label="Owner Address">
              <Field maxLength={40} />
            </Form.Item>
          </div>

          <div className="input-wrap">
            <Form.Item
              type="text"
              name="ownerNumber"
              sm
              rounded
              placeholder="Enter Phone Number"
              label="Owner Phone no.">
              <Field maxLength={40} />
            </Form.Item>
            <Form.Item type="text" name="ownerEmail" sm rounded placeholder="Enter Email Address" label="Owner Email">
              <Field maxLength={40} />
            </Form.Item>
          </div>
          <div>
            <Button width="184px">Save Changes</Button>
          </div>
        </Form>
      </EditBusinessModalWrapper>
    </>
  );
};

export default EditBusinessModal;
