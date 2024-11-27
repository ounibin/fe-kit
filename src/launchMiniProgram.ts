/**
 * web页面中使用 明文URL Scheme 启动小程序
 *
 * 需要在MP平台->设置->隐私与安全->明文Scheme声明小程序路径。参考: https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html#%E6%98%8E%E6%96%87-URL-Scheme
 *
 * @param params
 * @param params.appId 小程序的appId，用于标识特定的小程序
 * @param params.path 小程序的启动路径，用于指定小程序启动时的页面
 * @param params.query 以对象形式传递给小程序的查询参数，用于传递额外信息给小程序的query
 */
export function launchMiniProgram(params: {
  appId: string
  path: string
  query: Record<string, any>
}): void {
  try {
    const { appId, path, query } = params
    const queryString = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    const encodeQueryString = encodeURIComponent(queryString)
    window.location.href = `weixin://dl/business/?appid=${appId}&path=${path}&query=${encodeQueryString}`
  } catch (error) {
    throw new Error('launchMiniProgram error')
  }
}
