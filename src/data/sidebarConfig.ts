import { Home, Briefcase, Video, MessageSquare, Linkedin, Github, Mail, MessageCircle } from 'lucide-react'

/**
 * 侧边栏配置数据
 * 在这里修改个人信息、导航菜单和社交媒体链接
 */

// 个人信息配置
export const profileConfig = {
  // 头像图片路径（相对于 public 目录）
  avatar: '/images/profile/avatar.jpg',
  // 显示名称
  name: '林风',
  // 个人简介
  bio: 'AI 创作者，分享 AI 知识与作品',
}

// 导航菜单配置
export const navItems = [
  { label: '主页', href: '/', icon: Home },
  { label: '个人项目', href: '/portfolio', icon: Briefcase },
  { label: '视频分享', href: '/about', icon: Video },
  { label: '欢迎留言', href: '/contact', icon: MessageSquare },
]

// 社交媒体链接配置
export const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://okjike.com', label: '即刻' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
]
