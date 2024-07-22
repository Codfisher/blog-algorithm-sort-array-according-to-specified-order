import { bench, describe, expect, it } from 'vitest'
import { sortArrayById } from './util.js'

describe('sortArrayById', () => {
  describe('3 筆資料', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]

    bench('original', () => {
      sortArrayById(array, ['a', 'c', 'b']);
    });

    bench('map', () => {
      sortArrayById.map(array, ['a', 'c', 'b']);
    });
  });

  describe('100 筆資料', () => {
    const largeArray: Array<{ id: string }> = [];
    const largeIds: string[] = [];

    for (let i = 0; i < 100; i++) {
      const id = `id${i}`;
      largeArray.push({ id });
      largeIds.push(id);
    }

    // 打亂 largeIds 順序
    for (let i = largeIds.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [largeIds[i], largeIds[j]] = [largeIds[j], largeIds[i]];
    }

    bench('original', () => {
      sortArrayById(largeArray, largeIds);
    });

    bench('map', () => {
      sortArrayById.map(largeArray, largeIds);
    });
  });
})
