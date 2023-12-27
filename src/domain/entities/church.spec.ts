import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Church } from './church'; // Assuming your file is named church.ts
import { Address } from './address';

describe('Church', () => {
  const address = Address.create({
    street: 'Main St',
    streetNumber: '123',
    cep: '12345',
    city: 'Cityville',
    complement: 'Suite 456',
    state: 'CA',
    neighborhood: 'Downtown',
  });

  const churchProps = {
    managerID: new UniqueEntityID(),
    name: 'Community Church',
    addres: address,
    mission: 'To spread love',
    baseVerse: 'John 3:16',
    foundationDate: new Date('2022-01-01'),
  };

  it('should create a church instance', () => {
    const church = Church.create(churchProps);

    expect(church).toBeInstanceOf(Church);
    expect(church.name).toBe(churchProps.name);
    expect(church.adress).toBe(
      'Main St, 123, Suite 456 - Downtown, Cityville - CA, 12345',
    );
    expect(church.mission).toBe('To spread love');
    expect(church.baseVerse).toBe('John 3:16');
    expect(church.foundationDate).toBe(churchProps.foundationDate);
    expect(church.managerID).toBe(churchProps.managerID);
  });
});
