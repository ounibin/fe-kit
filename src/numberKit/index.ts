enum FormatType {
  DECIMAL = 'decimal',
  PERCENT = 'percent'
}

function format(num: number, formatType: FormatType = FormatType.DECIMAL, decimal = 2) {
  return num.toLocaleString(undefined, {
    style: formatType,
    useGrouping: true,
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  })
}

export default {
  format
}