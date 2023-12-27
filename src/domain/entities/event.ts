import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from './address';
import { Optional } from '@/core/types/optional';

interface EventProps {
  name: string;
  local: Address;
  description?: string;
  startDate: Date;
  endDate: Date;
  lot: string;
  createdAt: Date;
}

export class Event extends Entity<EventProps> {
  get name() {
    return this.props.name;
  }

  get local() {
    return this.props.local;
  }

  get description() {
    return this.props.description;
  }

  static create(props: Optional<EventProps, 'createdAt'>, id?: UniqueEntityID) {
    const event = new Event(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return event;
  }
}
