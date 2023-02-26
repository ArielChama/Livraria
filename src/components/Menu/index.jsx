import React from 'react'
import Image from 'next/image'
import style from './menu.module.css'
import { ModalLogin } from '../ModalLogin'
import { FaBars } from 'react-icons/fa'

const Menu = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState(style.menuList)
  const [backgroundMenu, setBackgroundMenu] = React.useState()

  const menuActive = () => {
    activeMenu === style.menuList ? setActiveMenu(`${style.menuList} ${style.active}`) : setActiveMenu(style.menuList)
    backgroundMenu === style.background ? setBackgroundMenu("") : setBackgroundMenu(style.background)
  }

  return (
    <header className={`${style.header} ${backgroundMenu}`}>
      <div className="container">
        <nav className={style.menu}>
          <div className={style.menuLogo}>
            <a href="">
              <Image src="/favicon.png" width="40" height="40" alt="Logo oficial" />
            </a>
          </div>

          <ul className={activeMenu}>
            <li className={style.menuItem}>
              <a href="">Página inicial</a>
            </li>

            <li className={style.menuItem}>
              <a href="">Livros</a>
            </li>

            <li className={style.menuItem}>
              <a href="/cart">Carrinho</a>
            </li>

            <li className={style.menuItem}>
              <button type="button" onClick={() => setOpenModal(true)} className="buttonSecondary">Entrar</button>
            </li>

            <li className={style.menuItem}>
              <button type="button" className="buttonPrimary">Cadastrar</button>
            </li>
          </ul>

          <button type="button" className={style.buttonMenu} onClick={menuActive}>
            <FaBars style={{ color: '#fff', fontSize: '40px' }} />
          </button>
        </nav>
      </div>

      <ModalLogin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </header >
  )
}

export default Menu