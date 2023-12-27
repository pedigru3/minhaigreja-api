import { Church } from '@/domain/entities/church';
import { ChurchsRepository } from '@/domain/repositories/churchs-repository';

export class InMemoryChurchsRepository implements ChurchsRepository {
  public churchs: Church[] = [];

  async create(church: Church) {
    this.churchs.push(church);
  }
}
