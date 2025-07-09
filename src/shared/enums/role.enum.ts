export enum RoleEnum {
  FREELANCER = 'freelancer',
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}

export const RoleLabels: Record<RoleEnum, string> = {
  [RoleEnum.FREELANCER]: 'Фрилансер',
  [RoleEnum.CUSTOMER]: 'Заказчик',
  [RoleEnum.ADMIN]: 'Администратор',
};
