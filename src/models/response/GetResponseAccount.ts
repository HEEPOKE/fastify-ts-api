import { Role } from '../../enums/role';

export default interface GetResponseAccount {
    id: number;
    email: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
