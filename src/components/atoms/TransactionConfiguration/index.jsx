import React, { useEffect, useState } from 'react';
import {
  EmployeeTab,
  TabWrap,
  TipTab,
  TipWrap,
  TransactionConfigurationWrapper,
} from './TransactionConfiguration.style';
import Form from '../../molecules/Form/Form';
import { useForm } from '../../molecules/Form';
import Switch from '../Switch';
import Button from '../../molecules/Button';
import InvoiceIcon from '../../../assets/invoiceIcon.svg';
import TipIcon from '../../../assets/tipIcon.svg';
import EmployeeIcon from '../../../assets/nav/role.svg';
import Field from '../Field';
import { useParams } from 'react-router-dom';
import Toast from '../../molecules/Toast';
import { useContextHook } from 'use-context-hook';
import { AuthContext } from '../../../Context/authContext';
import configurationService from '../../../services/configurationService';

const TransactionConfiguration = ({ data, configId }) => {
  const [form] = useForm();
  const [activeTab, setActiveTab] = useState('auto');

  const { refetch } = useContextHook(AuthContext, v => ({
    refetch: v.refetch,
  }));

  console.log(data);

  const handleSubmit = async e => {
    const payload = {
      configuration: {
        language_and_terminal_mode: data?.language_and_terminal_mode,
        printer: data?.printer,
        employ_id_management: {
          employ_id: {
            value: e?.employeeIdEnabled,
          },
        },
        invoice_number: {
          auto_increment: {
            value: activeTab === 'auto',
          },
          manual_entry: {
            value: activeTab === 'manual',
          },
        },
        tip_configuration: {
          tip_screen: {
            value: e?.enableTipConfig,
          },
          percentage_tip_amount: {
            value: e?.tipPercentage1,
            amount_1: {
              value: e?.option1,
            },
            amount_2: {
              value: e?.option2,
            },
            amount_3: {
              value: e?.option3,
            },
          },
          dollar_tip_amount: {
            value: e?.tipAmount2,
            amount_1: {
              value: e?.option4,
            },
            amount_2: {
              value: e?.option5,
            },
            amount_3: {
              value: e?.option6,
            },
          },
        },
      },
    };
    console.log('payload', payload);
    try {
      await configurationService.updateConfiguration(configId, payload);
      Toast({
        message: 'Device Setting Updated Successfully',
        type: 'success',
      });
      refetch();
    } catch (error) {
      Toast({
        type: 'error',
        message: error?.message,
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      employeeIdEnabled: data?.employ_id_management?.employ_id?.value,
      enableTipConfig: data?.tip_configuration?.tip_screen?.value,
      tipPercentage1: data?.tip_configuration?.percentage_tip_amount?.value,
      option1: data?.tip_configuration?.percentage_tip_amount?.amount_1?.value,
      option2: data?.tip_configuration?.percentage_tip_amount?.amount_2?.value,
      option3: data?.tip_configuration?.percentage_tip_amount?.amount_3?.value,
      tipAmount2: data?.tip_configuration?.dollar_tip_amount?.value,
      option4: data?.tip_configuration?.dollar_tip_amount?.amount_1?.value,
      option5: data?.tip_configuration?.dollar_tip_amount?.amount_2?.value,
      option6: data?.tip_configuration?.dollar_tip_amount?.amount_3?.value,
    });
    if (data?.invoice_number?.auto_increment?.value) {
      setActiveTab('auto');
    } else {
      setActiveTab('manual');
    }
  }, [data, form]);
  return (
    <TransactionConfigurationWrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <TipTab>
          <div className="configure-wrap">
            <div className="icon">
              <img src={TipIcon} alt="MessageIcon" />
            </div>
            <h2 className="title">Tip configuration</h2>
          </div>
          <div className="config-wrap">
            <Form.Item label="Enabled" name="enableTipConfig">
              <Switch />
            </Form.Item>
            {/* <Form.Item label="Allow custom amounts" name="custom-amounts">
              <Switch />
            </Form.Item> */}
          </div>
        </TipTab>
        <TipWrap>
          <h2 className="col-title">Select tip type</h2>
          <div className="footer-col-wrap">
            <div className="footer-col">
              <div className="reciept-wrapper">
                <Form.Item className="toggle-wrap" label="Tip percentage" name="tipPercentage1">
                  <Switch />
                </Form.Item>
                <h2 className="col-title">Preset percentages</h2>
                <div className="fields-wrap">
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option1"
                    noMargin
                    label="Option 1"
                    placeholder="0"
                    suffix="%">
                    <Field />
                  </Form.Item>
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option2"
                    noMargin
                    label="Option 2"
                    placeholder="0"
                    suffix="%">
                    <Field />
                  </Form.Item>
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option3"
                    noMargin
                    label="Option 3"
                    placeholder="0"
                    suffix="%">
                    <Field />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <div className="reciept-wrapper">
                <div className="toggle-wrap">
                  <Form.Item className="toggle-wrap" label="Tip amount" name="tipAmount2">
                    <Switch />
                  </Form.Item>
                </div>
                <h2 className="col-title">Preset amount</h2>
                <div className="fields-wrap tip-amount">
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option4"
                    noMargin
                    label="Option 1"
                    placeholder="0"
                    prefix="€">
                    <Field />
                  </Form.Item>
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option5"
                    noMargin
                    label="Option 2"
                    placeholder="0"
                    prefix="€">
                    <Field />
                  </Form.Item>
                  <Form.Item
                    type="number"
                    className="optionsField"
                    rounded
                    name="option6"
                    noMargin
                    label="Option 3"
                    placeholder="0"
                    prefix="€">
                    <Field />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </TipWrap>
        <TabWrap>
          <div className="configure-wrap">
            <div className="icon">
              <img src={InvoiceIcon} alt="InvoiceIcon" />
            </div>
            <div>
              <h2 className="title">Invoice management</h2>
              <span className="desc"> View & manage your invoice information here.</span>
            </div>
          </div>
          <div className="invoice-btn-wrap">
            <span className="title">Invoice number</span>
            <div className="invoice-btn">
              <button
                className={`action-btn-status ${activeTab === 'auto' && 'active'}`}
                onClick={e => {
                  e?.preventDefault();
                  setActiveTab('auto');
                }}>
                Auto
              </button>
              <button
                className={`action-btn-status ${activeTab === 'manual' && 'active'}`}
                onClick={e => {
                  e?.preventDefault();
                  setActiveTab('manual');
                }}>
                Manual
              </button>
            </div>
          </div>
        </TabWrap>
        <EmployeeTab>
          <div className="configure-wrap">
            <div className="icon">
              <img src={EmployeeIcon} alt="InvoiceIcon" />
            </div>
            <div>
              <h2 className="title">Employee ID management</h2>
              <span className="desc"> View & manage your invoice information here.</span>
            </div>
          </div>
          <div className="switch-wrap">
            <Form.Item label="Enable ID" name="employeeIdEnabled">
              <Switch />
            </Form.Item>
          </div>
        </EmployeeTab>
        <div className="btn-wrap">
          <Button sm width="150px" variant="primary">
            Save changes
          </Button>
        </div>
      </Form>
    </TransactionConfigurationWrapper>
  );
};

export default TransactionConfiguration;
