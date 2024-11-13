export function setUrlParam(
  url: string,
  name: string,
  value: number | string,
): string {
  const u = new URL(url)
  const val = value ? String(value) : ""
  u.searchParams.set(name, val)
  const newUrl = u.origin + u.search
  return newUrl
}
