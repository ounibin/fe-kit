export default function (url: string, key: string): string {
  const searchStr = url.split('?')[1]
  const searchParams = new URLSearchParams(searchStr)
  const res = searchParams.get(key) || ''
  return res
}
