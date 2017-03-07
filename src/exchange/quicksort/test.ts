'use strict';
/** Imports */
import '../../test/helper';

import * as chai    from 'chai';


import quicksort    from '.';


/** Init */
const { expect } = chai;

describe('Exchange sorts', function () {
  describe('Quicksort', function () {
    it('should work', function () {
      expect(quicksort([6, 1, 3, 2, 4, 5])).to.eql([1, 2, 3, 4, 5, 6]);
    });

    it('should sort array of numbers', function () {
      expect(quicksort([])).to.eql([]);
      expect(quicksort([7])).to.eql([7]);
      expect(quicksort([1, 2, 3])).to.eql([1, 2, 3]);
      expect(quicksort([1, 3, 2, 2])).to.eql([1, 2, 2, 3]);
      expect(quicksort([1, 2, 1, 2])).to.eql([1, 1, 2, 2]);
      expect(quicksort([6, 1, 3, 2, 4, 5])).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
});
