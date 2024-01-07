import type { Element, Root } from 'hast'
import type { Plugin, Transformer } from 'unified'

import { findAndReplace } from 'hast-util-find-and-replace'
import { h } from 'hastscript'

import type { CustomEmoji } from './types'

export type RehypeCustomEmojiOptions = {
  emojis: (CustomEmoji | undefined)[]
  format?: (emoji: CustomEmoji) => Element
  match?: RegExp
}

export const rehypeCustomEmoji: Plugin<[RehypeCustomEmojiOptions], Root, Root> = (options): Transformer<Root, Root> => {
  const emojis = new Map<string, CustomEmoji>()
  const format = options.format ?? ((emoji) => h('picture', [
    h('source', {
      media: '(prefers-reduced-motion: no-preference)',
      srcset: emoji.url,
    }),
    h('img', {
      alt: `:${emoji.shortcode}:`,
      src: emoji.static_url ?? emoji.url,
      style: [
        'aspect-ratio:1/1',
        'height:1em',
        'vertical-align:text-top',
      ].join(';'),
      title: `:${emoji.shortcode}:`,
    }),
  ]))
  const match = options.match ?? /:([\w-]+):/g

  for (const emoji of options.emojis.filter(v => v !== undefined) as CustomEmoji[])
    emojis.set(emoji.shortcode, emoji)

  return (tree) => findAndReplace(tree, [
    match,
    (str: string) => {
      const shortcode = str.slice(1, -1)
      const emoji = emojis.get(shortcode)

      return emoji
        ? format(emoji)
        : false
    },
  ])
}
