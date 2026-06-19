import type { SVGProps } from 'react'

export const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <path d="M5 8.5h14l-1 12H6l-1-12Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" />
  </svg>
)
export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
)
export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)
export const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)
export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="m5 12 4 4L19 6" />
  </svg>
)
export const HeartIcon = ({ filled = false, ...props }: SVGProps<SVGSVGElement> & { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  </svg>
)
