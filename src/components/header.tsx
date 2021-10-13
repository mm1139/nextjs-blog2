import { useToggleColoerMode } from '../logic/styles'

const DarkModeButton: React.VFC = () => {
  const { isDarkMode, toggle } = useToggleColoerMode()
  return (
    <>
      <button className="btn-blue" onClick={() => toggle()}>
        {isDarkMode ? 'light' : 'dark'}
      </button>
    </>
  )
}

export default function Header() {
  return <DarkModeButton />
}
