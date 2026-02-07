/**
 * 首页数据
 */

import { SharedContent, ProfileInfoItem } from '@/types'

/**
 * 首页个人介绍信息
 */
export const profileInfo: ProfileInfoItem[] = [
  {
    id: 'info-1',
    text: '现在在某公司做某工作，之前在公司123工作过。'
  },
  {
    id: 'info-2',
    text: '学历:博士硕士本科毕业于学校123。'
  },
  {
    id: 'info-3',
    text: '工作技能:擅长 123，对 AI 相关技术感兴趣。'
  },
  {
    id: 'info-4',
    text: '分享:在多个平台上分享 123 相关内容。'
  }
]

/**
 * 分享内容数据
 */
export const sharedContents: SharedContent[] = [
  {
    id: 'content-1',
    type: 'video',
    title: 'vLLM code walkthrough',
    thumbnail: '/images/content/video-1.jpg',
    url: 'https://youtube.com/watch?v=xxx',
    platform: 'YouTube',
    date: '2024-01-15'
  },
  {
    id: 'content-2',
    type: 'article',
    title: 'What is AI Infra?',
    thumbnail: '/images/content/article-1.jpg',
    url: 'https://example.com/article',
    date: '2024-01-10'
  },
  {
    id: 'content-3',
    type: 'video',
    title: 'How AI Engineer Works',
    thumbnail: '/images/content/video-2.jpg',
    url: 'https://youtube.com/watch?v=yyy',
    platform: 'YouTube',
    date: '2024-01-05'
  }
]
