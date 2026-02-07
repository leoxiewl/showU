'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

/**
 * 主题切换按钮组件
 * 支持亮色/暗色模式切换，防止水合不匹配
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // 防止水合不匹配
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-md border border-input bg-transparent" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label="切换主题"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
