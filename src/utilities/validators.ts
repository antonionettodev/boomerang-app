import errorMessages from './errorMessages';
import { removePunctuationMarks } from './formatters';
import regexPatterns from './regexPatterns';

export function validateCPF(cpf: string): string | true {
  return cpf
    ? regexPatterns.CPF.test(removePunctuationMarks(cpf)) || errorMessages.INVALID_CPF
    : true;
};
