import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface AddressProps {
  street: string;
  streetNumber: string;
  complement?: string;
  city: string;
  state: string;
  neighborhood: string;
  cep: string;
}

export class Address extends Entity<AddressProps> {
  get street() {
    return this.props.street;
  }
  get streetNumber() {
    return this.props.streetNumber;
  }
  get complement() {
    return this.props.complement;
  }
  get city() {
    return this.props.city;
  }
  get state() {
    return this.props.state;
  }
  get neighborhood() {
    return this.props.neighborhood;
  }
  get cep() {
    return this.props.cep;
  }

  get fullAdress() {
    const { street, streetNumber, cep, city, complement, state, neighborhood } =
      this.props;

    return `${street}, ${streetNumber}${
      complement ? `, ${complement}` : ''
    } - ${neighborhood}, ${city} - ${state}, ${cep}`;
  }

  static create(props: AddressProps, id?: UniqueEntityID) {
    const adress = new Address(props, id);

    return adress;
  }
}
