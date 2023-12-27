import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from '../entities/address';
import { Church } from '../entities/church';
import { ChurchsRepository } from '../repositories/churchs-repository';

interface RegisterChurchUseCaseRequest {
  managerId: string;
  name: string;
  city: string;
  state: string;
  street: string;
  cep: string;
  streetNumber: string;
  neighborhood: string;
  foundationDate: string;
  complement?: string;
}

export class RegisterChurchUseCase {
  constructor(private churchsRepository: ChurchsRepository) {}

  async execute({
    managerId,
    name,
    city,
    state,
    street,
    foundationDate,
    cep,
    neighborhood,
    streetNumber,
    complement,
  }: RegisterChurchUseCaseRequest) {
    const church = Church.create({
      foundationDate: new Date(foundationDate),
      managerID: new UniqueEntityID(managerId),
      name,
      addres: Address.create({
        cep,
        city,
        neighborhood,
        streetNumber,
        state,
        complement,
        street,
      }),
    });

    await this.churchsRepository.create(church);

    return church;
  }
}
