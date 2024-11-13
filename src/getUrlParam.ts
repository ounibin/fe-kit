/**
 * 
 * @param url 要获取参数的 url
 * @param name 指定参数名
 * @returns 指定参数名对应的值
 */
export function getUrlParam(url: string, name: string): string {
  const searchStr = url.split('?')[1]
  const searchParams = new URLSearchParams(searchStr)
  const res = searchParams.get(name) || ''
  return res
}
