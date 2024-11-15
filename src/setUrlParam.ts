/**
 * 单个设置URL的查询参数
 *
 * @param url 输入的URL字符串，将在此基础上进行修改
 * @param name 要设置的查询参数的名称
 * @param value 要设置的查询参数的值，可以是数字或字符串， 如果值为falsy（例如0、null、undefined或''）， 则设置为空字符串
 * @returns 返回修改后的URL字符串
 */
export function setUrlParam(
  url: string,
  name: string,
  value: number | string,
): string {
  const u = new URL(url)
  const val = value ? String(value) : ''
  u.searchParams.set(name, val)
  const newUrl = u.origin + u.search
  return newUrl
}
