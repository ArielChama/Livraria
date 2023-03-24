import React from 'react'
import Image from 'next/image'
import style from './cardAuthors.module.css'

const CardAuthors = ({name, image}) => {
  return (
    <div className={style.cardAuthor}>
      <Image src={image} width="120" height="120" alt={name} />
      <h5>{name}</h5>
    </div>
  )
}

export default CardAuthors