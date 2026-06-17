import { cn } from '@/utils/cn'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        className
      )}
    >
      {children}
    </span>
  )
}
