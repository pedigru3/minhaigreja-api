import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from './address';

interface ChurchProps {
  managerID: UniqueEntityID;
  name: string;
  addres: Address;
  mission?: string;
  baseVerse?: string;
  foundationDate: Date;
}

export class Church extends Entity<ChurchProps> {
  get name() {
    return this.props.name;
  }

  get adress() {
    return this.props.addres.fullAdress;
  }

  get foundationDate() {
    return this.props.foundationDate;
  }

  get baseVerse() {
    return this.props.baseVerse;
  }

  get mission() {
    return this.props.mission;
  }

  get managerID() {
    return this.props.managerID;
  }

  static create(props: ChurchProps, id?: UniqueEntityID) {
    const church = new Church(props, id);

    return church;
  }
}
