import { describe, expect, it } from 'vitest'

import * as exports from '../src'

describe('exports', () => {
  it('default', () => {
    expect(exports.default).not.toBeUndefined()
  })
  it('remarkCustomEmoji', () => {
    expect(exports.rehypeCustomEmoji).not.toBeUndefined()
  })
  it('fetcher', () => {
    expect(exports.all).not.toBeUndefined()
    expect(exports.category).not.toBeUndefined()
    expect(exports.one).not.toBeUndefined()
    expect(exports.oneMisskey).not.toBeUndefined()
  })
})
