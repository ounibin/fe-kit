import { expect, test } from 'vitest'
import numberKit from './index'

test('numberKit.formatUnit()', () => {
  expect(numberKit.formatUnit(9999)).toBe('9999')
  expect(numberKit.formatUnit(10000)).toBe('1万')
  expect(numberKit.formatUnit(11200)).toBe('1.1万')
  expect(numberKit.formatUnit(1001400)).toBe('100.1万')
  expect(numberKit.formatUnit(1001500)).toBe('100.2万')

  expect(numberKit.formatUnit(-9999)).toBe('-9999')
  expect(numberKit.formatUnit(-10000)).toBe('-1万')
  expect(numberKit.formatUnit(-11400)).toBe('-1.1万')
  expect(numberKit.formatUnit(-11500)).toBe('-1.1万')
  expect(numberKit.formatUnit(-11600)).toBe('-1.2万')
  expect(numberKit.formatUnit(-1001002)).toBe('-100.1万')

})