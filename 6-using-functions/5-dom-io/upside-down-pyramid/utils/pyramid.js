export const pyramid = (text = '') => {
  let pyramided = '';
  for (let level = 0; level < text.length; level++) {
    pyramided += text.slice(level) + '\n';
  }
  return pyramided;
};

