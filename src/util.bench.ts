import { bench, describe, expect, it } from 'vitest'
import { sortArrayById } from './util.js'

describe('sortArrayById', () => {
  describe('應依照順序排序', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayById(array, ['a', 'c', 'b']);
    });

    bench('map', () => {
      sortArrayById.map(array, ['a', 'c', 'b']);
    });
  });
})
