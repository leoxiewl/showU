/**
 * 联系信息和社交媒体配置
 */

import { ContactInfo, SocialLink } from '@/types'

export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  location: '中国',
  availability: '开放合作机会'
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    platform: '即刻',
    url: 'https://okjike.com/user/xxx',
    icon: 'message-circle'
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'mail'
  }
]
