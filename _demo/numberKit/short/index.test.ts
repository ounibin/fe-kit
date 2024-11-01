import { expect, test } from 'vitest'
import numberKit from '../index'

test('short', () => {
  expect(numberKit.short(9999)).toBe('9999')
  expect(numberKit.short(10000)).toBe('1万')
  expect(numberKit.short(11200)).toBe('1.1万')
  expect(numberKit.short(1001400)).toBe('100.1万')
  expect(numberKit.short(1001500)).toBe('100.2万')

  expect(numberKit.short(-9999)).toBe('-9999')
  expect(numberKit.short(-10000)).toBe('-1万')
  expect(numberKit.short(-11400)).toBe('-1.1万')
  expect(numberKit.short(-11500)).toBe('-1.1万')
  expect(numberKit.short(-11600)).toBe('-1.2万')
  expect(numberKit.short(-1001002)).toBe('-100.1万')

})