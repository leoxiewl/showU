import Link from 'next/link'
import { socialLinks } from '@/data/contact'
import { Github, Mail, MessageCircle } from 'lucide-react'

/**
 * 网站页脚组件
 * 包含社交媒体链接和版权信息
 */
export default function Footer() {
  const getIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      github: Github,
      mail: Mail,
      'message-circle': MessageCircle,
    }
    const Icon = icons[iconName] || MessageCircle
    return <Icon className="h-5 w-5" />
  }

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* 版权信息 */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShowU. 专注于产品，而非代码。
          </p>

          {/* 社交媒体链接 */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
