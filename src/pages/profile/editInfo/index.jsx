import React from 'react'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import style from './editInfo.module.css'

const editInfo = () => {
  return (
    <>
      <HEAD title="Editar informações" />
      <Layout>
        <div className="containerCard">
          <h1>Editar perfil</h1>

          <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" className="formInput" />

            <label htmlFor="">Email</label>
            <input type="text" className="formInput" />

            <div className="inputsGroup">
              <div>
                <label htmlFor="">Imagem</label>
                <input type="file" className="formInput" />
              </div>

              <div>
                <label htmlFor="">Contacto</label>
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

export default editInfo