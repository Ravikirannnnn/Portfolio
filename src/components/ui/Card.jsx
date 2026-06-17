import { cn } from '@/utils/cn'

export function Card({ children, className, hover = false }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6',
        hover && 'transition-shadow hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50',
        className
      )}
    >
      {children}
    </div>
  )
}
