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

  describe('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayById(array, ['c']);
    });

    bench('map', () => {
      sortArrayById.map(array, ['c']);
    });
  });

  describe('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayById(array, ['b', 'c', 'a', 'd']);
    });

    bench('map', () => {
      sortArrayById.map(array, ['b', 'c', 'a', 'd']);
    });
  });
})
