// #todo

/**
 *
 */
// export const keepType = (things = [], type = '') => {
//   return things.filter((thing) => {
//     return typeof thing === type;
//   });
// };

export const keepType = (things = [], type = '') =>
  things.filter((thing) => typeof thing === type);
