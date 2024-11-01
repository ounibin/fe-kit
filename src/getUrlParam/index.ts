export function getUrlParam(url: string, name: string): string {
  const searchStr = url.split('?')[1]
  const searchParams = new URLSearchParams(searchStr)
  const res = searchParams.get(name) || ''
  return res
}
