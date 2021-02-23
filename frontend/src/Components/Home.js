import React from 'react'
import Timer from "./Timer/Timer"
import Preloader from "./PreLoder/Preloder"
function Home() {
    return (
        <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Preloader />
      </div>
    </div>
    )
}
export default Home
