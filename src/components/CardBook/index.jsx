import React from 'react'
import style from './cardBook.module.css'
import Image from 'next/image'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const CardBook = ({ id, cover, title, author }) => {
  return (
    <div className={style.book}>
      <Image src={cover} width="200" height="230" className={style.bookImage} alt="" />

      <div className={style.bookInfo}>
        <h4>
          <a href={`/book/${id}`}>{title}</a>
        </h4>
        <p>{author}</p>

        <div className={style.rankStars}>
          <FaStar style={{ width: "20px", color: "yellow" }} />
          <FaStar style={{ width: "20px", color: "yellow" }} />
          <FaStar style={{ width: "20px", color: "yellow" }} />
          <FaStar style={{ width: "20px", color: "yellow" }} />
          <FaStarHalfAlt style={{ width: "20px", color: "yellow" }} />
        </div>
      </div>
    </div>
  )
}

export default CardBook