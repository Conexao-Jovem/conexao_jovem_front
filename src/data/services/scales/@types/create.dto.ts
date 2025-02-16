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
   * Lista de ids dos membros associados à escala.
   * @type {string[]}
   */
  membersId?: string[];

  /**
   * Status atual da escala.
   * @type {ScaleStatus}
   */
  status?: ScaleStatus;
}
