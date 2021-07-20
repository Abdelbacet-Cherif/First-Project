import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => (
  <div className="footer">
    {/* <p className="textfoot">This is some content in sticky footer</p> */}
    <div>
      <p className="textfoot">© PetStore 2021</p>
      <a href="https://lemagduchien.ouest-france.fr/dossier-228-top-10-races-chien-petits.html">
        <p className="textfoot">Quels sont les plus petits chiens ?</p>
      </a>
      <a href="https://www.toutsurleschiens.com/Jeux/Top10_chien_sauvetage.php">
        <p className="textfoot">Quels sont les chiens sauveteurs ?</p>
      </a>
      <a href="https://jardinage.lemonde.fr/dossier-1061-animaux-ferme.html">
        <p className="textfoot">Les animaux de la ferme</p>
      </a>
    </div>
    <div>
      <a href="https://conseil.manomano.fr/chiens-d-appartement-les-10-races-les-plus-adaptees-n8249">
        <p className="textfoot">Quels chiens peuvent vivre en appartement ?</p>
      </a>
      <a href="https://perroquet-royal.com/blogs/blog-perroquet/meilleurs-perroquets-qui-parlent">
        <p className="textfoot">Quel est le perroquet qui parle le mieux ?</p>
      </a>
    </div>
    <div>
      <a href="https://www.demaindemaitre.ca/race-chien-silencieux-aboie-jappe-pas/">
        <p className="textfoot">Quels sont les chiens qui aboient le moins ?</p>
      </a>
      <a href="https://jardinage.lemonde.fr/dossier-2446-races-chats-hypoallergeniques.html">
        <p className="textfoot">Quels sont les chats hypoallergéniques ?</p>
      </a>
    </div>
  </div>
)

export default Footer
