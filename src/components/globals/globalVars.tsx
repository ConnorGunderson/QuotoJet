import { Form, Table } from 'semantic-ui-react'
import React from 'react'
// const _ = require('lodash')

export const matOptions = [
    { key: '6061A', text: '6061 Aluminum', value: '6061 Aluminum' },
    { key: '7075A', text: '7075 Aluminum', value: '7075 Aluminum' },
    { key: 'P20S', text: 'P20 Steel', value: 'P20 Steel' }
]

export const mudOptions = [
    { key: 'none', text: 'None', value: 'None' },
    { key: '4x6', text: '4 x 6', value: '4 x 6' },
    { key: '8x10', text: '8 x 10', value: '8 x 10' }
]
export const surfaceOptions = [
    { key: '320B3', text: '320 B3 Paper', value: '320 B3 Paper' },
    { key: 'sandblast', text: 'SandBlast', value: 'SandBlast' },
    { key: '400B2', text: '400 B2 Paper', value: '400 B2 Paper' },
    { key: '600B1', text: '600 B1 Paper', value: '600 B1 Paper' },
    { key: 'DBA1', text: 'Diamond Buff A1', value: 'Diamond Buff A1' }
]



export const dimensionPanels = [
    {
        key: 'dimensions',
        title: 'Dimensions X|Y|Z',
        content: {
            content: (
                <div>
                    <Form.Group>
                        <Form.Input 
                            placeholder='X' 
                            control='input' 
                            width={4}
                        />
                        <Form.Input 
                            placeholder='Y' 
                            control='input' 
                            width={4}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input 
                            placeholder='Z' 
                            control='input' 
                            width={4}
                        />
                        <Form.Input 
                            placeholder='#' 
                            control='input' 
                            width={4}
                        />
                    </Form.Group>
                </div>
            )
        }
    }
]

export const breakdownPanels = [
    {
        key: 'startingGoods',
        title: 'Basic Starting Costs',
        content: {
            content: (
                <Table basic='very' fixed >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell content='Tool Design'/>
                            <Table.HeaderCell content='Block Price'/>
                            <Table.HeaderCell content='Core Cavity & Inserts CNC'/>
                            <Table.HeaderCell content='# of EDM Areas (Ribs)'/>
                            <Table.HeaderCell content='Boring Mill Slots, Holes, and Waterlines'/>
                            <Table.HeaderCell content='Rails Material and 2D Machining'/>
                        </Table.Row>
                    </Table.Header>
                </Table>
            )
        }
    },
    {
        key: 'basicToolMaking',
        title: 'Basic Toolmaking',
        content: {
            content: (
                <Table basic='very' fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell content='Plates'/>
                            <Table.HeaderCell content='Springs & EJ Pins'/>
                            <Table.HeaderCell content='2D Machining hrs'/>
                            <Table.HeaderCell content='Benching & Spotting'/>
                            <Table.HeaderCell content='Fittings & Safety Straps'/>
                            <Table.HeaderCell content='Sprue Locator Ring'/>
                            <Table.HeaderCell content='Assembly'/>
                        </Table.Row>
                    </Table.Header>
                </Table>
            )
        }
    },
    {
        key: 'specialTool',
        title: 'Special Tool Features',
        content: {
            content: (
                <Table basic='very' fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell content='Manifold & Drops'/>
                            <Table.HeaderCell content='Heated Tool'/>
                        </Table.Row>
                        <Table.Body>

                        </Table.Body>
                    </Table.Header>
                </Table>
            )
        }
    },
    {
        key: 'totals',
        title: 'Totals',
        content: {
            content: (
                <Table basic='very' fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell content='Quickbooks'/>
                            <Table.HeaderCell content='Total Hours'/>
                            <Table.HeaderCell content='Weeks'/>
                            <Table.HeaderCell content='Design Hours'/>
                            <Table.HeaderCell content='CNC/3D Machining/EDM Hours'/>
                            <Table.HeaderCell content='2D Machining & Toolmaking Hours'/>
                        </Table.Row>
                    </Table.Header>
                </Table>
            )
        }
    },
]

