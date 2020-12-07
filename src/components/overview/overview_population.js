import React, { useEffect } from 'react'
import {  Grid, Container } from 'semantic-ui-react'
import { PartOverall } from './overview_apps/part_overall'
import { Inserts } from './overview_apps/inserts'
import { EdmRib } from './overview_apps/edm_rib_areas'
import { UniMan } from './overview_apps/unitized_manifolds'
import { SpecTools } from './overview_apps/special_features'
import { Breakdown } from './overview_apps/breakdown'
import { QuoteSelectionMenu } from './overview_menu'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const nameList = [
  'Part Overall', 'Inserts', 'EDM Rib Areas', 'Special Tools', 'Unitized Manifolds', 'Breakdown'
]

const Wrapper = (props) => {
  return <Grid.Column stretched computer={2} widescreen={2} tablet={8} largeScreen={5} mobile={16}>{props.children}</Grid.Column>
}

export const OverviewContent = (props) => {
  const { _tabList } = useSelector((state) => state.tabs)
  const responseIndicator = Math.floor(16/_tabList.length*1.5)
  const responseLogic = responseIndicator > 5 && responseIndicator < 16 ? responseIndicator : _tabList.length === 1 ? 16 : 5
  let useList = _.sortBy([..._tabList])
  useList = _.reverse(useList)
  return (
    <Container fluid >
      <QuoteSelectionMenu nameList={_tabList}/>
      <Grid centered id={props.id} columns={_tabList.length} divided='vertically'>
          {_tabList.length > 0 ? useList.map((i) => {
            return (
                i === nameList[0]
                ? <Grid.Column stretched computer={3} widescreen={3}  tablet={8} largeScreen={5} mobile={16}><PartOverall/></Grid.Column>
                : i === nameList[1]
                ? <Wrapper><Inserts/></Wrapper>
                : i === nameList[2]
                ? <Wrapper><EdmRib/></Wrapper>
                : i === nameList[3]
                ? <Wrapper><SpecTools/></Wrapper>
                : i === nameList[4]
                ? <Wrapper><UniMan/></Wrapper>
                : i === nameList[5]
                ? <Grid.Column stretched computer={responseLogic} widescreen={responseLogic} tablet={8} largeScreen={responseLogic} mobile={16}><Breakdown /></Grid.Column>
                : null
            )
          }):null}
      </Grid>
    </Container>
  )
}