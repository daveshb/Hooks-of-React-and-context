import React, { useEffect, useState } from 'react'

export const Message = () => {



    const [coors, setCoors] = useState({x:0, y:0})
   
    const {x, y} = coors

    useEffect(() => {
      
        const mouseMove = (e)=>{
             const coors = {x: e.x, y: e.y};
             console.log(coors);
             setCoors(coors);
             
            
        }

        window.addEventListener('mousemove',mouseMove );

    
      return () => {
        window.removeEventListener('mousemove',mouseMove );
      }
    }, [])
    



  return (
    <>
    <h3>Hii Mundo</h3>
    <h3>x:{x} y: {y}</h3>

    </>
  )
}
