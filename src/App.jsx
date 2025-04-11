import { useState } from 'react'
import Entry from "./Entry"

function App() {


  return (
    <>
    <h1 style={{textAlign: "center"}}>Söderströms' cat shelter</h1>
      <div className="contacts">
        <Entry img="/src/images/mr-whiskerson.png" name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
        <Entry img="/src/images/fluffykins.png" name="Fluffykins" phone="(212) 555-2345" email="fluff@me.com"/>
        <Entry img="/src/images/felix.png" name="Felix" phone="(212) 555-4567" email="thecat@hotmail.com"/>
        <Entry img="/src/images/pumpkin.png" name="Pumpkin" phone="(0800) CAT KING" email="pumpkin@scrimba.com"/>
        </div>
    </>
  )
}

export default App 
