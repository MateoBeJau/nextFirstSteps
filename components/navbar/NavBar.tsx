import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItem = [
  {path:'/about', text:'About'},
  {path:'/pricing', text:'Pricing'},
  {path:'/contact', text:'Contact'}

]

export const NavBar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

        <Link href={'/'} className='felx items-center'>
          <HomeIcon className='mr-2'/>
          <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>
        {
          navItem.map(navItem=>(
            <ActiveLink key={navItem.path} {...navItem}/>

          ))
        }
      


    </nav>
  )
}
 