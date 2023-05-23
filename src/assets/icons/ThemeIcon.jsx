export const ThemeIcon = ({
  className = '',
  stroke = 'currentColor',
  size = '24'
}) => {
  return (
    <svg
      className={`icon-theme ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path>
      <path d="M21 3a16 16 0 0 0 -12.8 10.2"></path>
      <path d="M21 3a16 16 0 0 1 -10.2 12.8"></path>
      <path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path>
    </svg>
  )
}
