import React from 'react'
import {  Grid, Container } from 'semantic-ui-react'
import { PartOverall } from './overview_apps/part_overall'
import { Inserts } from './overview_apps/inserts'
import { EdmRib } from './overview_apps/era'
import { UniMan } from './overview_apps/uni_man'
import { SpecTools } from './overview_apps/spec_feat'
import { Breakdown } from './overview_apps/breakdown'
import { QuoteSelectionMenu } from './ov_menu'
import { useSelector } from 'react-redux'
import _ from 'lodash'

const nameList = [
  'Part Overall', 'Inserts', 'EDM Rib Areas', 'Special Tools', 'Unitized Manifolds', 'Breakdown'
]

const Wrapper = (props) => {
  return <Grid.Column stretched computer={6} widescreen={2} tablet={props.tablet} largeScreen={2} mobile={16}>{props.children}</Grid.Column>
}

export const OverviewContent = (props) => {
  const { _tabList } = useSelector((state) => state.tabs)

  const t = (d) => _tabList.length === d
  let useList = _.sortBy([..._tabList])
  useList = _.reverse(useList)
  return (
    <Container fluid >
      <QuoteSelectionMenu nameList={_tabList}/>
      <Grid centered id={props.id} columns={_tabList.length} divided='vertically'>
          {_tabList.length > 0 ? useList.map((i) => {
            return (
                i === nameList[0]
                ? <Grid.Column stretched computer={6} widescreen={2}  tablet={_tabList.length === 1 ? 16 : 4} largeScreen={2} mobile={16}><PartOverall/></Grid.Column>
                : i === nameList[1]
                ? <Wrapper tablet={_tabList.length === 1 ? 16 : 4}><Inserts/></Wrapper>
                : i === nameList[2]
                ? <Wrapper tablet={_tabList.length === 1 ? 16 : 4}><EdmRib/></Wrapper>
                : i === nameList[3]
                ? <Wrapper tablet={_tabList.length === 1 ? 16 : 4}><SpecTools/></Wrapper>
                : i === nameList[4]
                ? <Wrapper tablet={_tabList.length === 1 ? 16 : 4}><UniMan/></Wrapper>
                : i === nameList[5]
                ? <Grid.Column stretched computer={10} widescreen={t(1) ? 16 : t(2) ? 14 : t(3) ? 12 : t(4) ? 10 : t(5) ? 8 : t(6) ? 6 : undefined} tablet={_tabList.length === 1 ? 16 : 12} largeScreen={6} mobile={16}><Breakdown /></Grid.Column>
                : null
            )
          }):null}
      </Grid>
    </Container>
  )
}