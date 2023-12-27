import { Church } from '../entities/church';

export interface ChurchsRepository {
  create(church: Church): Promise<void>;
}
