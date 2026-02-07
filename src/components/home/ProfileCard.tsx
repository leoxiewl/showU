'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { profileInfo } from '@/data/home'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function ProfileCard() {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 p-6 lg:p-8 bg-card rounded-lg border border-border"
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      {/* 左侧：信息列表 */}
      <motion.div
        className="space-y-4"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {profileInfo.map((item) => (
          <motion.div
            key={item.id}
            variants={staggerItem}
            className="flex items-start gap-3 text-sm text-muted-foreground"
          >
            <span className="text-primary">•</span>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* 右侧：个人视频/图片 */}
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
        <Image
          src="/images/profile/intro-video.jpg"
          alt="个人介绍"
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}
