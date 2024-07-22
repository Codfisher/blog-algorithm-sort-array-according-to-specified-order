import { bench, describe, expect, it } from 'vitest'
import { sortArrayByOrder } from './util.js'

describe('sortArrayByOrder', () => {
  describe('應依照順序排序', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayByOrder(array, 'value', ['a', 'c', 'b']);
    });

    bench('map', () => {
      sortArrayByOrder.map(array, 'value', ['a', 'c', 'b']);
    });
  });

  describe('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayByOrder(array, 'value', ['c']);
    });

    bench('map', () => {
      sortArrayByOrder.map(array, 'value', ['c']);
    });
  });

  describe('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]

    bench('original', () => {
      sortArrayByOrder(array, 'value', ['b', 'c', 'a', 'd']);
    });

    bench('map', () => {
      sortArrayByOrder.map(array, 'value', ['b', 'c', 'a', 'd']);
    });
  });
})
