export default function (url: string): object {
  const urlObj = new URL(url)
  const searchParams = urlObj.searchParams
  const params = {}
  searchParams.forEach((val, key) => {
    params[key] = val
  })
  return params
}
