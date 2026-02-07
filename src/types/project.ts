/**
 * 项目/作品数据类型定义
 */

export type ProjectCategory = 'web' | 'mobile' | 'design' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  category: ProjectCategory
  tags: string[]
  image: string
  images?: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  date: string // ISO 格式日期
}
