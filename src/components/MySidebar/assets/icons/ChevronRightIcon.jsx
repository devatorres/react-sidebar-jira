export const ChevronRightIcon = ({
  stroke = 'currentColor',
  size = '24',
  state = 'normal'
}) => {
  return (
    <svg
      className="icon-chevron-right"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={stroke}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-state={state}>
      <path d="M9 6l6 6l-6 6" />
    </svg>
  )
}
