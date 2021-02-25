import React from 'react'


export default function ImagePage({previewer}) {
  let imClicked = (e) => {
    previewer(e.target.src)
  }

  return (
    <section>
      <div className="image-grid">
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/table.jpg"} alt="table salt" onClick={imClicked} />
          <figcaption>table salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/sea.jpg"} alt="sea salt" onClick={imClicked} />
          <figcaption>sea salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/pink.jpg"} alt="pink salt" onClick={imClicked} />
          <figcaption>himalayan pink salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/kosher.jpg"} alt="kosher salt" onClick={imClicked} />
          <figcaption>kosher salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/flake.jpg"} alt="flake salt" onClick={imClicked} />
          <figcaption>flake salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/grey.jpg"} alt="grey salt" onClick={imClicked} />
          <figcaption>grey salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/hawaiian sea.jpg"} alt="hawaiian salt" onClick={imClicked} />
          <figcaption>hawaiian sea salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "/img/black.jpg"} alt="black salt" onClick={imClicked} />
          <figcaption>black salt.</figcaption>
        </figure>
      </div>
      <p>
        all images taken from <a href="https://seasalt.com/salt-101/gourmet-salt">seasalt.com</a>.
      </p>
    </section>
  )
}
