import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Optional } from '@/core/types/optional';

interface StaffProps {
  churchID: UniqueEntityID;
  name: string;
  description: string;
  createdAt: Date;
}

export class Staff extends Entity<StaffProps> {
  get name() {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get description() {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get churchID() {
    return this.props.churchID;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: Optional<StaffProps, 'createdAt'>, id?: UniqueEntityID) {
    const staff = new Staff(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return staff;
  }
}
