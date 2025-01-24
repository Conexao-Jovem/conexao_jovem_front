import { User } from '../../user/@types/find.dto';

/**
 * DTO (Data Transfer Object) para a criação de um novo ministério.
 */
export class CreateMinisteryDto {
  /**
   * Nome do ministério.
   * @type {string}
   * @example "Ministério de Música"
   */
  name!: string;

  /**
   * Lista dos id dos membros associados ao ministério.
   * @type {string[]}
   * @example [{ id: 1}, { id: 2 }]
   */
  membersId!: string[];

  /**
   * Nome ou identificação do principal responsável pelo ministério.
   * @type {string}
   * @example "João Silva"
   */
  principal!: string;

  /**
   * URL da imagem associada ao ministério.
   * @type {string}
   * @example "https://example.com/ministery-image.jpg"
   */
  imgUrl!: string;
}
