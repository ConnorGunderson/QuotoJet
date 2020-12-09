import React, { useState } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { QuoteOverviewApp } from './tabs/overview'
import { EstimateApp } from './tabs/estimates'
import { SettingsApp } from './tabs/settings'

// List of tabs on the menu bar
const tabList = ['Estimates', 'Overview', 'Settings']

// Main menu bar
export const MainMenu = (props: any) => {
  const [activeItem, setActiveItem] = useState('Overview')
  const handleClick = (e: any) => setActiveItem(e.target.innerText)
  return (
    <section id={props.id}>
      <Menu pointing secondary stackable id='mainMenu'>
        {
          tabList.map((tab:any, i:number) => {
            return (
              <Menu.Item
                  key={i}
                  name={tab}
                  active={activeItem === tab}
                  onClick={(e) => handleClick(e)}
                  position={i === tabList.length-1 ? 'right' : undefined}
              />
            )
          })
        }
      </Menu>
      <Segment id='mainSegment' basic padded>
        {
            activeItem === tabList[0]
          ? <EstimateApp id={'estimate'} />
          : activeItem === tabList[1] 
          ? <QuoteOverviewApp id={'quoteOverview'} />
          : <SettingsApp id={'settings'} />
        }
      </Segment>
    </section>
  )
}
