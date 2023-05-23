import ButtonSelector from '../ButtonSelector'
import useSidebar from '../MySidebar/hooks/useSidebar'
import useTheme from '../../hooks/useTheme'
import useDebug from '../../hooks/useDebug'
import {
  InfinityIcon,
  SettingsIcon,
  ThemeIcon,
  LibrariesIcon,
  StorageIcon,
  SunIcon,
  MoonIcon,
  EyeIcon,
  EyeOffIcon
} from '../../assets/icons'
import './dashboard.css'

const Dashboard = () => {
  const { isSidebarOpen } = useSidebar()
  const { isDark, toggleTheme } = useTheme()
  const { isVisible, toggleVisibility } = useDebug()

  return (
    <div className={`dashboard ${isSidebarOpen ? 'small-space' : 'big-space'}`}>
      <h1>React Sidebar Jira</h1>
      <p>En este proyecto se presenta un componente...</p>
      <ul>
        <li>
          <InfinityIcon size="35" />
          Completamente reusable
        </li>
        <li>
          <SettingsIcon size="35" />
          Configurable y estilable fácilmente
        </li>
        <li>
          <LibrariesIcon size="35" />
          Sin dependencias de librerías
        </li>
        <li>
          <ThemeIcon size="35" />
          Con tema claro y oscuro
          <ButtonSelector
            isOnce={isDark}
            toggle={toggleTheme}
            OnceIcon={<SunIcon size="30" />}
            OtherIcon={<MoonIcon size="25" />}
          />
        </li>
        <li>
          <StorageIcon size="35" />
          Con guardado de la posición en Local Storage
        </li>
      </ul>
      <p>Este componente contiene las siguientes funcionalidades:</p>
      <ul className="small">
        <li>
          Ajustable su tamaño (con área dragable mejorada, solo abierto)
          <ButtonSelector
            isOnce={isVisible}
            toggle={toggleVisibility}
            OnceIcon={<EyeOffIcon size="25" />}
            OtherIcon={<EyeIcon size="25" />}
          />
        </li>
        <li>
          Estando cerrado se mantendrá escondido hasta que pasemos por encima
        </li>
        <li>
          Tiene su resizer máximo y mínimo (al llegar al mínimo, lo interpreta
          como cerrado)
        </li>
        <li>Con un botón para abrir y cerrar (cerrado siempre visible)</li>
        <li>
          El componente tiene la posición:
          <br />
          Abierto = Block
          <br />
          Cerrado = Fixed
        </li>
        <li>
          El componente guarda la posición deseada que estableciste para
          setearla al cargar
        </li>
      </ul>
    </div>
  )
}

export default Dashboard
