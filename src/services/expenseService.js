import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const expenseService = {
  _url: 'https://us-store-backend.vercel.app/api',

  GetExpenses(searchQuery, refetch) {
    const [expenses, setExpenses] = useState([]);
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getExpenses(searchQuery))
        .then(res => {
          setExpenses(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.searchText,
      searchQuery?.propertyId,
      searchQuery?.filterText,
      refetch,
    ]);
    return {
      expenses_loading: status === STATUS.LOADING,
      expenses_error: status === STATUS.ERROR ? status : '',
      expenses_data: expenses,
    };
  },

  async getExpenses({ propertyId = '', searchText = '' }) {
    let res = await Fetch.get(`${this._url}/getAllExpenses?title=${searchText}&propertyId=${propertyId}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        ...res,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async addExpense(payload) {
    let res = await Fetch.post(`${this._url}/addExpense`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deleteExpense(id) {
    let res = await Fetch.delete(`${this._url}/deleteExpense/${id}`);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async editExpense(id, payload) {
    let res = await Fetch.put(`${this._url}/updateExpense/${id}`, payload);

    if (res.status >= 200 && res.status < 300) {
      res = await res.json();

      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};

export default expenseService;
