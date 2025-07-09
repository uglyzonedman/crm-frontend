export interface IGetAllRolesWithoutAdminResponse {
  message: string;
  status: string;
  data: [
    {
      id: string;
      name: string;
      permissions: any[];
      label: string;
    },
  ];
}
