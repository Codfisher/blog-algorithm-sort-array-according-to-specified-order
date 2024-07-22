export function sortArrayByOrder<
  Item,
  Field extends (keyof Item)
>(
  array: Item[],
  field: Field,
  orderList: Array<Item[Field]>
) {
  return [...array].sort((a, b) => {
    const aIndex = orderList.indexOf(a[field]);
    const bIndex = orderList.indexOf(b[field]);

    // 不存在的項目要被往後排
    if (aIndex < 0) return 1;
    if (bIndex < 0) return -1;

    return aIndex - bIndex;
  });
}

/** 各種實作變體 */
export namespace sortArrayByOrder {
  /** 使用 map 實作 */
  export function map<
    Item,
    Field extends (keyof Item)
  >(
    array: Item[],
    field: Field,
    orderList: Array<Item[Field]>
  ) {
    // 使用 Map 儲存索引
    const orderMap = new Map<Item[Field], number>();
    orderList.forEach((value, index) => {
      orderMap.set(value, index);
    });

    return [...array].sort((a, b) => {
      const aIndex = orderMap.has(a[field]) ? orderMap.get(a[field])! : -1;
      const bIndex = orderMap.has(b[field]) ? orderMap.get(b[field])! : -1;

      // 不存在的項目要被往後排
      if (aIndex < 0) return 1;
      if (bIndex < 0) return -1;

      return aIndex - bIndex;
    });
  }
}