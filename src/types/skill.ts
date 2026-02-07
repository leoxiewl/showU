/**
 * 技能数据类型定义
 */

export type SkillCategory = 'frontend' | 'backend' | 'design' | 'tools'

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: SkillLevel
  icon?: string
}
