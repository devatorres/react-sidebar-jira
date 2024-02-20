import { SIDEBAR } from '../../constants'
import { ChevronRightIcon } from '../../assets/icons'

const ButtonResize = ({ isSidebarOpen, direction, onClick }) => {
  return (
    <button
      type="button"
      className="button-resize"
      onClick={onClick}
      data-direction={direction}>
      <ChevronRightIcon
        size="14"
        stroke={SIDEBAR.COLOR_ICON}
        state={isSidebarOpen ? 'inverse' : 'normal'}
      />
    </button>
  )
}

export default ButtonResize
