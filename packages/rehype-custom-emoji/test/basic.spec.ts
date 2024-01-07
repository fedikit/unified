import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { describe, expect, it } from 'vitest'

import { h, rehypeCustomEmoji } from '../src'

describe('basic', () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeCustomEmoji, {
      emojis: [{
        shortcode: 'custom_emoji',
        url: 'https://example.com/custom_emoji.png',
      }],
      format: (emoji) => h('img', {
        alt: `:${emoji.shortcode}:`,
        src: emoji.url,
      }),
    })
    .use(rehypeStringify)

  it('basic', async () => {
    const file = await processor.process('Hello, :custom_emoji:!')

    expect(file.value).toBe('<p>Hello, <picture><source media="(prefers-reduced-motion: no-preference)" srcset="https://example.com/custom_emoji.png"><img alt=":custom_emoji:" src="https://example.com/custom_emoji.png" style="aspect-ratio:1/1;height:1em;vertical-align:text-top" title=":custom_emoji:"></picture>!</p>')
  })

  it('custom format', async () => {
    const file = await processor.process('Hello, :custom_emoji:!')

    expect(file.value).toBe('<p>Hello, <img alt=":custom_emoji:" src="https://example.com/custom_emoji.png">!</p>')
  })
})
