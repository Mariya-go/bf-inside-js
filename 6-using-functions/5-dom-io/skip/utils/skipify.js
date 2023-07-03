export const skipIt = (text = '', number = 0) => {
  let skipedText = '';
  for (let i = 0; i < text.length; i = i + number) {
    skipedText += text[i]
  }
  return skipedText;
};


