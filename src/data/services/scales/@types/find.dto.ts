import { ScaleStatus } from '../../../@types/scaleStatus.enum';
import { User } from '../../user/@types/find.dto';

/**
 * Representa uma escala no sistema.
 */
export class Scale {
  /**
   * Data da escala.
   * @type {Date}
   */
  date!: Date;

  /**
   * Identificador do ministério associado à escala.
   * @type {number}
   */
  ministeryID!: number;

  /**
   * Identificador único da escala.
   * @type {number}
   */
  id!: number;

  /**
   * Identificador público da escala (pode ser usado para fins de SEO ou URLs).
   * @type {string}
   */
  pid!: string;

  /**
   * Lista de ids dos membros associados à escala.
   * @type {string[]}
   */
  membersId!: string[];

  /**
   * Status atual da escala.
   * @type {ScaleStatus}
   */
  status!: ScaleStatus;
}
