'use strict';

function swap(arr: number[], i: number, j: number): void {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


function partition(array: number[], lo: number, hi: number): number {
  swap(array, Math.floor(Math.random() * (hi - lo)) + lo, hi);

  let divider = lo;

  for (let i = lo; i < hi; i++) {
    if (array[i] >= array[hi]) {
      continue;
    }

    swap(array, i, divider);
    divider++;
  }

  swap(array, divider, hi);

  return divider;
}


function quicksortWalker(array: number[], lo: number, hi: number): number[] {
  while (lo < hi) {
    const divider = partition(array, lo, hi);

    if (divider - lo < hi - divider) {
      quicksortWalker(array, lo, divider - 1);
      lo = divider + 1;
    } else {
      quicksortWalker(array, divider + 1, hi);
      hi = divider - 1;
    }
  }

  return array;
}


/**
 * Quicksort
 * @param  {number[]} array
 *
 * @return {number[]}
 */
export default function quicksort(array: number[]): number[] {
  return quicksortWalker(array, 0, array.length - 1);
}
