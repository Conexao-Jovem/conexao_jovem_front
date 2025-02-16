import { User } from '../../user/@types/find.dto';

/**
 * Representa um ministério no sistema.
 */
export class Ministery {
  /**
   * Identificador único do ministério.
   * @type {number}
   */
  id!: number;

  /**
   * Nome do ministério.
   * @type {string}
   */
  name!: string;

  /**
   * Lista de membros associados ao ministério.
   * @type {User[]}
   */
  membersId!: string[];

  /**
   * Nome ou identificação do principal responsável pelo ministério.
   * @type {string}
   */
  principalId!: string;

  /**
   * URL da imagem associada ao ministério.
   * @type {string}
   */
  imgUrl!: string;

  /**
   * Identificador público do ministério (pode ser usado para fins de SEO ou URLs).
   * @type {string}
   */
  pid!: string;
}
