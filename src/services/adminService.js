import { useEffect, useState } from 'react';
import { Fetch } from '../helpers/fetchWrapper';
import { useCancellablePromise } from '../helpers/promiseHandler';

const STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const adminService = {
  _url: process.env.REACT_APP_ADMIN_API_URL,
  _url_merchant: process.env.REACT_APP_MERCHANT_API_URL,
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

  GetRoles(searchQuery, refetch) {
    const [roles, setRoles] = useState({
      totalItems: 0,
      roles: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getRoles(searchQuery))
        .then(res => {
          setRoles(() => res);
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
      searchQuery?.getAll,
      refetch,
    ]);
    return {
      roles_loading: status === STATUS.LOADING,
      roles_error: status === STATUS.ERROR ? status : '',
      roles_data: roles,
    };
  },

  GetPermissions(searchQuery, refetch) {
    const [permissions, setPermissions] = useState({
      totalItems: 0,
      permissions: [],
    });
    const { cancellablePromise } = useCancellablePromise();
    const [status, setStatus] = useState(STATUS.LOADING);
    useEffect(() => {
      setStatus(STATUS.LOADING);
      cancellablePromise(this.getPermissions(searchQuery))
        .then(res => {
          setPermissions(() => res);
          setStatus(STATUS.SUCCESS);
        })
        .catch(() => setStatus(STATUS.ERROR));
    }, [
      searchQuery?.searchText,
      searchQuery?.page,
      searchQuery?.pageSize,
      searchQuery?.filterText,
      searchQuery?.startDate,
      searchQuery?.endDate,
      searchQuery?.getAll,
      searchQuery?.parentOnly,
      searchQuery?.filterPermission,
      refetch,
    ]);
    return {
      permissions_loading: status === STATUS.LOADING,
      permissions_error: status === STATUS.ERROR ? status : '',
      permissions_data: permissions,
    };
  },

  async health() {
    const res = await Fetch.get(`${this._url}/health`);
    if (res.status >= 200 && res.status < 300) {
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
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

  async merchantLogin({ email = '', password = '' }) {
    let res = await Fetch.post(`${this._url_merchant}/login-business-user`, { email, password });
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deleteAdmin(id) {
    let res = await Fetch.delete(`${this._url}/delete-admin/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async addAdmin(values) {
    let res = await Fetch.post(`${this._url}/add-admin`, values);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
  async addBusinessUser(values) {
    let res = await Fetch.post(`${this._url_merchant}/create-business-user`, values);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async updateAdmin(id, values) {
    let res = await Fetch.patch(`${this._url}/update-admin/${id}`, values);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async removeAdminJwt() {
    let res = await Fetch.delete(`${this._url}/logout`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async foreLogoutUser(id) {
    let res = await Fetch.post(`${this._url}/force-logout-admin/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getCurrentAdmin() {
    let res = await Fetch.get(`${this._url}/get-perms`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getRoles({
    page = 1,
    pageSize = 10,
    searchText = '',
    filterRoles = '',
    startDate = '',
    endDate = '',
    getAll = false,
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-role?page=${page}&perPage=${pageSize}&searchText=${searchText}&filterRoles=${filterRoles}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        roles: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async getPermissions({
    page = 1,
    pageSize = 10,
    searchText = '',
    startDate = '',
    endDate = '',
    getAll = false,
    parentOnly = false,
    filterPermission = '',
  }) {
    let res = await Fetch.get(
      `${this._url}/get-all-permission?page=${page}&perPage=${pageSize}&searchText=${searchText}&filterText=${filterPermission}&startDate=${startDate}&endDate=${endDate}&getAll=${getAll}&parentOnly=${parentOnly}`,
    );
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        permissions: res.items,
        totalItems: res.totalItems,
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async createRole(payload) {
    let res = await Fetch.post(`${this._url}/create-role`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async updateRole(id, payload) {
    let res = await Fetch.put(`${this._url}/update-role/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deleteRole(id) {
    let res = await Fetch.delete(`${this._url}/delete-role/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async createPermission(payload) {
    let res = await Fetch.post(`${this._url}/create-permission`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async updatePermission(id, payload) {
    let res = await Fetch.put(`${this._url}/update-permission/${id}`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async deletePermission(id) {
    let res = await Fetch.delete(`${this._url}/delete-permission/${id}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async restorePermissions(payload) {
    let res = await Fetch.post(`${this._url}/restore-permissions`, payload);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return res;
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },

  async rolesFiltersOptions({ getAll = true }) {
    let res = await Fetch.get(`${this._url}/get-all-role?getAll=${getAll}`);
    if (res.status >= 200 && res.status < 300) {
      res = await res.json();
      return {
        options: res.items.map(({ type }) => ({ label: type, value: type })),
      };
    }
    const { message } = await res.json();
    throw new Error(message ?? 'Something went wrong');
  },
};
export default adminService;