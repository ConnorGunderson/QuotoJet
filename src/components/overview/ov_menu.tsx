import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { SHOW_TAB, HIDE_TAB } from '../../features/overview-logic/visual_logic'


const nameList = [
  'Unitized Manifolds',
  'Special Tools',
  'Part Overall',
  'Inserts',
  'EDM Rib Areas',
  'Breakdown'
]


export const QuoteSelectionMenu = (props:any) => {
  const { _tabList } = useSelector((state: RootStateOrAny) => state.tabs)
  const dispatch = useDispatch()
  
  


  const handleItemClick =  (e : any) => {
    e.preventDefault()
    const targ = e.target.innerText;
    if (!_tabList.includes(targ)) {
      dispatch(SHOW_TAB(targ))
    } else {
      dispatch(HIDE_TAB(targ))
    }
  }
  
  return (
    <div>
      <Menu stackable text>
        {
          nameList.map((i: any, index: any) => {
            return (
              <div className={props.nameList.includes(i) ? 'headBorder' : undefined } style={props.nameList.includes(i) ? {color:'red'}: {}}>
                <Menu.Item
                  key={index}
                  name={i}
                  onClick={(e) => handleItemClick(e)}
                />
              </div>
            )
          })
        }
      </Menu>
    </div>
  )
}

