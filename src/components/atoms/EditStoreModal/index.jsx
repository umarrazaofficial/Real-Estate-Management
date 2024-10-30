import React, { useEffect, useState } from 'react';
import Form from '../../molecules/Form/Form';
import Field from '../Field';
import { useForm } from '../../molecules/Form';
import LocationIcon from '../../../assets/location.png';
import Select from '../../molecules/Select';
import Button from '../../molecules/Button';
import { EditStoreModalWrapper } from './EditStoreModal.style';
import ModalContainer from '../../molecules/ModalContainer';
import GoogleLocationSelector from '../GoogleLocationSelector';
import adminService from '../../../services/adminService';

export const PeoplesList = [
  {
    label: 'Indiana',
    value: 'indiana',
  },
  {
    label: 'Smith',
    value: 'smith',
  },
  {
    label: 'John',
    value: 'john',
  },
  {
    label: 'Alex',
    value: 'alex',
  },
];

export const Devices = [
  {
    name: 'Store #1 Floor',
    serialNo: '0821595181',
    status: true,
  },
  {
    name: 'Store #2 Floor',
    serialNo: '0821595182',
    status: true,
  },
  {
    name: 'Store #3 Floor',
    serialNo: '0821595183',
    status: true,
  },
  {
    name: 'Store #4 Floor',
    serialNo: '0821595184',
    status: true,
  },
];

const EditStoreModal = ({ onSubmit, data, isEdit }) => {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    startDate: '',
    endDate: '',
    filterRoles: '',
  });
  const [admins, setAdmins] = useState(null);

  const { admins_data } = adminService.GetAdmins(searchQuery);
  const [form] = useForm();
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (location !== '') {
      form.setFieldsValue({
        storeLocation: location?.formatted_address,
      });
    }
  }, [location, form]);

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({
        storeName: isEdit?.title,
        storeLocation: isEdit?.address?.value,
      });
    }
  }, [isEdit, form]);

  useEffect(() => {
    const admins = admins_data?.admins?.map(e => e?.email?.split('@')[0]);
    setAdmins(
      admins?.map(e => ({
        value: e,
        label: e?.toUpperCase(),
      })),
    );
  }, [admins_data, form]);

  return (
    <EditStoreModalWrapper>
      <Form form={form} onSubmit={onSubmit}>
        <div className="input-wrap">
          <Form.Item
            type="text"
            name="storeName"
            sm
            rounded
            placeholder="Enter Name"
            label="Store Name"
            rules={[
              {
                required: true,
              },
            ]}>
            <Field maxLength={40} />
          </Form.Item>
          <ModalContainer
            width="711"
            title="Edit Store Location"
            btnComponent={({ onClick }) => (
              <Form.Item
                type="text"
                name="storeLocation"
                sm
                rounded
                suffix={<img src={LocationIcon} alt="locationIcon" />}
                placeholder="Enter Location"
                label="Store Location"
                onClick={onClick}
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
                value={location}
                onSubmit={onClose}
                open={true}
                setCurrentAddress={value => setLocation(value)}
              />
            )}
          />
        </div>
        <div className="input-wrap">
          <Form.Item
            type="text"
            name="assignPeople"
            sm
            rounded
            isMulti
            placeholder="Select Peoples"
            label="Assign Peoples"
            rules={[
              {
                required: true,
                message: 'Please assign peoples',
              },
            ]}>
            <Select options={admins} />
          </Form.Item>
        </div>
        <div className="devices-wrap">
          <div className="row-wrap">
            <h2 className="title">Store #1 Devices:</h2>
            <span className="count">04 Devices</span>
          </div>
          {Devices?.map((data, index) => (
            <div className="row-wrap" key={index}>
              <div className="detail-wrap">
                <h2 className="heading">{data?.name}</h2>
                <div className="desc">
                  <span className="secondary">Serial No: {data?.serialNo} | Status: </span>
                  <span className={data?.status ? 'success' : 'primary'}>{data?.status ? ' Online' : ' Offline'}</span>
                </div>
              </div>
              <Button variant="light-primary" width="120px" type="button">
                View Detail
              </Button>
            </div>
          ))}
        </div>
        <Button width="163px">Save Changes</Button>
      </Form>
    </EditStoreModalWrapper>
  );
};

export default EditStoreModal;
