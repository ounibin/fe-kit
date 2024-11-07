import { expect, test } from 'vitest'
import { setUrlParams } from './index'

test('setUrlParams', () => {
  expect(setUrlParams('https://www.xxx.com', { index: 2 })).toBe('https://www.xxx.com?index=2')
  expect(setUrlParams('https://www.xxx.com', { index: 2, name: 'name1' })).toBe('https://www.xxx.com?index=2&name=name1')
  expect(setUrlParams('https://www.xxx.com?index=1', { index: 2, name: 'name1' })).toBe('https://www.xxx.com?index=2&name=name1')
})