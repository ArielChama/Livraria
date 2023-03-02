import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.textCenter}>
          <Image src="/favicon.png" width="40" height="40" alt="Logo oficial" />
          <h4 style={{marginTop: '10px'}}>E-NGANZI</h4>
        </div>
        <div className={style.footerBottom}>
          <p>@ 2023 - Todos os direitos reservados</p>

          <div className={style.socialNetwork}>
            <FaFacebook style={{ marginLeft: '0.8rem', fontSize: '20px' }} />
            <FaInstagram style={{ marginLeft: '0.8rem', fontSize: '20px' }} />
            <FaLinkedinIn style={{ marginLeft: '0.8rem', fontSize: '20px' }} />
            <FaTwitter style={{ marginLeft: '0.8rem', fontSize: '20px' }} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer