import { RegisterChurchUseCase } from './register-church';
import { Church } from '../entities/church';
import { Manager } from '../entities/manager';
import { ChurchsRepository } from '../repositories/churchs-repository';

describe('RegisterChurchUseCase', () => {
  const fakeChurchRepository: ChurchsRepository = {
    create: async (answer: Church) => {
      return;
    },
  };
  it('deve criar uma igreja corretamente', async () => {
    // Arrange
    const useCase = new RegisterChurchUseCase(fakeChurchRepository);

    const manager = Manager.create({
      name: 'Jonh Doe',
      email: 'jonhDoe@email.com',
    });

    const result = await useCase.execute({
      managerId: manager.id.toValue(),
      name: 'IB Catuaí',
      city: 'Cidade',
      postalCode: '12345-678',
      state: 'Paraná',
      street: 'Rua Principal',
      foundationDate: '2023-01-01',
    });

    expect(result).toBeInstanceOf(Church);
  });
});
