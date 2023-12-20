import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface AddressProps {
  street: string;
  city: string;
  state: string;
  postalCode: string;
}

export class Address extends Entity<AddressProps> {
  static create(props: AddressProps, id?: UniqueEntityID) {
    const church = new Address(props, id);

    return church;
  }
}
