'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Briefcase, Video, MessageSquare } from 'lucide-react'

/**
 * 移动端顶部导航栏
 * 仅在小屏幕显示
 */
export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: '主页', href: '/', icon: Home },
    { label: '个人项目', href: '/portfolio', icon: Briefcase },
    { label: '视频分享', href: '/about', icon: Video },
    { label: '欢迎留言', href: '/contact', icon: MessageSquare },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="flex items-center justify-between px-4 h-14">
        <Link href="/" className="text-lg font-bold">
          ShowU
        </Link>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-accent rounded-md"
            aria-label="菜单"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {menuOpen && (
        <div className="border-t border-border bg-background">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium",
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
