import './Atoms.css'
import './Styles.css'
import { useState, useEffect } from "react"
import * as React from 'react'
import Screen from './components/Screen/Screen'
import Pagination from './components/Pagination/Pagination'
import Button from '@mui/material/Button'
import Footer from './components/Footer/Footer'
import { getPokemons, individualPokemon } from './functions'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [power, setPower] = useState(false)

  const switchPower = () => {
      setPower(!power)
      if (power) {
        getPokemons()
      } else {
        setPage(0)
      }
  }

  const lastPage = () => {
    setPage(Math.max(page - 1, 0))
  }

  const nextPage = () => {
      setPage(Math.min(page + 1, total))
  }

  useEffect(()=>{ 
    const fetchPokemons = async () => {
      try {
        const data = await getPokemons(10, 10 * page)
        const promise = data.results.map(async (item) => {
          return await individualPokemon(item.url)
        })
        const results = await Promise.all(promise)
        setPokemons(results)
        setTotal(Math.ceil(data.count / 10))
      } catch (error) {
  
      }
    }
    fetchPokemons()
  }, [page]);

  return (
    <div className="dFlexCol">
      <div className='centered'>
        <img className='centered mt3' src="../images/logo.png" alt='Logo' width="200px"/>
      </div>
      <div className='dividerLine mt3 mb3'></div>
      <header>
        <div className='headerContainer'>
          <div className='dFlex'>
            <img src="../images/figma_OnLight.png" width="70px" alt='Pokedex Light'/>
            <div className='dFlex ms4 mt3'>
              <div className='redLight lights'></div>
              <div className='yellowLight ms2 lights'></div>
              <div className='greenLight ms2 lights'></div>
            </div>
          </div>
          <div className='greenScreen'>
            <div className='powerSwitch'>
              <Button onClick={() => switchPower()} variant="contained" color={power ? "error" : "success"}>{power ? 'Power Off' : 'Power On'}</Button>
            </div>
          </div>
        </div>
        <div className='dividerLine mt3 mb3'></div>
      </header>
      <main>
        <Pagination power={power} page={page} total={total} prevPage={lastPage} nextPage ={nextPage}/>
        
        {power ? <Screen power={power} pokemons={pokemons}/> : <div className='centered'><img src="http://pa1.narvii.com/7276/08535fab2f12541cc514efa3a114cecd760d39ber1-200-200_00.gif" alt="pokemon screen saver" width="365px"/></div>}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;