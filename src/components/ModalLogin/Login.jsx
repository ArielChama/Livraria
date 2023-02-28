import React from 'react'
import style from './modal.module.css'
import Image from 'next/image'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Login = () => {
  return (
    <>
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

        <button type="submit" className="buttonPrimary w_100">
          Entrar
        </button>

        <div className={style.groupButtonsOptional}>
          <p>Ou inicie sessão com: </p>
          <button type="button" className={style.buttonOptional}>
            <FaGoogle style={{ marginRight: '10px', fontSize: '12px' }} />
            Google
          </button>
          <button type="button" className={style.buttonOptional}>
            <FaFacebook style={{ marginRight: '10px', fontSize: '12px' }} />
            Facebook
          </button>
        </div>
      </form>
    </>
  )
}

export default Login