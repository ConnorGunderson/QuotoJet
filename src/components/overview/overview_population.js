import React from 'react'
import {  Grid, Container } from 'semantic-ui-react'
import { PartOverall } from './overview_apps/part_overall'
import { Inserts } from './overview_apps/inserts'
import { EdmRib } from './overview_apps/edm_rib_areas'
import { UniMan } from './overview_apps/unitized_manifolds'
import { SpecTools } from './overview_apps/special_features'
import { Breakdown } from './overview_apps/breakdown'
import { QuoteSelectionMenu } from './overview_menu'
import { useSelector } from 'react-redux'
const _ = require('lodash')

export const OverviewContent = (props) => {
  return (
    <Container fluid>
      <QuoteSelectionMenu />
      <Grid centered id={props.id}>
        <Grid.Row>
          {/* <h1>{shownTabs}</h1> */}
        </Grid.Row>
      </Grid>
    </Container>
  )
}