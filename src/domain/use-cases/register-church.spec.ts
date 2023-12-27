import { RegisterChurchUseCase } from './register-church';
import { Church } from '../entities/church';
import { Manager } from '../entities/manager';
import { InMemoryChurchsRepository } from 'test/repositories/in-memory-churchs-repository';

let inMemoryChurchsRepository: InMemoryChurchsRepository;
let sut: RegisterChurchUseCase;

describe('RegisterChurchUseCase', () => {
  beforeEach(() => {
    inMemoryChurchsRepository = new InMemoryChurchsRepository();
    sut = new RegisterChurchUseCase(inMemoryChurchsRepository);
  });
  it('shold be register a church', async () => {
    const manager = Manager.create({
      name: 'Jonh Doe',
      email: 'jonhDoe@email.com',
    });

    const result = await sut.execute({
      managerId: manager.id.toValue(),
      name: 'IB Catuaí',
      city: 'Londrina',
      cep: '86055-690',
      state: 'Paraná',
      street: 'Rubéns Alvin',
      foundationDate: '2023-01-01',
      neighborhood: 'Jardim Alto da Colina',
      streetNumber: '12',
    });

    expect(result).toBeInstanceOf(Church);
    expect(inMemoryChurchsRepository.churchs).toHaveLength(1);
  });
});
