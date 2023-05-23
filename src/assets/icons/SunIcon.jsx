export const SunIcon = ({
  className = '',
  stroke = 'currentColor',
  size = '24'
}) => {
  return (
    <svg
      className={`icon-sun ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M4 12h.01"></path>
      <path d="M12 4v.01"></path>
      <path d="M20 12h.01"></path>
      <path d="M12 20v.01"></path>
      <path d="M6.31 6.31l-.01 -.01"></path>
      <path d="M17.71 6.31l-.01 -.01"></path>
      <path d="M17.7 17.7l.01 .01"></path>
      <path d="M6.3 17.7l.01 .01"></path>
    </svg>
  )
}
