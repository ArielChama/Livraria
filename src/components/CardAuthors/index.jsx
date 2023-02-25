import React from 'react'
import Image from 'next/image'
import style from './cardAuthors.module.css'

const CardAuthors = ({name, image}) => {
  return (
    <div className={style.cardAuthor}>
      <Image src={image} width="120" height="120" alt={name} />
      <h4>{name}</h4>
    </div>
  )
}

export default CardAuthors