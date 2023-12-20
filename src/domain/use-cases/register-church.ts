import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from '../entities/address';
import { Church } from '../entities/church';
import { ChurchsRepository } from '../repositories/churchs-repository';

interface RegisterChurchUseCaseRequest {
  managerId: string;
  name: string;
  city: string;
  postalCode: string;
  state: string;
  street: string;
  foundationDate: string;
}

export class RegisterChurchUseCase {
  constructor(private churchsRepository: ChurchsRepository) {}

  async execute({
    managerId,
    name,
    city,
    postalCode,
    state,
    street,
    foundationDate,
  }: RegisterChurchUseCaseRequest) {
    const church = Church.create({
      foundationDate: new Date(foundationDate),
      managerID: new UniqueEntityID(managerId),
      name,
      addres: Address.create({
        city,
        postalCode,
        state,
        street,
      }),
    });

    await this.churchsRepository.create(church);

    return church;
  }
}
