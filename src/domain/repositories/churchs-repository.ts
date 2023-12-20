import { Church } from '../entities/church';

export interface ChurchsRepository {
  create(question: Church): Promise<void>;
}
