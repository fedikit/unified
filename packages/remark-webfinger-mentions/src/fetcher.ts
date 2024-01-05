import fetch from 'sync-fetch'

import type { WebfingerSubject } from './types'

export const getAcct = (acct: string) => {
  const host = acct.split('@')[1]

  const subject = fetch(new URL(`/.well-known/webfinger?resource=acct:${acct}`, `https://${host}`), {
    headers: { accept: 'application/jrd+json' },
  }).json() as WebfingerSubject

  return subject?.links.find(({ rel }) => rel === 'http://webfinger.net/rel/profile-page')?.href
}
