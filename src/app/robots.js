export const dynamic = 'force-static';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://brightbrandstudio.com.au/sitemap.xml',
  };
}
