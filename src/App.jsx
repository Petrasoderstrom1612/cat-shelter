import { useState } from 'react'
import Entry from "./Entry"
import Whiskerson from "/src/images/mr-whiskerson.png"
import Fluffykins from "/src/images/fluffykins.png"
import Felix from "/src/images/felix.png"
import Pumpkin from "/src/images/pumpkin.png"

function App() {


  return (
    <>
    <h1 style={{textAlign: "center"}}>Söderströms' cat shelter</h1>
      <div className="contacts">
        <Entry img={Whiskerson} name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
        <Entry img={Fluffykins} name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com"/>
        <Entry img={Felix} name="Felix" phone="(212) 555-4567" email="thecat@hotmail.com"/>
        <Entry img={Pumpkin} name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com"/>
        </div>
    </>
  )
}

export default App 
