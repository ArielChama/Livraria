import React from 'react'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import Image from 'next/image'
import style from './profile.module.css'
import CardBook from '@/components/CardBook'
import { FaEdit, FaRss } from 'react-icons/fa'

const Books = [
  {
    id: 1,
    title: "O Ceifador",
    author: "Neal Shusterman",
    description: "",
    price: "5600",
    cover: "/Images/covers/o_ceifador.png"
  },
  {
    id: 2,
    title: "Breves respostas para grandes quatões",
    author: "Stephen Hawking",
    description: "",
    price: "5600",
    cover: "/Images/covers/breves_respostas.png"
  },
  {
    id: 3,
    title: "O Morro dos ventos uivantes",
    author: "Emily Bronte",
    description: "",
    price: "5600",
    cover: "/Images/covers/morro_dos_ventos_uivantes.png"
  },
]

const Profile = () => {
  return (
    <>
      <HEAD title="Perfil de usuário" />
      <Layout>
        <div>
          <div className="containerCard" style={{ margin: '8rem 0rem 0rem 0rem' }}>
            <div className={style.infoProfile}>
              <Image src="/Images/authors/53571.jpg" width="140" height="140" alt="" />
              <h3>Emily Bronte</h3>

              <p>"
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                velit voluptatum possimus repudiandae placeat ut delectus iste amet quidem
                facere maiores tempore, dolor natus excepturi, atque harum eum mollitia nihil! "
              </p>

              <p><span className="textPrimary">Seguidores: </span>9879798</p>

              <div>
                <button className="buttonPrimary" style={{ padding: '0.5rem 2rem', marginRight: '10px' }}>
                  <FaRss />
                </button>

                <button className="buttonSecondary" style={{ padding: '0.5rem 2rem' }}>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>

          <div className="containerCard" style={{ margin: '2rem 0rem' }}>
            <div className={style.headerSection}>
              <h4>Livros publicados</h4>

              <div>
                <a href="/profile/addBook" className="buttonPrimary">
                  Adicionar
                </a>
              </div>
            </div>

            <div className={style.rowListBooks}>
              {Books.map(({ id, title, author, cover }) => (
                <CardBook key={id} id={id} title={title} author={author} cover={cover} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Profile