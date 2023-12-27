import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface ManagerProps {
  name: string;
  email: string;
}

export class Manager extends Entity<ManagerProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  static create(props: ManagerProps, id?: UniqueEntityID) {
    const manager = new Manager(props, id);

    return manager;
  }
}
