import React from 'react'
import style from './Home.module.css'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import Image from 'next/image'
import CardBook from '@/components/CardBook'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

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

const Home = () => {
  return (
    <>
      <HEAD title="Página inicial" />
      <Layout>
        <div className={style.bannerMain}>
          <div className={style.row}>
            <div className={`${style.colMd_2} ${style.colText}`}>
              <h1 className={style.title}>Encontre o livro que está mais curioso para ler</h1>
              <p className={style.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis exercitationem
                aliquid ea dignissimos delectus.
              </p>

              <a href="" className="buttonPrimary">
                Explorar
              </a>
            </div>

            <div className={style.colMd_2}>
              <Image src="/Images/Man reading-pana-simple.svg" width="450" height="450" alt="" />
            </div>
          </div>
        </div>

        <div className={style.listBooks}>
          <h2 className={style.subtitle}>Melhores seleções</h2>
          <div className={style.borderBottom}></div>

          <div className={style.rowListBooks}>
            {Books.map(({ title, author, cover, id }) => (
              <CardBook key={id} id={id} title={title} author={author} cover={cover} />
            ))}
          </div>
        </div>

        <div className={style.infoSite}>
          <div className={style.row}>
            <div className={style.colMd_2}>
              <Image src="/Images/Taking notes-amico-simple.svg" width="400" height="400" alt="" />
            </div>

            <div className={`${style.colMd_2} ${style.colText}`}>
              <h1 className={style.title}>O que você pode fazer?</h1>
              <p className={style.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, autem! 
                Ab rerum laborum modi autem cumque culpa id a doloribus nobis in. 
                Facilis fuga optio id accusamus excepturi possimus pariatur.
              </p>
              <div>
                <ul>
                  <li></li>
                </ul>
              </div>

              <a href="" className="buttonPrimary">
                Explorar
              </a>
            </div>
          </div>
        </div>

        <div className={style.newBooks}>
          <h2 className={style.subtitle}>Novos livros</h2>
          <div className={style.borderBottom}></div>

          <div className={`${style.row} ${style.rowNewBooks}`}>
            <div className={style.colMd_2}>
              <div className={`${style.cardNewBook}`}>
                <div className={style.rowContent}>
                  <div className={style.colMd}>
                    <Image src="/Images/covers/morro_dos_ventos_uivantes.png" width="200" height="300" alt="" />
                  </div>

                  <div className={style.colMd}>
                    <div className={style.bookInfo}>
                      <h3>
                        O Morro dos ventos uivantes
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex perspiciatis magni ipsam beatae.
                      </p>
                      <p>
                        <span>Emily Bronte</span>
                      </p>

                      <div className={style.rankStars}>
                        <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                        <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                        <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                        <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                        <FaStarHalfAlt style={{ fontSize: "20px", color: "yellow" }} />
                      </div>

                      <a href="" className="buttonPrimary">
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.colMd_2}>
              <div className={style.cardNewBook}>
                <div className={style.rowContent}>
                  <div className={style.colMd}>
                    <Image src="/Images/covers/o_ceifador.png" width="200" height="300" alt="" />
                  </div>

                  <div className={style.colMd}>
                    <div className={style.bookInfo}>
                      <h3>
                        O Ceifador
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex perspiciatis magni ipsam beatae.
                      </p>
                      <p>
                        <span>Neal Shusterman</span>
                      </p>

                      <div className={style.rankStars}>
                        <FaStar style={{ width: "20px", color: "yellow" }} />
                        <FaStar style={{ width: "20px", color: "yellow" }} />
                        <FaStar style={{ width: "20px", color: "yellow" }} />
                        <FaStar style={{ width: "20px", color: "yellow" }} />
                        <FaStarHalfAlt style={{ width: "20px", color: "yellow" }} />
                      </div>

                      <a href="" className="buttonPrimary">
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home