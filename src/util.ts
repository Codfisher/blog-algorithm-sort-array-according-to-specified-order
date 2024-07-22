export function sortArrayById<
  Item extends Record<string, string>
>(
  array: Item[],
  idOrders: string[],
  idFiled: string = 'id',
) {
  return [...array].sort((a, b) => {
    const aIndex = idOrders.indexOf(a[idFiled]);
    const bIndex = idOrders.indexOf(b[idFiled]);

    // 不存在的項目要被往後排
    if (aIndex < 0) return 1;
    if (bIndex < 0) return -1;

    return aIndex - bIndex;
  });
}

/** 各種實作變體 */
export namespace sortArrayById {
  /** 使用 map 實作 */
  export function map<
    Item extends Record<string, string>
  >(
    array: Item[],
    idOrders: string[],
    idFiled: string = 'id',
  ) {
    const itemMap = new Map(array.map((item) => [item[idFiled], item]));

    return idOrders
      .map((id) => itemMap.get(id))
      .filter((item) => item !== undefined);
  }

  /** 使用 object 實作 */
  export function object<
    Item extends Record<string, string>
  >(
    array: Item[],
    idOrders: string[],
    idFiled: string = 'id',
  ) {
    const itemMap: Record<string, any> = {};
    array.forEach((item) => itemMap[item[idFiled]] = item)

    return idOrders
      .map((id) => itemMap[id])
      .filter((item) => item !== undefined);
  }
}