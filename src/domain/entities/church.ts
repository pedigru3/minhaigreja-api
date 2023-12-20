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
  static create(props: ChurchProps, id?: UniqueEntityID) {
    const church = new Church(props, id);

    return church;
  }
}
