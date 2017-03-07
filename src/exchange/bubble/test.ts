'use strict';
/** Imports */
import '../../test/helper';

import * as chai    from 'chai';


import bubbleSort   from '.';


/** Init */
const { expect } = chai;

describe('Exchange sorts', function () {
  describe('Bubble sort', function () {
    it('should work', function () {
      expect(bubbleSort([6, 1, 3, 2, 4, 5])).to.eql([1, 2, 3, 4, 5, 6]);
    });

    it('should sort array of numbers', function () {
      expect(bubbleSort([])).to.eql([]);
      expect(bubbleSort([7])).to.eql([7]);
      expect(bubbleSort([1, 2, 3])).to.eql([1, 2, 3]);
      expect(bubbleSort([1, 3, 2, 2])).to.eql([1, 2, 2, 3]);
      expect(bubbleSort([1, 2, 1, 2])).to.eql([1, 1, 2, 2]);
      expect(bubbleSort([6, 1, 3, 2, 4, 5])).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
});
