import { CustomEmoji, Instance, MisskeyCustomEmoji } from './types'

export const all = async (instance: Instance) => {
  try {
    return await fetch(new URL('/api/v1/custom_emojis', instance), {
      headers: { accept: 'application/json' },
    }).then(res => res.json()) as CustomEmoji[]
  }
  catch (error) {
    console.error(error)
    return []
  }
}

export const category = async (instance: Instance, category: CustomEmoji['category']) => (await all(instance))
  // eslint-disable-next-line unicorn/no-await-expression-member
  .filter(emoji => emoji.category === category)

export const one = async (instance: Instance, shortcode: CustomEmoji['shortcode']) => (await all(instance))
  // eslint-disable-next-line unicorn/no-await-expression-member
  .find(emoji => emoji.shortcode === shortcode)

export const oneMisskey = async (instance: Instance, shortcode: CustomEmoji['shortcode']) => {
  try {
    return await fetch(new URL(`/emojis/${shortcode}`, instance), {
      headers: { accept: 'application/activity+json' },
    })
      .then(res => res.json())
      .then((emoji: MisskeyCustomEmoji) => ({
        shortcode: emoji.name.slice(1, -1), // :shortcode: => shortcode
        url: emoji.icon.url,
      }) as CustomEmoji)
  }
  catch (error) {
    console.error(error)
    return
  }
}
