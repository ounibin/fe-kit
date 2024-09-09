import { expect, test } from 'vitest'
import { number2price } from '../src/index'

test('number2price', () => {
  expect(number2price(1234567.89)).toBe("1,234,567.89")
})