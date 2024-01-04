import React from 'react'
import {PeopleDataTable}  from './data-table'
import { columns } from './columns'
import { people } from '@/people'

type Props = {}

const PeoplePage = (props: Props) => {
  return (
    <div className='container py-10 mx-auto'>
        <PeopleDataTable columns={columns} data={people}/>
    </div>
  )
}

export default PeoplePage