import { expect, test } from 'vitest'
import numberKit from '../index'

test('formatPercent', () => {
  expect(numberKit.formatPercent(9999)).toBe('9999')

})