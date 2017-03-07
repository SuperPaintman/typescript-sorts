'use strict';

/**
 * Bubble sort
 * @param  {number[]} array
 *
 * @return {number[]}
 */
export default function bubbleSort(array: number[]): number[] {
  const len = array.length;

  let swapped = false;
  do {
    swapped = false
    for (let i = 0; i < len - 1; i++) {
      if (array[i] <= array[i + 1]) {
        continue;
      }

      // swap
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      swapped = true;
    }
  } while (swapped);

  return array;
}
