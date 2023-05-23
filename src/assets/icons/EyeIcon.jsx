export const EyeIcon = ({
  className = '',
  stroke = 'currentColor',
  size = '24'
}) => {
  return (
    <svg
      className={`icon-eye ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
      <path d="M12 18c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
      <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
      <path d="M19.001 15.5v1.5"></path>
      <path d="M19.001 21v1.5"></path>
      <path d="M22.032 17.25l-1.299 .75"></path>
      <path d="M17.27 20l-1.3 .75"></path>
      <path d="M15.97 17.25l1.3 .75"></path>
      <path d="M20.733 20l1.3 .75"></path>
    </svg>
  )
}
