import { Injectable } from '@angular/core';
import { ValidatorService } from '../validator/validator.service';

/**
 * Classe utilitária para transformar valores em formatos específicos.
 * Contém métodos estáticos para conversão de dados
 */
@Injectable({
  providedIn: 'root'
})
export class DataParserService {
  constructor() {}

  /**
   * Converte um número para uma string.
   * Retorna `null` se o número for `null` ou `undefined`.
   *
   * @param {number} num - O número a ser convertido.
   * @returns {string | null} - O número como string ou `null`.
   *
   * @example
   * const num = 42;
   * const numString = ValueTransformers.numberToString(num); // "42"
   */
  static numberToString(num: number): string | null {
    return num?.toString() ?? null;
  }

  /**
   * Converte uma string em número. Se a string representar uma medida monetária,
   * ela será convertida corretamente para número.
   *
   * @param {string} value - A string a ser convertida.
   * @returns {number} O número resultante da conversão.
   * @throws {Error} Se a string não puder ser convertida em número.
   */
  static stringToNumber(value: string): number {
    if (!ValidatorService.required(value)) {
      throw new Error('O valor fornecido é inválido.');
    }

    if (ValidatorService.isBrazilianCurrency(value)) {
      return DataParserService.convertBrazilianCurrencyToNumber(value);
    }

    if (ValidatorService.isUSCurrency(value)) {
      return DataParserService.convertUSCurrencyToNumber(value);
    }

    return DataParserService.parseNumber(value);
  }

  /**
   * Converte uma string de moeda brasileira para número.
   *
   * @param {string} value - A string em formato "R$ 1.000,50".
   * @returns {number} O valor numérico correspondente.
   */
  static convertBrazilianCurrencyToNumber(value: string): number {
    return parseFloat(value.replace('R$', '').replace(/\./g, '').replace(',', '.'));
  }

  /**
   * Converte uma string de moeda americana para número.
   *
   * @param {string} value - A string em formato "$ 1,000.50".
   * @returns {number} O valor numérico correspondente.
   */
  static convertUSCurrencyToNumber(value: string): number {
    return parseFloat(value.replace('$', '').replace(/,/g, ''));
  }

  /**
   * Converte uma string numérica simples para número.
   *
   * @param {string} value - A string numérica.
   * @returns {number} O valor numérico correspondente.
   * @throws {Error} Se a string não for um número válido.
   */
  static parseNumber(value: string): number {
    const number = parseFloat(value);
    if (isNaN(number)) {
      throw new Error(`A string "${value}" não pode ser convertida em número.`);
    }
    return number;
  }
}
