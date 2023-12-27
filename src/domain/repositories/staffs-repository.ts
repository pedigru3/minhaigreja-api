import { Staff } from '../entities/staff';

export interface StaffRepository {
  create(church: Staff): Promise<void>;
}
