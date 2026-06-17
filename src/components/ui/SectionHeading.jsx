import { cn } from '@/utils/cn'

export function SectionHeading({ eyebrow, title, description, className, center = false }) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
