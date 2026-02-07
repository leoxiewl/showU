/**
 * Framer Motion 动画变体库
 * 包含常用的动画效果，保持项目动画一致性
 */

import { Variants } from "framer-motion"

/**
 * 淡入 + 上滑动画
 * 适用于：页面入场、卡片、文本等
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
}

/**
 * 滚动触发的淡入动画
 * 使用 whileInView，元素进入视口时触发
 */
export const scrollFadeIn: Variants = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: '-100px'
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
}

/**
 * 缩放进入动画
 * 适用于：模态框、弹出层等
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
}

/**
 * 交错容器动画
 * 子元素依次出现，创建层次感
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

/**
 * 交错子元素动画
 * 配合 staggerContainer 使用
 */
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

/**
 * 悬浮放大动画
 * 适用于：卡片、按钮的 hover 效果
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

/**
 * 悬浮上浮动画
 * 适用于：卡片的 hover 效果
 */
export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}
