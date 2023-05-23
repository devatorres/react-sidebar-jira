import { SIDEBAR } from '../../constants'
import { ChevronRightIcon } from '../../assets/icons'

const ButtonResize = ({ isSidebarOpen, onClick }) => {
  return (
    <button type="button" className="button-resize" onClick={onClick}>
      <ChevronRightIcon
        className={isSidebarOpen ? 'right' : 'left'}
        stroke={SIDEBAR.COLOR_ICON}
        size="14"
      />
    </button>
  )
}

export default ButtonResize
