import React from "react"
import Heading from "../common/Heading"
import "./hebergement.css"
import HebergementCard from "./HebergementCard"

const Hebergement = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Nos hébergements' subtitle='Découvrez nos hébergements uniques et préparez-vous à vivre des moments mémorables. Chez Atypik House, nous transformons vos rêves de voyage en réalité.' />
          <HebergementCard />
        </div>
      </section>
    </>
  )
}

export default Hebergement
