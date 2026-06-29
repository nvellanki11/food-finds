import "./App.css"
import { useState } from "react"
import CenterBoard from "./Components/CenterBoard"
import BanList from "./Components/BanList"

export default function App() {

  const [banned, setBanned] = useState([])
  const [hasFetched, setHasFetched] = useState(false)
  return (
    <div>
      <h1 className="title">Food Finds</h1>
      <h2 className="subheader">Recipe Ideas for your next cooking session</h2>

      <div className="flex">
        <CenterBoard banned={banned} setBanned={setBanned} setHasFetched={setHasFetched}/>
        {hasFetched && <BanList banned={banned} setBanned={setBanned}/>}
      </div>

    </div>

  )
}
