/**
 * 项目作品数据
 */

import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '电商平台',
    description: '一个功能完整的电商平台，支持商品展示、购物车和支付功能',
    longDescription: '使用 Next.js 和 TypeScript 构建的现代化电商平台，集成了 Stripe 支付、商品管理、用户认证等核心功能。',
    category: 'web',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/images/projects/ecommerce.jpg',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    date: '2024-01-15'
  },
  {
    id: 'project-2',
    title: '任务管理应用',
    description: '简洁高效的任务管理工具，支持项目分组和团队协作',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/projects/task-manager.jpg',
    demoUrl: 'https://example.com',
    featured: true,
    date: '2024-02-20'
  },
  {
    id: 'project-3',
    title: '天气预报 App',
    description: '精美的天气预报应用，提供实时天气和未来一周预报',
    category: 'mobile',
    tags: ['React Native', 'API', 'TypeScript'],
    image: '/images/projects/weather-app.jpg',
    githubUrl: 'https://github.com/example/weather',
    featured: false,
    date: '2023-11-10'
  },
  {
    id: 'project-4',
    title: '品牌视觉设计',
    description: '为创业公司打造的完整品牌视觉系统',
    category: 'design',
    tags: ['Figma', 'Brand Design', 'UI/UX'],
    image: '/images/projects/brand-design.jpg',
    featured: false,
    date: '2023-09-05'
  }
]

/**
 * 根据类别筛选项目
 */
export function getProjectsByCategory(category: string) {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

/**
 * 获取精选项目
 */
export function getFeaturedProjects() {
  return projects.filter(p => p.featured)
}

/**
 * 根据 ID 获取项目
 */
export function getProjectById(id: string) {
  return projects.find(p => p.id === id)
}
