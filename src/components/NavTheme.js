import React, { useState } from 'react'
import './navTheme.css'

const NavTheme = () => {
  const [modeTheme, setModeTheme] = useState(2);

  const handlerToggle = () => {
    if (modeTheme === 1) {
      document.body.classList.remove('theme3')
      document.body.classList.add('root')
      setModeTheme(modeTheme + 1)
    }
    if (modeTheme === 2) {
      document.body.classList.remove('root')
      document.body.classList.add('theme2')
      setModeTheme(modeTheme + 1)
    }
    if (modeTheme === 3) {
      document.body.classList.remove('theme2')
      document.body.classList.add('theme3')
      setModeTheme(1)
    }
  }
  return (
    <div className='nav-bar'>
      <h1>calc()</h1>
      <div className='theme'>
        <h5>THEME</h5>
        <div onClick={handlerToggle}>
          <ul className={`list-theme `}>
            <li className={modeTheme == '2' ? 'coso' : ''}><span>1</span></li>
            <li className={modeTheme == '3' ? 'coso' : ''}><span>2</span></li>
            <li className={modeTheme == '1' ? 'coso' : ''}><span>3</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavTheme