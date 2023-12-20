import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from './address';

interface EventProps {
  name: string;
  local: Address;
  description?: string;
  startDate: Date;
  endDate: Date;
  lot: string;
}

export class Church extends Entity<EventProps> {
  static create(props: EventProps, id?: UniqueEntityID) {
    const church = new Church(props, id);

    return church;
  }
}
