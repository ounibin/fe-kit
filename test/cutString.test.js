import { expect, test, describe, it } from 'vitest'
import { cutString } from '../dist'

describe('cutString function', () => {
  it('should return an empty string if wordLimit is less than 1', () => {
    expect(cutString('Some long string', 0)).toBe('')
  })

  it('should return the original string if it is shorter than or equal to wordLimit', () => {
    expect(cutString('Short', 10)).toBe('Short')
  })

  it('should truncate the string and add an ellipsis if it is longer than wordLimit', () => {
    expect(cutString('This is a long string that needs to be cut', 10)).toBe(
      'This is a...',
    )
  })

  it('should not add an ellipsis if the string is exactly at wordLimit', () => {
    expect(cutString('1234567890', 10)).toBe('1234567890')
  })

  it('should handle strings that are much longer than wordLimit', () => {
    expect(
      cutString('Very long string that exceeds the limit significantly', 5),
    ).toBe('Very...')
  })

  it('should return the original string if wordLimit is greater than the string length', () => {
    expect(cutString('Small string', 20)).toBe('Small string')
  })
})
