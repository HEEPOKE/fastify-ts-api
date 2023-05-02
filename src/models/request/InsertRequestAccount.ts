import { Role } from '../../enums/role';

export default interface InsertRequestAccount {
    email: string;
    password?: string;
    role?: Role;
}
