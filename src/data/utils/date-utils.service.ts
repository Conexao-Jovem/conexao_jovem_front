import { Injectable } from '@angular/core';
import { Capitalization, MonthConverterOptions, MonthFormat } from './@types';

/**
 * Serviço utilitário para manipulação e formatação de datas.
 * Este serviço fornece métodos para converter números em nomes de meses,
 * formatar datas, verificar anos bissextos e muito mais.
 *
 * @example
 * // Exemplo de uso:
 * const dateUtils = new DateUtilsService();
 * const monthName = dateUtils.getMonthName(5, { format: 'long', capitalization: 'uppercase' });
 * console.log(monthName); // "MAIO"
 */
@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  private readonly MONTHS = {
    long: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    short: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
  } as const;

  private monthNameCache = new Map<string, string>();

  /**
   * Converte um número em nome do mês.
   *
   * @param {number} month - O número do mês (0-11 ou 1-12, dependendo de `startFromOne`).
   * @param {MonthConverterOptions} [options={}] - Opções para formatação do nome do mês.
   * @param {MonthFormat} [options.format='long'] - O formato do nome do mês ('long', 'short', 'narrow').
   * @param {Capitalization} [options.capitalization='default'] - A capitalização do nome do mês ('default', 'lowercase', 'uppercase').
   * @param {boolean} [options.startFromOne=false] - Se o número do mês começa de 1 (true) ou de 0 (false).
   * @returns {string} O nome do mês formatado de acordo com as opções.
   * @throws {Error} Se o número do mês for inválido.
   *
   * @example
   * // Retorna "MAIO"
   * const monthName = dateUtils.getMonthName(4, { format: 'long', capitalization: 'uppercase' });
   */
  getMonthName(month: number, options: MonthConverterOptions = {}): string {
    const { format = 'long', capitalization = 'default', startFromOne = false } = options;

    const monthIndex = startFromOne ? month - 1 : month;

    if (!this.isValidMonthIndex(monthIndex)) {
      throw new Error(`Mês inválido. Por favor, forneça um número ${startFromOne ? 'entre 1 e 12' : 'entre 0 e 11'}.`);
    }

    return this.formatMonthName(monthIndex, format, capitalization);
  }

  /**
   * Versão com cache do `getMonthName` para melhor performance.
   *
   * @param {number} month - O número do mês (0-11 ou 1-12, dependendo de `startFromOne`).
   * @param {MonthConverterOptions} [options={}] - Opções para formatação do nome do mês.
   * @returns {string} O nome do mês formatado de acordo com as opções.
   *
   * @example
   * // Retorna "MAIO" (usando cache)
   * const monthName = dateUtils.getCachedMonthName(4, { format: 'long', capitalization: 'uppercase' });
   */
  getCachedMonthName(month: number, options: MonthConverterOptions = {}): string {
    const cacheKey = `${month}-${JSON.stringify(options)}`;

    if (!this.monthNameCache.has(cacheKey)) {
      this.monthNameCache.set(cacheKey, this.getMonthName(month, options));
    }

    return this.monthNameCache.get(cacheKey)!;
  }

  /**
   * Limpa o cache de nomes de meses.
   *
   * @example
   * // Limpa o cache de nomes de meses
   * dateUtils.clearMonthNameCache();
   */
  clearMonthNameCache(): void {
    this.monthNameCache.clear();
  }

  /**
   * Verifica se o índice do mês é válido.
   *
   * @private
   * @param {number} index - O índice do mês a ser validado.
   * @returns {boolean} `true` se o índice for válido, `false` caso contrário.
   */
  private isValidMonthIndex(index: number): boolean {
    return Number.isInteger(index) && index >= 0 && index <= 11;
  }

  /**
   * Formata o nome do mês de acordo com as opções especificadas.
   *
   * @private
   * @param {number} monthIndex - O índice do mês (0-11).
   * @param {MonthFormat} format - O formato do nome do mês ('long', 'short', 'narrow').
   * @param {Capitalization} capitalization - A capitalização do nome do mês ('default', 'lowercase', 'uppercase').
   * @returns {string} O nome do mês formatado.
   */
  private formatMonthName(monthIndex: number, format: MonthFormat, capitalization: Capitalization): string {
    const monthName = this.MONTHS[format][monthIndex];

    switch (capitalization) {
      case 'lowercase':
        return monthName.toLowerCase();
      case 'uppercase':
        return monthName.toUpperCase();
      default:
        return monthName.charAt(0).toUpperCase() + monthName.slice(1);
    }
  }

  /**
   * Retorna o último dia do mês.
   *
   * @param {number} year - O ano.
   * @param {number} month - O mês (0-11).
   * @returns {number} O último dia do mês.
   *
   * @example
   * // Retorna 31 (último dia de janeiro de 2023)
   * const lastDay = dateUtils.getLastDayOfMonth(2023, 0);
   */
  getLastDayOfMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  /**
   * Verifica se o ano é bissexto.
   *
   * @param {number} year - O ano a ser verificado.
   * @returns {boolean} `true` se o ano for bissexto, `false` caso contrário.
   *
   * @example
   * // Retorna true (2024 é bissexto)
   * const isLeap = dateUtils.isLeapYear(2024);
   */
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Formata uma data no padrão brasileiro (dd/MM/yyyy).
   *
   * @param {Date} date - A data a ser formatada.
   * @returns {string} A data formatada no padrão brasileiro.
   *
   * @example
   * // Retorna "01/01/2023"
   * const formattedDate = dateUtils.formatDateToBR(new Date(2023, 0, 1));
   */
  formatDateToBR(date: Date): string {
    return date.toLocaleDateString('pt-BR');
  }
}
