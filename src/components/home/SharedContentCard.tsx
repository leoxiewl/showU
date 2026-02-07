'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SharedContent } from '@/types'
import { Video, FileText, MessageCircle } from 'lucide-react'

interface SharedContentCardProps {
  content: SharedContent
}

export default function SharedContentCard({ content }: SharedContentCardProps) {
  const getIcon = () => {
    switch (content.type) {
      case 'video': return <Video className="w-4 h-4" />
      case 'article': return <FileText className="w-4 h-4" />
      case 'social': return <MessageCircle className="w-4 h-4" />
    }
  }

  return (
    <Link href={content.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileHover={{ y: -8 }}
        className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
      >
        {/* 缩略图 */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={content.thumbnail}
            alt={content.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {/* 类型标识 */}
          <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs flex items-center gap-1">
            {getIcon()}
            {content.platform}
          </div>
        </div>

        {/* 内容信息 */}
        <div className="p-4">
          <h3 className="font-medium line-clamp-2 mb-1">
            {content.title}
          </h3>
          {content.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {content.description}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  )
}
