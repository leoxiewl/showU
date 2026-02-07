/**
 * 关于页面内容数据
 */

import { ProfileData, Value } from '@/types'

export const profileData: ProfileData = {
  name: '您的名字',
  title: '产品开发者 & 创造者',
  bio: `在 AI 时代，我专注于创造真正有价值的产品。

我相信，产品和成果比代码本身更重要。技术只是工具，真正重要的是用它们解决了什么问题，创造了什么价值。

擅长将想法快速转化为可用的产品，并持续迭代优化。`,
  image: '/images/profile/avatar.jpg'
}

export const values: Value[] = [
  {
    id: 'value-1',
    title: '以终为始',
    description: '关注最终交付的产品和用户价值，而非技术本身'
  },
  {
    id: 'value-2',
    title: '快速迭代',
    description: '快速验证想法，持续改进，拥抱变化'
  },
  {
    id: 'value-3',
    title: '用户至上',
    description: '始终站在用户角度思考，打造真正解决问题的产品'
  }
]
