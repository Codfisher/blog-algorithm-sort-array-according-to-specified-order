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

    bench('object', () => {
      sortArrayById.object(array, ['a', 'c', 'b']);
    });
  });

  describe('10 筆資料', () => {
    const array: Array<{ id: string }> = [];
    const ids: string[] = [];

    for (let i = 0; i < 10; i++) {
      const id = `id${i}`;
      array.push({ id });
      ids.push(id);
    }

    // 打亂順序
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    bench('original', () => {
      sortArrayById(array, ids);
    });

    bench('map', () => {
      sortArrayById.map(array, ids);
    });

    bench('object', () => {
      sortArrayById.object(array, ids);
    });
  });

  describe('100 筆資料', () => {
    const array: Array<{ id: string }> = [];
    const ids: string[] = [];

    for (let i = 0; i < 100; i++) {
      const id = `id${i}`;
      array.push({ id });
      ids.push(id);
    }

    // 打亂順序
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }

    bench('original', () => {
      sortArrayById(array, ids);
    });

    bench('map', () => {
      sortArrayById.map(array, ids);
    });

    bench('object', () => {
      sortArrayById.object(array, ids);
    });
  });
})
