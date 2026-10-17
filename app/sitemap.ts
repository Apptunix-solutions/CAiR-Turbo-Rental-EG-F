import { MetadataRoute } from 'next'
import { business } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = business.url

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
