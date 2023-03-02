import React from 'react'
import HEAD from '@/components/HEAD'
import Layout from '@/components/Layout'
import style from './cart.module.css'
import Image from 'next/image'

const Books = [
  {
    id: 1,
    title: "O Ceifador",
    author: "Neal Shusterman",
    description: "",
    price: "5600",
    cover: "/Images/covers/o_ceifador.png"
  },
  {
    id: 2,
    title: "Breves respostas para grandes quatões",
    author: "Stephen Hawking",
    description: "",
    price: "5600",
    cover: "/Images/covers/breves_respostas.png"
  }
]


const Cart = () => {
  let number = 0

  return (
    <>
      <HEAD title="Carrinho" />
      <Layout>
        <div className={style.cardContainer}>
          <h2>O seu carrinho <span>(2 itens)</span></h2>

          <div className={style.containerTable}>
            <table class={style.table}>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Item</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Quantidade</th>
                </tr>
              </thead>
              
              <tbody>
                {Books.map(({ title, author, cover, id, price }) => (
                  <tr>
                    <td>
                      <Image src={cover} width="140" height="190" alt="" />
                    </td>

                    <td>
                      <h4>{title}</h4>
                      <p>{author}</p>
                    </td>

                    <td>
                      <p>{price} Kz</p>
                    </td>

                    <td>
                      <input type="number" className={style.inputQuantity} />
                    </td>

                    <td>
                      <button className={style.buttonDelete}>
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button type="submit" className="buttonSecondary">
              Finalizar compra
            </button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Cart