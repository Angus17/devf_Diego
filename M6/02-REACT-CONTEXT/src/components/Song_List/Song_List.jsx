import { useEffect, useState } from "react"
import "./Song_List.css"
import canciones from "@/assets/listaCanciones.json"

const Song_List = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setList(canciones)
            setLoading(false)
        }, 2000)
    }, [])

  return (
    <section className='row-container'>
    {
      loading
        ? <h2>Cargando...</h2>
        : list.map((song) => (
          <div key={song.id} className='row-song'>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
        ))
      }
  </section>
  )
}

export default Song_List