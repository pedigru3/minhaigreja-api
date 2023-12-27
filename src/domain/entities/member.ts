import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Address } from './address';
import { Optional } from '@/core/types/optional';

interface MemberProps {
  churchID: UniqueEntityID;
  name: string;
  email: string;
  adress?: Address;
  birthday: Date;
  baptismday: Date;
  createdAt: Date;
}

export class Member extends Entity<MemberProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get adress() {
    return this.props.adress;
  }

  get birthday() {
    return this.props.birthday;
  }

  get baptismday() {
    return this.props.baptismday;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(
    props: Optional<MemberProps, 'createdAt'>,
    id?: UniqueEntityID,
  ) {
    const member = new Member(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );

    return member;
  }
}
