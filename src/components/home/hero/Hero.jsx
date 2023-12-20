import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Laissez-nous vous guider  ' subtitle='Trouvez une propriété nouvelle et en vedette située dans votre ville locale.' />

          <form className='flex'>
            <div className='box'>
              <span>Ville/Rue</span>
              <input type='text' placeholder='Emplacement' />
            </div>
            <div className='box'>
              <span>Type de propriété</span>
              <input type='text' placeholder='Type de propriété' />
            </div>
            <div className='box'>
              <span>Échelle des prix</span>
              <input type='text' placeholder='Échelle des prix' />
            </div>
            <div className='box'>
              <h4>Filtre avancé</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
