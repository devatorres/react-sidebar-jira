export const LibrariesIcon = ({
  className = '',
  stroke = 'currentColor',
  size = '24'
}) => {
  return (
    <svg
      className={`icon-libraries ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      <path d="M9 17l5 -1.5"></path>
      <path d="M6.5 8.5l7.81 5.37"></path>
      <path d="M7 7l8 -1"></path>
    </svg>
  )
}
