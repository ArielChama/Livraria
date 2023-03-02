import React from 'react'
import style from './modal.module.css'
import Image from 'next/image'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

const Register = () => {
  return (
    <>
      <div className={`${style.text} ${style.register}`}>
        <Image src="/favicon.png" width="80" height="80" alt="Logo oficial" />
        <h2>Seja bem-vindo ao E-NGANZI</h2>
        <p>
          Acesse agora a sua conta e explore nossa biblioteca de livros
        </p>
      </div>

      <form>
        <label htmlFor="">Nome</label>
        <input type="text" className={style.formInput} />

        <label htmlFor="">Email</label>
        <input type="text" className={style.formInput} />

        <div style={{ display: 'flex', gap: '10px' }}>
          <div>
            <label htmlFor="">Imagem de perfil</label>
            <input type="file" className={style.formInput} />
          </div>

          <div>
            <label htmlFor="">Contacto</label>
            <input type="number" className={style.formInput} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div>
            <label htmlFor="">Senha</label>
            <input type="text" className={style.formInput} />
          </div>

          <div>
            <label htmlFor="">Confirmar senha</label>
            <input type="text" className={style.formInput} />
          </div>
        </div>

        <label htmlFor="">Tipo de conta</label>
        <div className={style.formRadio}>
          <label htmlFor="">Leitor</label>
          <input type="radio" name="typeAccount" id="" style={{ marginRight: '20px' }} />

          <label htmlFor="">Escritor</label>
          <input type="radio" name="typeAccount" id="" />
        </div>

        <button type="submit" className="buttonPrimary w_100">
          Criar
        </button>

        <div className={style.groupButtonsOptional}>
          <p>Ou crie conta com: </p>
          <button type="button" className={style.buttonOptional}>
            <FaGoogle style={{ marginRight: '10px', fontSize: '10px' }} />
            Google
          </button>
          <button type="button" className={style.buttonOptional}>
            <FaFacebook style={{ marginRight: '10px', fontSize: '10px' }} />
            Facebook
          </button>
        </div>
      </form>
    </>
  )
}

export default Register