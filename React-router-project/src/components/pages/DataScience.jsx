import React from 'react'
import img1 from '../../components/image/13.png'

function DataScience() {
  return (
    <main className="about">
    <div className="pg-header">
      <div className="container">
        <h1>Data Science</h1>
      </div>
    </div>
    <div className="div" style={{display:'flex', justifyContent:'space-evenly'}}>
    <div className="card" style={{ width: '18rem' }}>
  <img src={img1} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    <div className="card" style={{ width: '18rem' }}>
  <img src={img1} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    <div className="card" style={{ width: '18rem' }}>
  <img src={img1} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    <div className="card" style={{ width: '18rem' }}>
  <img src={img1} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
  </main>
  )
}

export default DataScience