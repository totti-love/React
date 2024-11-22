import { useState } from 'react'
import Header from './components/Header' //import header
import Calon from './components/Calon'  //import calon
import './App.css'

function App() {
  const [suaraSatu, setSuaraSatu] = useState(0)
  const [suaraDua, setSuaraDua] = useState(0)
  const [suaraTiga, setSuaraTiga] = useState(0)
  const [suaraTidakSah, setSuaraTidakSah] = useState(0)

  const handleClickSatu =() => setSuaraSatu(suaraSatu+1)
  const handleClickDua =() => setSuaraDua(suaraDua+1)
  const handleClickTiga =() => setSuaraTiga(suaraTiga+1)
  const handleClickTidakSah =() => setSuaraTidakSah(suaraTidakSah+1000*100)

  return (
    <>
    {/* {Panggil component Header} */}
      <Header/>
      <Calon nama ="Fitri Nandri"  perolehansuara={suaraSatu} onClick={handleClickSatu}/>
      <Calon nama ="RD PS" perolehansuara={suaraDua} onClick={handleClickDua}/>
      <Calon nama ="Yudha Bahar" perolehansuara={suaraTiga} onClick={handleClickTiga}/>
      <Calon nama ="Tidak Sah" perolehansuara={suaraTidakSah} onClick={handleClickTidakSah}/>
    </>
  )
}

export default App
