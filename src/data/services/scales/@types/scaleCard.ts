import { ScaleStatus } from '../../../@types/scaleStatus.enum';
import { Ministery } from '../../ministery/@types/find.dto';
import { User } from '../../user/@types/find.dto';

/**
 * Representa uma escala no sistema.
 */
export class ScaleCard {
  /**
   * Data da escala.
   * @type {Date}
   */
  date!: string;

  /**
   * ministério associado à escala.
   * @type {Ministery}
   */
  ministery!: Ministery;

  /**
   * Identificador único da escala.
   * @type {string}
   */
  id!: string;

  /**
   * Lista dos membros associados à escala.
   * @type {User[]}
   */
  members!: User[];

  /**
   * Status atual da escala.
   * @type {ScaleStatus}
   */
  status!: ScaleStatus;
}
