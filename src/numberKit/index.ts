enum FormatType {
  DECIMAL = 'decimal',
  PERCENT = 'percent'
}

function format(num: number, formatType: FormatType = FormatType.DECIMAL, decimal = 2): string {
  return num.toLocaleString(undefined, {
    style: formatType,
    useGrouping: true,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  })
}

function formatPrice(num: number, decimal = 2): string {
  return format(num, FormatType.DECIMAL, decimal)
}

function formatPercent(num: number, decimal = 2): string {
  return format(num, FormatType.DECIMAL, decimal)
}


enum LangType {
  CN = 'cn',
  EN = 'en',
}
function formatUnit(num: number, lang: LangType = LangType.CN): string {
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

export default {
  formatPrice,
  formatPercent,
  formatUnit
}