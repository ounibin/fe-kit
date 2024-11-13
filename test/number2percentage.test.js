import { expect, test } from 'vitest'
import { number2percentage } from '../src/number2percentage'

test('number2percentage', () => {
  expect(number2percentage(0.99, 0)).toBe('99%')
  expect(number2percentage(0.99, 1)).toBe('99.0%')
  expect(number2percentage(0.99, 2)).toBe('99.00%')
})