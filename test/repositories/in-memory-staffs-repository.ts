import { Staff } from '@/domain/entities/staff';
import { StaffRepository } from '@/domain/repositories/staffs-repository';

export class InMemoryStaffsRepository implements StaffRepository {
  public staffs: Staff[] = [];

  async create(staff: Staff) {
    this.staffs.push(staff);
  }
}
