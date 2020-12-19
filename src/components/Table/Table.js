import React from 'react'
import { Table as BootstrapTable } from 'react-bootstrap'

import './Table.css'

const Table = props => {
  const tableData = props.dataset

  return (
    <BootstrapTable className={'data-table'}>
      <thead>
        <tr>
          <th>Date</th>
          <th>New cases</th>
        </tr>
      </thead>
      <tbody className={'data-table_body'}>
        {tableData.map(data => (
          <tr key={data.date}>
            <td>{data.date}</td>
            <td>{data.newCases}</td>
          </tr>
        ))}
      </tbody>
    </BootstrapTable>
  )
}

export default Table
