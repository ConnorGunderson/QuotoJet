import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { SHOW_TAB, HIDE_TAB } from '../../features/overview-logic/vis_logic'
const _ = require('lodash')


const nameList = [
  'Part Overall', 'Inserts', 'EDM Rib Areas', 'Special Tools', 'Unitized Manifolds', 'Breakdown'
]


export const QuoteSelectionMenu = () => {
  const { _tabList } = useSelector((state: RootStateOrAny) => state.tabs)
  const dispatch = useDispatch()

  const handleItemClick =  (e : any) => {
    e.preventDefault()
    console.log(_tabList, e.target.innerText)
    const targ = e.target.innerText;
    if (!_tabList.includes(targ)) {
      dispatch(SHOW_TAB(targ))
    } else {
      dispatch(HIDE_TAB(targ))
    }
  }
  
  return (
      <Menu text>
        {
          nameList.map((i: any, index) => {
            return (
              <Menu.Item 
                key={index}
                name={i}
                onClick={(e) => handleItemClick(e)}
              />
            )
          })
        }
      </Menu>
  )
}

