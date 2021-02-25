import React from 'react'

export default function VideoPage() {
    return (
        <section>
            <div className="video-grid">
                <figure className="media-grid-item">
                    <video src={process.env.PUBLIC_URL + "./vid/chocknife.m4v"} controls></video>
                    <figcaption>chocolate knife</figcaption>
                </figure>
                <figure className="media-grid-item">
                    <video src={process.env.PUBLIC_URL + "./vid/candyknife.m4v"} controls></video>
                    <figcaption>candy knife</figcaption>
                </figure>
                <figure className="media-grid-item">
                    <video src={process.env.PUBLIC_URL + "./vid/seawaterknife.m4v"} controls></video>
                    <figcaption>seawater knife</figcaption>
                </figure>
            </div>
            <p>
                video sources:
      <ol>
                    <li>
                        <a href="https://www.youtube.com/watch?v=D2XNVFlh-DU">
                            sharpest chocolate kitchen knife in the world</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=BNP15d-cgu8">
                            sharpest candy kitchen knife in the world</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=pFG-nXUw6Ts">
                            sharpest seawater kitchen knife in the world</a>
                    </li>
                </ol>
            </p>
        </section>
    )
}
