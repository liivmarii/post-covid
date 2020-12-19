import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Api from './Api'
import { Graph, Table } from './components'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endpoint:
        'data?filters=areaType=nation;areaName=england&structure={"date":"date","newCases":"newCasesByPublishDate"}',
      covidData: [],
    }
    this.getData = this.getData.bind(this)
  }

  getData = async () => {
    try {
      const response = await Api.get(this.state.endpoint)
      this.setState({ covidData: response.data.data })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div className='app py-5'>
        <Graph dataset={this.state.covidData} />
        <Container>
          <Row>
            <Col>
              <Table dataset={this.state.covidData} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
