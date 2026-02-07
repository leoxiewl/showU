'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'

/**
 * 网站头部导航组件
 * - 桌面端：横向导航
 * - 移动端：汉堡菜单
 * - 集成主题切换
 * - 活动路由高亮
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          ShowU
        </Link>

        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(link.href)
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* 移动端菜单按钮 */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
