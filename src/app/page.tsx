import { getFeaturedProjects } from '@/data/projects'
import { sharedContents } from '@/data/home'
import ProfileCard from '@/components/home/ProfileCard'
import ProjectCard from '@/components/home/ProjectCard'
import SharedContentCard from '@/components/home/SharedContentCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="space-y-16">
      {/* 个人介绍卡片 */}
      <section>
        <ProfileCard />
      </section>

      {/* AI作品集 */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">AI作品集</h2>
          <Link
            href="/portfolio"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            查看更多
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 分享AI */}
      <section>
        <h2 className="text-2xl font-bold mb-6">分享AI</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharedContents.map((content) => (
            <SharedContentCard key={content.id} content={content} />
          ))}
        </div>
      </section>
    </div>
  )
}
