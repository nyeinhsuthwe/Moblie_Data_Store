import React from 'react'
import Login from './components/Login'
import "./App.css"
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from "react-router"
import Home from './components/Home'
import Indexx from './components/Indexx'
import Datacard from './components/Datacard'
import Voicecard from './components/Voicecard'
import Stk from './components/Stk'
import Topup from './components/Topup'
import Side from './components/Side'





const App = () => {
  
  return (
   
    <div className='grid '>
    
      <Routes>
        
        <Route path='/' element={<Indexx/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/datacard' element={<Datacard/>}/>
        <Route path='/Voicecard' element={<Voicecard/>}/>
        <Route path='/stk' element={<Stk/>}/>
         <Route path='/topup' element={<Topup/>}></Route>
         <Route path='/side' element={<Side/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App