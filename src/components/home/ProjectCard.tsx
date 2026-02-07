'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/types'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLink = project.demoUrl || project.githubUrl
  const link = project.demoUrl || project.githubUrl || '#'

  const CardContent = (
    <motion.div
      whileHover={hasLink ? { y: -8, scale: 1.02 } : {}}
      className="group relative p-6 bg-card rounded-lg border border-border transition-shadow hover:shadow-lg"
    >
      {/* 图标/Emoji */}
      <div className="w-16 h-16 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-3xl">
        {project.image ? (
          <Image src={project.image} alt={project.title} width={64} height={64} />
        ) : (
          '🤖'
        )}
      </div>

      {/* 项目标题 */}
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        {project.title}
        {hasLink && (
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </h3>

      {/* 项目描述 */}
      <p className="text-sm text-muted-foreground line-clamp-2">
        {project.description}
      </p>
    </motion.div>
  )

  if (hasLink) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
