import { describe, expect, it } from 'vitest'
import { sortArrayById } from './util.js'

/** 測試變體 */
describe.each([
  sortArrayById,
  sortArrayById.map,
])('sortArrayById', (func) => {
  it('應依照順序排序', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const orders = ['c', 'b', 'a'];
    const result = func(array, orders);

    expect(result).toHaveLength(orders.length)
    expect(result).toEqual([
      { id: 'c' },
      { id: 'b' },
      { id: 'a' },
    ])
  });

  it('order 缺少的元素會被忽略', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const orders = ['c'];
    const result = func(array, orders);

    expect(result).toHaveLength(orders.length)
    expect(result).toEqual([{ id: 'c' }])
  });

  it('order 包含額外元素不會有任何影響', () => {
    const array: Array<{ id: string }> = [
      { id: 'a' },
      { id: 'b' },
      { id: 'c' },
    ]
    const orders = ['c', 'b', 'a', 'd'];
    const result = func(array, orders);

    expect(result).toHaveLength(orders.length - 1)
    expect(result).toEqual([
      { id: 'c' },
      { id: 'b' },
      { id: 'a' },
    ])
  });
})