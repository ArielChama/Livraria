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
  const user = false // Váriavel de teste

  const menuActive = () => {
    activeMenu === style.menuList ? setActiveMenu(`${style.menuList} ${style.active}`) : setActiveMenu(style.menuList)
    backgroundMenu === style.background ? setBackgroundMenu("") : setBackgroundMenu(style.background)
  }

  return (
    <header className={style.header}>
      <Navbar expand="lg" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">
            Livraria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Página inicial</Nav.Link>
              <Nav.Link href="/discover">Livros</Nav.Link>
              <Nav.Link href="/cart">Carrinho</Nav.Link>
              {user ?
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
                </NavDropdown> :
                <button type="button" onClick={() => setOpenModal(true)} className="buttonSecondary">Entrar</button>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalLogin isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
    </header >
  )
}

export default Menu