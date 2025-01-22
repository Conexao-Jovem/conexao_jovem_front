import { ScaleStatus } from '../../../@types/scaleStatus.enum';
import { User } from '../../user/@types/find.dto';

export class CreateScaleDto {
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
   * Lista de membros associados à escala.
   * @type {User[]}
   */
  members!: User[];

  /**
   * Status atual da escala.
   * @type {ScaleStatus}
   */
  status!: ScaleStatus;
}
