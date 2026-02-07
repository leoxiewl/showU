/**
 * 导出所有类型定义
 */

export * from './project'
export * from './skill'

/**
 * 联系信息类型
 */
export interface ContactInfo {
  email: string
  location: string
  availability: string
}

/**
 * 社交媒体链接类型
 */
export interface SocialLink {
  platform: string
  url: string
  icon: string
}

/**
 * 导航链接类型
 */
export interface NavigationLink {
  label: string
  href: string
}

/**
 * 个人信息类型
 */
export interface ProfileData {
  name: string
  title: string
  bio: string
  image: string
}

/**
 * 价值观类型
 */
export interface Value {
  id: string
  title: string
  description: string
  icon?: string
}

/**
 * 分享内容类型
 */
export type ContentType = 'video' | 'article' | 'social'

export interface SharedContent {
  id: string
  type: ContentType
  title: string
  description?: string
  thumbnail: string  // 缩略图
  url: string       // 外部链接
  platform?: string // 平台（YouTube, B站, 即刻等）
  date: string
}

/**
 * 个人介绍信息项
 */
export interface ProfileInfoItem {
  id: string
  icon?: string
  text: string
}
