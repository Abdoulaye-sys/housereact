import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Nos hébergements' subtitle='Découvrez nos hébergements uniques et préparez-vous à vivre des moments mémorables. Chez Atypik House, nous transformons vos rêves de voyage en réalité.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
