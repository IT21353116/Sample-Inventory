import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      
      <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600" alt="A Sofa" className="image"/>
      <div className="content">
          <p className="title">SOFA</p>
          <p>Damro</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nulla.</p>
          <div className="btn">See more...</div>
      </div>
    </div>
  )
}

export default Card