import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1> Avez-vous des questions ?</h1>
            </div>
            <button className='btn5'>Contactez-nous aujourd'hui</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo1.png' alt='' />
              <h2>Avez-vous besoin d'aide pour quoi que ce soit ?</h2>
              <p>Recevez des mises à jour, des offres spéciales, des tutoriels et des réductions directement dans votre boîte de réception chaque mois</p>

              <div className='input flex'>
                <input type='text' placeholder='Addresse e-mail' />
                <button>S'abonner</button>
              </div>
            </div>
          </div>

        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 AtypikHouse. Conçu par Abdoulaye Ba.</span>
      </div>
    </>
  )
}

export default Footer
