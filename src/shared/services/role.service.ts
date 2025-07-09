import { axiosInstance } from '../api';
import { IGetAllRolesWithoutAdminResponse } from '../types';

export const RoleService = {
  getAllRolesWithoutAdmin: async () => {
    const res = await axiosInstance.get<IGetAllRolesWithoutAdminResponse>(
      'role/get-all-without-admin'
    );
    return res.data;
  },
};
