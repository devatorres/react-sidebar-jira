export const InfinityIcon = ({
  className = '',
  stroke = 'currentColor',
  size = '24'
}) => {
  return (
    <svg
      className={`icon-infinity ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17 15.328c2.414 -.718 4 -1.94 4 -3.328c0 -2.21 -4.03 -4 -9 -4s-9 1.79 -9 4s4.03 4 9 4"></path>
      <path d="M9 13l3 3l-3 3"></path>
    </svg>
  )
}
