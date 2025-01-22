/**
 * Define os formatos possíveis para o nome do mês.
 *
 * - `long`: Nome completo do mês (ex: "janeiro").
 * - `short`: Nome abreviado do mês (ex: "jan").
 * - `narrow`: Representação mais curta do mês (ex: "J").
 */
export type MonthFormat = 'long' | 'short' | 'narrow';

/**
 * Define as opções de capitalização para o nome do mês.
 *
 * - `default`: A primeira letra do nome do mês é maiúscula (ex: "Janeiro").
 * - `lowercase`: Todo o nome do mês é em letras minúsculas (ex: "janeiro").
 * - `uppercase`: Todo o nome do mês é em letras maiúsculas (ex: "JANEIRO").
 */
export type Capitalization = 'default' | 'lowercase' | 'uppercase';

/**
 * Opções para a conversão de um número em nome do mês.
 *
 * @example
 * // Exemplo de uso:
 * const options: MonthConverterOptions = {
 *   format: 'long',
 *   capitalization: 'uppercase',
 *   startFromOne: true
 * };
 */
export interface MonthConverterOptions {
  /**
   * O formato do nome do mês a ser retornado.
   *
   * @default 'long'
   */
  format?: MonthFormat;

  /**
   * A capitalização do nome do mês.
   *
   * @default 'default'
   */
  capitalization?: Capitalization;

  /**
   * Define se o número do mês começa de 1 (true) ou de 0 (false).
   *
   * @default false
   */
  startFromOne?: boolean;
}
