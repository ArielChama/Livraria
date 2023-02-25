import React from 'react'
import style from './book.module.css'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { FaCartPlus, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Image from 'next/image'

const Book = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <HEAD title={`Livro ${id}`} />
      <Layout>
        <div>
          <div className={style.bookInfo}>
            <div className={style.colImage}>
              <Image src="/Images/covers/morro_dos_ventos_uivantes.png" width="250" height="310" alt="O Morro dos ventos uivantes" />
            </div>

            <div className={style.colInfo}>
              <div className={style.rankStars}>
                <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                <FaStar style={{ fontSize: "20px", color: "yellow" }} />
                <FaStarHalfAlt style={{ fontSize: "20px", color: "yellow" }} />
              </div>

              <h1>O Morro dos ventos uivantes</h1>
              <h3>Emily Bronte</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ullam sint odit necessitatibus,
                dolores omnis velit commodi inventore incidunt iusto! Architecto excepturi nobis enim illo
                magni beatae suscipit asperiores nihil.
              </p>

              <p><strong>Idioma:</strong> Português</p>

              <div>
                <button className={style.buttonAdd}>
                  <FaCartPlus style={{ fontSize: "13px", marginRight: "5px" }} />
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Book