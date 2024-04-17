
function parseParams(url: string): object {
  const urlObj = new URL(url)
  const searchParams = urlObj.searchParams
  const params = {}
  searchParams.forEach((val, key) => {
    params[key] = val
  })
  return params
}

// 设置url中某个key的值
function setParam(url: string, key: string, val: string | number): string {
  const urlArr = url.split('?')
  const urlPath = urlArr[0]
  const searchStr = urlArr[1]
  const searchParams = new URLSearchParams(searchStr)
  searchParams.set(key, String(val))
  const newUrl = `${urlPath}?${searchParams.toString()}`
  return newUrl
}

function getParam(url: string, key: string): string {
  const searchStr = url.split('?')[1]
  const searchParams = new URLSearchParams(searchStr)
  const res = searchParams.get(key) || ''
  return res
}

export default {
  parseParams,
  setParam,
  getParam
}