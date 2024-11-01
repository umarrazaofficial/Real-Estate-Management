import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const businessService = {
  _url: 'https://us-store-backend.vercel.app/api',

  GetBusinesses(searchQuery, refetch) {
    const [businesses, setBusinesses] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getBusinesses(searchQuery))
        .then(res => {
          setBusinesses(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [searchQuery?.page, searchQuery?.pageSize, searchQuery?.searchText, searchQuery?.filterText, refetch]);
    return {
      businesses_loading: status === STATUS.LOADING,
      businesses_error: status === STATUS.ERROR ? status : '',
      businesses_data: businesses,
    };
  },

  async getBusinesses({ searchText = '' }) {
    let res = await Fetch.get(`${this._url}/getAllProperty?name=${searchText}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return {
        properties: res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async createBusiness(payload) {
    let res = await Fetch.post(`${this._url}/addProperty`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deleteBusiness(id) {
    let res = await Fetch.delete(`${this._url}/deleteProperty/${id}`);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async editBusiness(id, payload) {
    let res = await Fetch.put(`${this._url}/updateProperty/${id}`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default businessService;
