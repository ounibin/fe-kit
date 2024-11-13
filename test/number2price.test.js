import { expect, test } from 'vitest'
import { number2price } from '../src/number2price'

test('number2price', () => {
  expect(number2price(1.5, 0)).toBe('2')
  expect(number2price(1.2, 0)).toBe('1')
  expect(number2price(1.2, 1)).toBe('1.2')
  expect(number2price(1.2, 2)).toBe('1.20')
})