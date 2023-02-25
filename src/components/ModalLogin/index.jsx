import React from 'react'
import style from './modal.module.css'
import Image from 'next/image'

export const ModalLogin = ({ isOpen, setModalOpen }) => {

  if (isOpen) {
    return (
      <div className={style.background}>
        <div className={style.modalLogin}>
          <button type="button" className={style.buttonClose} onClick={setModalOpen}>X</button>
          <div className={style.body}>
            <div className={style.container}>
              <div className={style.text}>
                <Image src="/favicon.png" width="80" height="80" alt="Logo oficial" />
                <h2>Seja bem-vindo ao E-NGANZI</h2>
                <p>
                  Acesse agora a sua conta e explore nossa biblioteca de livros
                </p>
              </div>

              <form>
                <label htmlFor="">Email</label>
                <input type="text" className={style.formInput} />

                <label htmlFor="">Palavra-passe</label>
                <input type="text" className={style.formInput} />

                <button type="submit" className={style.buttonSubmit}>
                  Entrar
                </button>

                <div className={style.groupButtonsOptional}>
                  <p>Ou inicie sessão com: </p>
                  <button type="button" className={style.buttonOptional}>Google</button>
                  <button type="button" className={style.buttonOptional}>Facebook</button>
                </div>

                <p>Não tem uma conta ainda? <a href="">Criar conta</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
