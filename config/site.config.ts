export const siteConfig = {
  name: "Oiov's Photo Gallery",
  title: "Oiov's Photo Gallery",
  description:
    'Capturing beautiful moments in life, documenting daily warmth and emotions through my lens.',
  url: process.env.SITE_URL || 'https://gallery.oiov.dev',
  ogImage: {
    width: 1200,
    height: 630,
  },
  author: {
    name: 'Photo Gallery',
    url: process.env.SITE_URL || 'https://oiov.dev',
  },
  social: {
    twitter: '@yesmoree',
  },
}
