export class BiMap {
  public forwardObj: Map<string, unknown>
  private reverseObj: Map<unknown, string>

  constructor(obj: object) {
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