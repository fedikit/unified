export type WebfingerSubject = {
  links: WebfingerLink[]
} & Record<string, unknown>

export type WebfingerLink = {
  href: string
  rel: 'http://webfinger.net/rel/profile-page' | 'self' | (string & {})
  type: 'application/activity+json' | 'text/html' | (string & {})
} & Record<string, unknown>
