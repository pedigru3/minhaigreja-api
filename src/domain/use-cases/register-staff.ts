import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { StaffRepository } from '../repositories/staffs-repository';
import { Staff } from '../entities/staff';

interface RegisterStaffRequest {
  name: string;
  description: string;
  churchID: string;
}

export class RegisterStaffUseCase {
  constructor(private staffsRepository: StaffRepository) {}

  async execute({ churchID, description, name }: RegisterStaffRequest) {
    const staff = Staff.create({
      churchID: new UniqueEntityID(churchID),
      description,
      name,
    });

    await this.staffsRepository.create(staff);

    return staff;
  }
}
