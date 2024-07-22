import { describe, expect, it } from 'vitest'
import { sortArrayById } from './util.js'

describe('sortArrayById', () => {
  it('應依照順序排序', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['a', 'c', 'b']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { id: 'a' },
      { id: 'c' },
      { id: 'b' },
    ])
  });

  it('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['c']);

    expect(result).toHaveLength(array.length)
    expect(result[0]).toEqual({ id: 'c' })
  });

  it('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['b', 'c', 'a', 'd']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { id: 'b' },
      { id: 'c' },
      { id: 'a' },
    ])
  });
})


describe.each([
  sortArrayById.map,
])('測試 sortArrayById 所有變體', () => {
  it('應依照順序排序', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['a', 'c', 'b']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { id: 'a' },
      { id: 'c' },
      { id: 'b' },
    ])
  });

  it('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['c']);

    expect(result).toHaveLength(array.length)
    expect(result[0]).toEqual({ id: 'c' })
  });

  it('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const result = sortArrayById(array, ['b', 'c', 'a', 'd']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { id: 'b' },
      { id: 'c' },
      { id: 'a' },
    ])
  });
})