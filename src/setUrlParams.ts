/**
 * 批量设置URL的查询参数
 *
 * @param url 原始URL字符串，不包含查询参数
 * @param query 包含查询参数的键值对对象，键为参数名，值为参数值
 * @returns 返回包含查询参数的新URL字符串
 */

export function setUrlParams(url: string, query: Record<string, any>): string {
  const u = new URL(url)
  for (const key in query) {
    u.searchParams.set(key, query[key])
  }
  const newUrl = u.origin + u.search
  return newUrl
}
