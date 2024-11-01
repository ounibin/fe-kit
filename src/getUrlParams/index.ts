export function getUrlParams(url: string, name: string, value: any): string {
  const urlPath = url.split('?')[0]
  const searchStr = url.split('?')[1]
  const searchParams = new URLSearchParams(searchStr)
  searchParams.set(name, value)
  const newUrl = urlPath + '?' + searchParams.toString()
  return newUrl
}