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
  const [activeItem, setActiveItem] = useState('Overview')
  const handleClick = (e: any) => setActiveItem(e.target.innerText)
  return (
    <div id={props.id}>
      <Menu pointing secondary  stackable>
        <Menu.Item
          key={1}
          name='Estimates'
          active={activeItem === 'Estimates'}
          onClick={(e) => handleClick(e)}
        />
        <Menu.Item
          key={2}
          name='Overview'
          active={activeItem === 'Overview'}
          onClick={(e) => handleClick(e)}
          position='left'
        />
        <Menu.Item
          key={6}
          name='Settings'
          active={activeItem === 'Settings'}
          onClick={(e) => handleClick(e)}
          position='right'
        />
      </Menu>
      <Segment id='mainSegment' basic padded>
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
