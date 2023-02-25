import React from 'react'
import Image from 'next/image'
import style from './menu.module.css'
import { ModalLogin } from '../ModalLogin'

const Menu = () => {
  const [openModal, setOpenModal] = React.useState(false)

  return (
    <header>
      <nav className={style.menu}>
        <div className={style.menuLogo}>
          <a href="">
            <Image src="/favicon.png" width="40" height="40" alt="Logo oficial" />
          </a>
        </div>

        <ul className={style.menuList}>
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
            <button type="button" onClick={() => setOpenModal(true)} className={style.buttonLogin}>Entrar</button>
          </li>

          <li className={style.menuItem}>
            <button type="button" className={style.buttonRegister}>Cadastrar</button>
          </li>
        </ul>
      </nav>

      <ModalLogin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </header >
  )
}

export default Menu