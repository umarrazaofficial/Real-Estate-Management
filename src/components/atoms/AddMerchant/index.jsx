import React, { useEffect, useState } from 'react';
import { useForm } from '../../molecules/Form';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import Button from '../../molecules/Button';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import Toast from '../../molecules/Toast';
import { AddBusinessModalWrapper } from '../AddBusinessModal/AddBusinessModal.style';
import expenseService from '../../../services/expenseService';

const AddMerchantModal = ({ onSubmit, data, btnText, setData, propertyId }) => {
  const [form] = useForm();
  const { refetch } = useContextHook(AuthContext, ['refetch']);
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data?.title,
        paidTo: data?.paidTo,
        amount: data?.amount,
      });
    }
  }, [data, form]);
  const handleSubmit = async e => {
    try {
      setLoading(true);
      const payload = {
        title: e?.title,
        paidTo: e?.paidTo,
        amount: e?.amount,
        propertyId: propertyId,
      };
      if (data) {
        // edit password
        await expenseService.editExpense(data._id, payload);
        Toast({
          type: 'success',
          message: 'Expense updated successfully',
        });
        setData({});
      } else {
        await expenseService.addExpense(payload);
      }
      refetch();
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
    <AddBusinessModalWrapper>
      <Form form={form} onSubmit={handleSubmit} onTouched={_ => setState(__ => ({ ...__, ..._ }))}>
        <div className="input-wrap">
          <Form.Item
            type="text"
            name="title"
            inputSm
            rounded
            placeholder="Enter expense title"
            label="Expense title"
            rules={[
              { required: true },
              {
                pattern: /^[a-zA-Z\s]+$/,
                message: 'Expense title should be Alphabets.',
              },
              {
                pattern: /^[a-zA-Z\s]{3,}$/,
                message: 'Expense title must be minimum of 3 characters.',
              },
              {
                pattern: /^[a-zA-Z\s]{3,64}$/,
                message: 'Expense title should be maximum of 64 characters.',
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
          <Form.Item
            type="text"
            name="amount"
            inputSm
            rounded
            placeholder="Enter expense amount"
            label="Expense amount"
            rules={[{ required: true }]}>
            <Field maxLength={40} />
          </Form.Item>
        </div>
        <div className="input-wrap">
          <Form.Item
            type="text"
            name="paidTo"
            inputSm
            rounded
            placeholder="Enter name of receiver"
            label="Paid to"
            rules={[{ required: true }]}>
            <Field maxLength={40} />
          </Form.Item>
        </div>

        <div>
          <Button sm width="211px" loader={loading}>
            {btnText}
          </Button>
        </div>
      </Form>
    </AddBusinessModalWrapper>
  );
};

export default AddMerchantModal;
