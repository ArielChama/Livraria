import React from 'react'
import style from './discover.module.css'
import Layout from '@/components/Layout'
import HEAD from '@/components/HEAD'
import { FaHeart } from 'react-icons/fa'
import CardBook from '@/components/CardBook'
import CardAuthors from '@/components/CardAuthors'

const Authors = [
  {
    id: 1,
    name: "Neal Shusterman",
    image: "/Images/authors/53571.jpg"
  },
  {
    id: 2,
    name: "Emily Bronte",
    image: "/Images/authors/53571.jpg"
  },
]

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
  {
    id: 4,
    title: "Falar bem em público",
    author: "Reinaldo Polito e Rachel Polito",
    description: "",
    price: "5600",
    cover: "/Images/covers/falar_bem_em_publico.png"
  },
  {
    id: 5,
    title: "A culpa é das estrelas",
    author: "John Green",
    description: "",
    price: "5600",
    cover: "/Images/covers/culpa_e_das_estrelas.png"
  },
]

const Discover = () => {
  return (
    <>
      <HEAD title="Livros" />
      <Layout>
        <div>
          <div className={style.filtersBooks}>
            <input type="search" name="" id="" className={style.inputSearch} placeholder="Procurar: " />

            <h3>Gêneros</h3>
            <div className={style.categories}>
              <button className={style.buttonCategory}>
                <FaHeart style={{ fontSize: '10px', marginRight: '8px' }} />
                Romance
              </button>

              <button className={style.buttonCategory}>
                <FaHeart style={{ fontSize: '10px', marginRight: '8px' }} />
                Fantasia
              </button>
              
              <button className={style.buttonCategory}>
                <FaHeart style={{ fontSize: '10px', marginRight: '8px' }} />
                Aventura
              </button>
              
              <button className={style.buttonCategory}>
                <FaHeart style={{ fontSize: '10px', marginRight: '8px' }} />
                Ficção cientifica
              </button>
              
              <button className={style.buttonCategory}>
                <FaHeart style={{ fontSize: '10px', marginRight: '8px' }} />
                Auto-ajuda
              </button>
            </div>
          </div>

          <div className={style.listBooks}>
            <h2>Livros</h2>

            <div className={style.rowListBooks}>
              {Books.map(({id, title, author, cover}) => (
                <CardBook key={id} id={id} title={title} author={author} cover={cover} />
              ))}
            </div>
          </div>

          <div className={style.listAuthors}>
            <h2>Autores</h2>

            <div className={style.rowListAuthors}>
              {Authors.map(({id, name, image}) => (
                <CardAuthors key={id} name={name} image={image} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Discover