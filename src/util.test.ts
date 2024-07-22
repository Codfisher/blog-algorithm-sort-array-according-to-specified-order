import { describe, expect, it } from 'vitest'
import { sortArrayByOrder } from './util.js'

describe('sortArrayByOrder', () => {
  it('應依照順序排序', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['a', 'c', 'b']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { value: 'a' },
      { value: 'c' },
      { value: 'b' },
    ])
  });

  it('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['c']);

    expect(result).toHaveLength(array.length)
    expect(result[0]).toEqual({ value: 'c' })
  });

  it('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['b', 'c', 'a', 'd']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { value: 'b' },
      { value: 'c' },
      { value: 'a' },
    ])
  });
})


describe.each([
  sortArrayByOrder.map,
])('測試 sortArrayByOrder 所有變體', () => {
  it('應依照順序排序', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['a', 'c', 'b']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { value: 'a' },
      { value: 'c' },
      { value: 'b' },
    ])
  });

  it('order 缺少元素，缺少的元素會排在最後', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['c']);

    expect(result).toHaveLength(array.length)
    expect(result[0]).toEqual({ value: 'c' })
  });

  it('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ value: string }> = [
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]
    const result = sortArrayByOrder(array, 'value', ['b', 'c', 'a', 'd']);

    expect(result).toHaveLength(array.length)
    expect(result).toEqual([
      { value: 'b' },
      { value: 'c' },
      { value: 'a' },
    ])
  });
})