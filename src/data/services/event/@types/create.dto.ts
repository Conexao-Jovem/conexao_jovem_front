import { Address } from '../../../@types/address';
import { Ticket } from '../../../@types/ticket.entity';

export class CreateEventDto {
  /**
   * Data de início do evento.
   * @type {Date}
   */
  initialDate!: Date;

  /**
   * Data de término do evento.
   * @type {Date}
   */
  endDate!: Date;

  /**
   * Número máximo de participantes permitidos no evento.
   * @type {number}
   */
  maxMembers!: number;

  /**
   * Lista de ingressos disponíveis para o evento.
   * @type {Ticket[]}
   */
  tickets!: Ticket[];

  /**
   * Endereço onde o evento será realizado.
   * @type {Address}
   */
  address!: Address;

  /**
   * Descrição detalhada do evento.
   * @type {string}
   */
  description!: string;

  /**
   * Título ou nome do evento.
   * @type {string}
   */
  title!: string;

  /**
   * Identificador do proprietário ou criador do evento.
   * @type {number}
   */
  ownerId!: number;
}
