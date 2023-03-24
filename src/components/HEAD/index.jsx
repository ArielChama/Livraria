import React from 'react'
import Head from 'next/head'

const HEAD = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="E-ganzi" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}

export default HEAD