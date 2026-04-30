import React from 'react'
import { Section, Inner, Title, TableWrap, Table } from './style.js'

export default function ProgramSchedule({ title, rows, columns }) {
  if (!rows || rows.length === 0) return null
  return (
    <Section>
      <Inner>
        <Title>{title}</Title>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.level}</td>
                  <td>{row.days}</td>
                  <td>{row.time}</td>
                  <td>{row.age}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      </Inner>
    </Section>
  )
}
