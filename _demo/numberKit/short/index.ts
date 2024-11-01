enum LangType {
  CN = 'cn',
  EN = 'en',
}

export default function (num: number, lang: LangType = LangType.CN): string {
  const _num = Math.abs(num)
  if (_num >= 10000) {
    let unit = lang === 'cn' ? '万' : 'w'
    const _n = _num / 10000
    const formattedNum = (String(_n).indexOf('.') !== -1) ? _n.toFixed(1) : _n
    return `${num < 0 ? '-' : ''}${formattedNum}${unit}`
  } else {
    return num.toString()
  }
}