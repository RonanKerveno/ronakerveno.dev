import { env } from '$env/dynamic/private'

export async function load() {
  const mailApiKey = env.EMAIL_API_KEY;
  if (mailApiKey) {
    return { mailApiKey }
  }
}