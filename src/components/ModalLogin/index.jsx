import React from 'react'
import style from './modal.module.css'
import Login from './Login'
import Register from './Register'

export const ModalLogin = ({ isOpen, setModalOpen }) => {
  const [activeTabLogin, setActiveTabLogin] = React.useState(`${style.tabsContent} ${style.contentActive}`)
  const [activeTabRegister, setActiveTabRegister] = React.useState(style.tabsContent)
  const [activeToggleLogin, setActiveToggleLogin] = React.useState(style.tabsActive)
  const [activeToggleRegister, setActiveToggleRegister] = React.useState("")

  const TabLogin = () => {
    setActiveTabLogin(`${style.tabsContent} ${style.contentActive}`)
    setActiveTabRegister(style.tabsContent)
    setActiveToggleLogin(style.tabsActive)
    setActiveToggleRegister("")
  }

  const TabRegister = () => {
    setActiveTabLogin(style.tabsContent)
    setActiveTabRegister(`${style.tabsContent} ${style.contentActive}`)
    setActiveToggleLogin("")
    setActiveToggleRegister(style.tabsActive)
  }
  

  if (isOpen) {
    return (
      <div className={style.background}>
        <div className={style.modalLogin}>
          <button type="button" className={style.buttonClose} onClick={setModalOpen}>X</button>
          <div className={style.body}>
            <div className={style.container}>
              <div className={style.tabs}>
                <div className={style.tabsHead}>
                  <div onClick={TabLogin} className={`${style.tabsToggle}`}>
                    <span>Entrar</span>
                    <div className={activeToggleLogin}></div>
                  </div>
                  <div onClick={TabRegister} className={`${style.tabsToggle}`}>
                    <span>Criar</span>
                    <div className={activeToggleRegister}></div>
                  </div>
                </div>
                <div>
                  <div className={activeTabLogin}>
                    <Login />
                  </div>
                  <div className={activeTabRegister}>
                    <Register />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
