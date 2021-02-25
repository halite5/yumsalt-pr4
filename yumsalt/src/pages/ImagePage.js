import React from 'react'


export default function ImagePage() {
  return (
    <section>
      <div className="image-grid">
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/table.jpg"} alt="table salt" />
          <figcaption>table salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/sea.jpg"} alt="sea salt" />
          <figcaption>sea salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/pink.jpg"} alt="pink salt" />
          <figcaption>himalayan pink salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/kosher.jpg"} alt="kosher salt" />
          <figcaption>kosher salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/flake.jpg"} alt="flake salt" />
          <figcaption>flake salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/grey.jpg"} alt="grey salt" />
          <figcaption>grey salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/hawaiian sea.jpg"} alt="hawaiian salt" />
          <figcaption>hawaiian sea salt.</figcaption>
        </figure>
        <figure className="media-grid-item">
          <img src={process.env.PUBLIC_URL + "./img/black.jpg"} alt="black salt" />
          <figcaption>black salt.</figcaption>
        </figure>
      </div>
      <p>
        all images taken from <a href="https://seasalt.com/salt-101/gourmet-salt">seasalt.com</a>.
      </p>
    </section>
  )
}
