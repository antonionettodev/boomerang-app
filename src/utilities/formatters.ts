import regexPatterns from './regexPatterns';

export function formatCPF(cpf: string): string {
  return cpf.replace(regexPatterns.CPF, '$1.$2.$3-$4');
};

export function removeNonAlphanumeric(text: string): string {
  return text.replace(regexPatterns.nonAlphanumeric, '');
};

export function removeNonAlphabetic(text: string): string {
  return text.replace(regexPatterns.nonAlphabetic, '');
};

export function removeNonNumeric(text: string): string {
  return text.replace(regexPatterns.nonNumeric, '');
};

export function removePunctuationMarks(text: string): string {
  return text.replace(regexPatterns.punctuationMarks, '');
};