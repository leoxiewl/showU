import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 合并 Tailwind CSS 类名
 * 使用 clsx 处理条件类名，twMerge 处理冲突的 Tailwind 类
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 格式化日期为人类可读的格式
 * @param dateString - ISO 格式的日期字符串
 * @returns 格式化后的日期字符串（例如：2024年1月）
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
  })
}
