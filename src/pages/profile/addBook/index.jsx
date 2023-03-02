import React from 'react'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import style from './addBook.module.css'

const addBook = () => {
  return (
    <>
      <HEAD title="Adicionar um livro" />
      <Layout>
        <div className="containerCard">
          <h1>Adicionar um livro novo</h1>

          <form action="">
            <label htmlFor="">Título</label>
            <input type="text" className="formInput" />

            <div className="inputsGroup">
              <div>
                <label htmlFor="">Capa</label>
                <input type="file" className="formInput" />
              </div>

              <div>
                <label htmlFor="">Preço</label>
                <input type="number" className="formInput" />
              </div>
            </div>

            <label htmlFor="">Sinopse</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Escreva aqui o seu comentário: " className="formTextarea"></textarea>

            <button type="submit" className="buttonPrimary" style={{ borderRadius: '10px' }}>
              Publicar
            </button>
          </form>
        </div>
      </Layout>
    </>
  )
}

export default addBook