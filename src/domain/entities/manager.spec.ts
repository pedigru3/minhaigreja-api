import { Manager } from './manager'; // Adjust the import path

describe('Manager', () => {
  it('should create a manager instance', () => {
    const manager = Manager.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });

    expect(manager).toBeInstanceOf(Manager);
    expect(manager.name).toBe('John Doe');
    expect(manager.email).toBe('john.doe@example.com');
  });

  it('should have the correct properties', () => {
    const manager = Manager.create({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    });

    expect(manager.name).toBe('Jane Doe');
    expect(manager.email).toBe('jane.doe@example.com');
  });
});
