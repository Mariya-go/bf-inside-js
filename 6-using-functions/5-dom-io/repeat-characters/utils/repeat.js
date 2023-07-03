export const repeat = (text = '', repetition = 0) => {
  let repeated = '';
  for (const char of text) {
    repeated += char.repeat(repetition);
  }
  return repeated;
};


