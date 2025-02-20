export class CreateUserDto {
  /**
   * Nome completo do usuário.
   * @type {string}
   */
  name!: string;

  /**
   * Endereço de e-mail do usuário.
   * @type {string}
   */
  email!: string;

  /**
   * Identificador do ministério ao qual o usuário está associado.
   * @type {number}
   */
  ministeryID?: string;

  /**
   * Senha do usuário (armazenada de forma segura, como hash).
   * @type {string}
   */
  password!: string;

  /**
   * URL da imagem de perfil do usuário.
   * @type {string}
   */
  imgUrl!: string;
}
