import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

const nameList = [
  'Part Overall', 'Inserts', 'EDM Rib Areas', 'Special Tools', 'Unitized Manifolds'
]

export const QuoteSelectionMenu = () => {
  const [ activeItem, setActiveItem ] = useState('EDMRibAreas')

  const handleItemClick =  (e : any) => setActiveItem(e.target.innerText)
  
  return (
      <Menu text>
        {
          nameList.map((i: any) => {
            return (
              <Menu.Item 
                name={i}
                active={activeItem === i}
                onClick={() => handleItemClick}
              />
            )
          })
        }
      </Menu>
  )
}

