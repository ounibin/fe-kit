
function parse(url: string) {
  const urlObj = new URL(url)
  const searchParams = urlObj.searchParams
  const params = {}
  searchParams.forEach((val, key) => {
    params[key] = val
  })
  return params
}

// 设置url中某个key的值
function set(url: string, key: string, val: string) {
  const urlObj = new URL(url)
  const searchParams = urlObj.searchParams
  searchParams.set(key, val)
  const updatedUrl = urlObj.toString()
  return updatedUrl
}

function get(url: string, key: string) {
  const searchParams = parse(url)
  return searchParams[key]
}

export default {
  parse,
  set,
  get
}