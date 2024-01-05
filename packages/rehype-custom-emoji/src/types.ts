export type Instance = URL | string

/**
 * Represents a custom emoji.
 *
 * @see {@link https://docs.joinmastodon.org/entities/CustomEmoji/}
 */
export type CustomEmoji = {
  /**
   * Used for sorting custom emoji in the picker.
   */
  category?: string
  /**
   * The name of the custom emoji.
   * @example `blobaww`
   */
  shortcode: string
  /**
   * A link to a static copy of the custom emoji.
   * @example `https://files.mastodon.social/custom_emojis/images/000/011/739/original/blobaww.png`
   */
  static_url?: string
  /**
   * A link to the custom emoji.
   * @example `https://files.mastodon.social/custom_emojis/images/000/011/739/original/blobaww.png`
   */
  url: string
  /**
   * Whether this Emoji should be visible in the picker or unlisted.
   */
  visible_in_picker?: boolean
} & Record<string, unknown>

export type MisskeyCustomEmoji = {
  icon: {
    url: string
  }
  name: string
} & Record<string, unknown>
