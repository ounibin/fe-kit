export function setUrlParams(url: string, query: Object): string {
  const u = new URL(url)
  for (const key in query) {
    u.searchParams.set(key, query[key])
  }
  const newUrl = u.origin + u.search
  return newUrl
}
