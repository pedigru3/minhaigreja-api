import { InMemoryStaffsRepository } from 'test/repositories/in-memory-staffs-repository';
import { RegisterStaffUseCase } from './register-staff';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Staff } from '../entities/staff';

let inMemoryStaffsRepository: InMemoryStaffsRepository;
let sut: RegisterStaffUseCase;

describe('Register a Staff', () => {
  beforeEach(() => {
    inMemoryStaffsRepository = new InMemoryStaffsRepository();
    sut = new RegisterStaffUseCase(inMemoryStaffsRepository);
  });
  it('shold be register a staff', async () => {
    const result = await sut.execute({
      churchID: new UniqueEntityID().toValue(),
      description: 'Midias da Ib Catuai',
      name: 'Mídias',
    });

    expect(result).toBeInstanceOf(Staff);
    expect(inMemoryStaffsRepository.staffs).toHaveLength(1);
    expect(inMemoryStaffsRepository.staffs[0].name).toEqual('Mídias');
    expect(inMemoryStaffsRepository.staffs[0].description).toBe(
      'Midias da Ib Catuai',
    );
  });
});
