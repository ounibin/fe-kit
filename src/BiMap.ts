/**
 * BiMap 类用于实现双向映射，即可以通过键找到值，也可以通过值找到键。
 * 它维护两个内部 Map 对象，一个用于正向映射（键到值），另一个用于反向映射（值到键）。
 */
export class BiMap {
  public forwardObj: Map<string, unknown>
  private reverseObj: Map<unknown, string>

  constructor(obj: Record<string, any>) {
    this.forwardObj = new Map()
    this.reverseObj = new Map()
    for (const key in obj) {
      const val = obj[key]
      this.forwardObj.set(key, val)
      this.reverseObj.set(val, key)
    }
  }

  public getValue(key: string) {
    return this.forwardObj.get(key)
  }

  public getKey(value: unknown) {
    return this.reverseObj.get(value)
  }
}
