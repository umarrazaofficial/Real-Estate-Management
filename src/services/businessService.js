import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const businessService = {
  _url: `${process.env.REACT_APP_BUSINESS_API_URL}`,

  GetBusinesses(searchQuery, refetch) {
    const [businesses, setBusinesses] = useState({
      businesses: [],
      totalItems: 0,
    });
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
    }, [
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.searchText,
      searchQuery?.startDate,
      searchQuery?.endDate,
      searchQuery?.filterStatus,
      searchQuery?.filterText,
      searchQuery?.getDeleted,
      refetch,
    ]);
    return {
      businesses_loading: status === STATUS.LOADING,
      businesses_error: status === STATUS.ERROR ? status : '',
      businesses_data: businesses,
    };
  },

  GetBusinessDetails(id, refetch) {
    const [businessDetails, setBusinessDetails] = useState(null);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getBusinessDetails(id))
        .then(res => {
          setBusinessDetails(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [refetch]);
    return {
      business_details_loading: status === STATUS.LOADING,
      business_details_error: status === STATUS.ERROR ? status : '',
      business_details_data: businessDetails?.business,
    };
  },

  async getBusinesses({
    page = 1,
    pageSize = 10,
    searchText = '',
    startDate = '',
    endDate = '',
    filterStatus = '',
    filterText = '',
    getDeleted = '',
  }) {
    let res = await Fetch.get(
      `${this._url}/businesses?page=${page}&itemsPerPage=${pageSize}&searchText=${searchText}&filterText=${filterText}&startDate=${startDate}&endDate=${endDate}&status=${filterStatus}&getDeleted=${getDeleted}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return {
        businesses: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    console.log(message);
    throw new Error(message ?? 'Something went wrong');
  },

  async createBusiness(payload) {
    let res = await Fetch.post(`${this._url}/create-business`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deleteBusiness(id) {
    let res = await Fetch.delete(`${this._url}/businesses/${id}`);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async editBusiness(id, payload) {
    let res = await Fetch.put(`${this._url}/businesses/${id}`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getBusinessDetails(id) {
    let res = await Fetch.get(`${this._url}/businesses/${id}`);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async changeBusinessStatus(id, payload) {
    let res = await Fetch.put(`${this._url}/business/${id}/status`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default businessService;
