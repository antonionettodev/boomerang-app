const regexPatterns = {
  CPF: /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
  nonAlphanumeric: /[^a-zA-Z0-9]/g,
  nonAlphabetic: /[^a-zA-Z]/g,
  nonNumeric: /[^0-9]/g,
  punctuationMarks: /[\s_()-./]/g,
};

export default regexPatterns;