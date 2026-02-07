'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Home, Briefcase, Video, MessageSquare, Linkedin, Github, Mail, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

/**
 * 左侧边栏组件
 * 固定在左侧，包含个人信息和导航
 */
export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { label: '主页', href: '/', icon: Home },
    { label: '个人项目', href: '/portfolio', icon: Briefcase },
    { label: '视频分享', href: '/about', icon: Video },
    { label: '欢迎留言', href: '/contact', icon: MessageSquare },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: MessageCircle, href: 'https://okjike.com', label: '即刻' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background overflow-y-auto">
      <div className="flex flex-col items-center p-6 space-y-6">
        {/* 头像 */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
          <Image
            src="/images/profile/avatar.jpg"
            alt="个人头像"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 名字和简介 */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">月球大叔</h1>
          <p className="text-sm text-muted-foreground">
            AI 创作者，分享 AI 知识与作品
          </p>
        </div>

        {/* 社交媒体图标 */}
        <div className="flex gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            )
          })}
        </div>

        {/* 分隔线 */}
        <div className="w-full h-px bg-border" />

        {/* 导航菜单 */}
        <nav className="w-full space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50 text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* 主题切换 */}
        <div className="w-full pt-4">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  )
}
