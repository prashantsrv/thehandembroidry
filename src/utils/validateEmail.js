const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'guerrillamail.com', 'guerrillamail.net', 'guerrillamail.org', 'guerrillamail.biz',
  'guerrillamail.de', 'guerrillamailblock.com', 'sharklasers.com', 'grr.la', 'pokemail.net', 'spam4.me',
  '10minutemail.com', '10minutemail.net', '10minutemail.org', '20minutemail.com', '30minutemail.com',
  'tempmail.com', 'temp-mail.org', 'temp-mail.io', 'tempmail.net', 'tempmailo.com', 'tempmail.dev',
  'tempail.com', 'tempr.email', 'tempinbox.com', 'throwawaymail.com', 'trashmail.com', 'trashmail.net',
  'trashmail.de', 'trash-mail.com', 'yopmail.com', 'yopmail.net', 'yopmail.fr', 'cool.fr.nf', 'jetable.fr.nf',
  'nospam.ze.tc', 'nomail.xl.cx', 'mega.zik.dj', 'speed.1s.fr', 'courriel.fr.nf', 'moncourrier.fr.nf',
  'monemail.fr.nf', 'monmail.fr.nf', 'getnada.com', 'nada.email', 'dispostable.com', 'maildrop.cc',
  'mailnesia.com', 'mailcatch.com', 'mailnull.com', 'mintemail.com', 'mytemp.email', 'mohmal.com',
  'emailondeck.com', 'fakeinbox.com', 'fakemail.net', 'fakemailgenerator.com', 'getairmail.com',
  'harakirimail.com', 'incognitomail.org', 'instantemailaddress.com', 'jourrapide.com', 'meltmail.com',
  'mailforspam.com', 'mailtemp.info', 'mt2015.com', 'owlymail.com', 'spambox.us', 'spamgourmet.com',
  'spamfree24.org', 'spamhereplease.com', 'spamthisplease.com', 'tempemail.net', 'tempinbox.co.uk',
  'throwam.com', 'tmail.ws', 'tmails.net', 'tmpmail.net', 'tmpmail.org', 'trbvm.com', 'wegwerfmail.de',
  'wegwerfmail.net', 'wegwerfmail.org', 'anonbox.net', 'anonymbox.com', 'burnermail.io', 'byom.de',
  'dayrep.com', 'discard.email', 'discardmail.com', 'discardmail.de', 'drdrb.com', 'dropmail.me',
  'einrot.com', 'emailfake.com', 'email-fake.com', 'emailtemporanea.com', 'emltmp.com', 'fakermail.com',
  'filzmail.com', 'freemail.ms', 'gmailnator.com', 'inboxbear.com', 'inboxkitten.com', 'mail-temp.com',
  'mailbox92.biz', 'mailexpire.com', 'mailmoat.com', 'mailseal.de', 'mailtothis.com', 'mailzilla.com',
  'moakt.com', 'mvrht.com', 'my10minutemail.com', 'nowmymail.com', 'rcpt.at', 'sogetthis.com',
  'sute.jp', 'tafmail.com', 'tmpeml.com', 'vomoto.com', 'yepmail.net', 'zetmail.com', 'zippymail.info',
  'mailpoof.com', 'mail.tm', 'emailnax.com', 'luxusmail.org', 'crazymailing.com', 'cuvox.de', 'armyspy.com',
  'teleworm.us', 'superrito.com', 'rhyta.com', 'gustr.com', 'fleckens.hu', 'tmail.com', 'temp.email',
])

const PLACEHOLDER_DOMAINS = new Set([
  'example.com', 'example.org', 'example.net', 'test.com', 'test.test', 'domain.com', 'yourdomain.com',
  'email.com', 'sample.com', 'mydomain.com', 'noemail.com', 'none.com', 'na.com', 'asdf.com', 'qwerty.com',
])

const EMAIL_RE = /^[a-z0-9]+(?:[._+-][a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,24}$/i

function isKeyboardMash(local) {
  const letters = local.replace(/[^a-z]/gi, '').toLowerCase()
  if (letters.length < 5) return false
  if (/^(.)\1+$/.test(letters)) return true
  return ['asdf', 'qwer', 'zxcv', 'sdfg', 'dfgh', 'xyzxyz', 'abcabc'].some((m) => letters.includes(m)) && letters.length <= 10
}

export function validateEmail(rawEmail) {
  const email = String(rawEmail || '').trim().toLowerCase()

  if (!email) return 'Please enter your email address.'
  if (email.length > 254) return 'That email address is too long.'
  if (!EMAIL_RE.test(email)) return 'Please enter a valid email address (e.g. name@company.com).'

  const [local, domain] = email.split('@')
  if (local.length > 64) return 'That email address is not valid.'

  if (PLACEHOLDER_DOMAINS.has(domain)) return 'Please use your real email address.'

  const labels = domain.split('.')
  const isDisposable = labels.some((_, i) => DISPOSABLE_DOMAINS.has(labels.slice(i).join('.')))
  if (isDisposable) return 'Temporary or disposable email addresses are not accepted. Please use your real email.'

  if (isKeyboardMash(local) || (labels.length === 2 && labels[0] === local && local.length < 8)) {
    return 'Please use your real email address.'
  }

  return ''
}
