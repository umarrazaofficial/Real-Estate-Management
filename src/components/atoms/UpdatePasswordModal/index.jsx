import React from "react";
import {useForm} from "../../molecules/Form";
import Form from "../../molecules/Form/Form";
import Field from "../Field";
import Button from "../../molecules/Button";
import {UpdatePasswordModalWrapper} from "./UpdatePasswordModal.style";

const UpdatePasswordModal = ({onSubmit}) => {
    const [form] = useForm();

    const handleSubmit = e => {
        onSubmit();
    };
    return (
      <>
        <UpdatePasswordModalWrapper>
          <Form form={form} onSubmit={handleSubmit}>
            <div className="input-wrap">
              <Form.Item
                type="password"
                name="password"
                sm
                rounded
                placeholder="Enter Password"
                label="Password"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Field maxLength={40} />
              </Form.Item>
              <Form.Item
                type="password"
                name="confirmPassword"
                sm
                rounded
                placeholder="Re-Enter Password"
                label="Confirm Password"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Field maxLength={40} />
              </Form.Item>
            </div>

            <div>
              <Button width="211px">Update Password</Button>
            </div>
          </Form>
        </UpdatePasswordModalWrapper>
      </>
    );
};

export default UpdatePasswordModal;
