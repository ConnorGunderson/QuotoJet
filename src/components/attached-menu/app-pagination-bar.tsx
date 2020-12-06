import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { QuoteOverviewApp } from './tabs/overview'
import { EstimateApp } from './tabs/estimates'
import { SettingsApp } from './tabs/settings'

interface Props {
  props : any,
  id : any,
  target : any,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}


export const AttachedMenu = (props: Props) => {
  const [activeItem, setActiveItem] = useState('Estimates')
  const handleClick = (e: any) => setActiveItem(e.target.innerText)
  return (
    <div id={props.id}>
      <Menu attached='top' borderless >
        <Menu.Item
          name='Estimates'
          active={activeItem === 'Estimates'}
          onClick={(e) => handleClick(e)}
        />
        <Menu.Item
          name='Overview'
          active={activeItem === 'Overview'}
          onClick={(e) => handleClick(e)}
          position='left'
        />
        <Menu.Item
          id='company'
          content={'COMPANY'}
        />
        <Menu.Item
          id='product'
          content={'PRODUCT_NAME'}
        />
        <Menu.Item
          id='total'
          content={'TOTAL'}
          position='right'
        />
        <Menu.Item
          name='Settings'
          active={activeItem === 'Settings'}
          onClick={() => handleClick}
          // position='right'
        />
      </Menu>
      <Segment attached='bottom' id='mainSegment'>
        {
            activeItem === 'Estimates'
          ? <EstimateApp id={'estimate'} />
          : activeItem === 'Overview' 
          ? <QuoteOverviewApp id={'quoteOverview'} />
          : <SettingsApp id={'settings'} />
        }
      </Segment>
    </div>
  )
}
