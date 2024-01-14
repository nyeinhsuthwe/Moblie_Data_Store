import React from 'react'
import Home from './Home'

const Data = () => {
    const data =[
        {id:1, amount:'480mb', price:'999ks'},
        {id:1, amount:'400mb', price:'899ks'},
        {id:1, amount:'575mb', price:'1199ks'},
        {id:1, amount:'1GB', price:'2199ks'},
        {id:1, amount:'1400mb', price:'2899ks'},
        {id:1, amount:'2GB', price:'4299ks'},
        {id:1, amount:'2350mb', price:'4899ks'},
        {id:1, amount:'385mb', price:'799ks'},
    ]
  return (
    <div>
     <Home data={data}/>
    </div>
  )
}

export default Data