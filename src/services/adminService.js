import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const adminService = {
  _url: 'https://us-store-backend.vercel.app/api',
  /**
   * Hooks
   */

  GetAdmins(searchQuery, fetch) {
    const [admins, setAdmins] = useState({
      admins: [],
      totalItems: 0,
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getAdmins(searchQuery))
        .then(res => {
          setAdmins(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.filterRoles,
      searchQuery?.startDate,
      searchQuery?.endDate,
      fetch,
    ]);
    return {
      admins_loading: status === STATUS.LOADING,
      admins_error: status === STATUS.ERROR ? status : '',
      admins_data: admins,
    };
  },

  async getAdmins({
    page = 1,
    pageSize = 10,
    searchText = '',
    filterRoles,
    startDate = '',
    endDate = '',
    getAll = false,
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-admins?itemsPerPage=${pageSize}&page=${page}&searchText=${searchText}&filterRoles=${filterRoles}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        admins: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async login({ email = '', password = '' }) {
    let res = await Fetch.post(`${this._url}/login`, { email, password });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default adminService;
