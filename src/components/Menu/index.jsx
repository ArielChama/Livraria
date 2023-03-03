import React from 'react'
import Image from 'next/image'
import style from './menu.module.css'
import { ModalLogin } from '../ModalLogin'
import { FaBars } from 'react-icons/fa'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Script from 'next/script'

const Menu = () => {
  const [openModal, setOpenModal] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState(style.menuList)
  const [backgroundMenu, setBackgroundMenu] = React.useState()
  const user = true // Váriavel de teste

  const menuActive = () => {
    activeMenu === style.menuList ? setActiveMenu(`${style.menuList} ${style.active}`) : setActiveMenu(style.menuList)
    backgroundMenu === style.background ? setBackgroundMenu("") : setBackgroundMenu(style.background)
  }

  return (
    <header className={`${style.header} ${backgroundMenu}`}>
      {/* <div className="container">
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
              <a href="/discover">Livros</a>
            </li>

            <li className={style.menuItem}>
              <a href="/cart">Carrinho</a>
            </li>

            {user ?
              <li className={style.menuItem}>
                <Image src="/Images/authors/53571.jpg" width="30" height="30" alt="" />
              </li>
              :
              <li className={style.menuItem}>
                <button type="button" onClick={() => setOpenModal(true)} className="buttonSecondary">Entrar</button>
              </li>
            }

          </ul>

          <button type="button" className={style.buttonMenu} onClick={menuActive}>
            <FaBars style={{ color: '#fff', fontSize: '40px' }} />
          </button>
        </nav>
      </div>

      <ModalLogin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} /> */}

      <Navbar expand="lg" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="/favicon.png" width="40" height="40" alt="Logo oficial" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Página inicial</Nav.Link>
              <Nav.Link href="/discover">Livros</Nav.Link>
              <Nav.Link href="/cart">Carrinho</Nav.Link>
              <NavDropdown title="Conta" id="collasible-nav-dropdown" menuVariant="dark">
                <NavDropdown.Item href="/profile">
                  Perfil
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile/editInfo">
                  Editar perfil
                </NavDropdown.Item>
                <NavDropdown.Item href="/profile/addBook">
                  Adicionar livro
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
    </header >
  )
}

export default Menu