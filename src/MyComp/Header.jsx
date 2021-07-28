import React,{useState} from 'react'
import { Search, Notifications, ArrowDropDown , AcUnit } from '@material-ui/icons'
import './styles/header.scss'

export function Header() {

const [isScrolled, setIsScrolled] = useState(false)

window.onscroll = () => {
  
  setIsScrolled(window.pageYOffset !== 0 ? true : false)
  
}

  return (
    <header className= { isScrolled ? 'navbar scrolled' : 'navbar' }>
      <div className='container'>

        <div className='left'>

        <AcUnit />
          <img src='logo.png' alt='l' />

          <span>Home</span>
          <span>Movies</span>
          <span>WebSeries</span>
          <span>Short Film</span>
          <span>New and Popular</span>
          <span>My List</span>

        </div>

        <div className='right'>

          <Search className='icon' />
          <span>KID</span>

          <Notifications className='icon' />
          <img
            src='logo.png'
            alt='d' />

          <div className='profile' >
            
            <ArrowDropDown className='icon' />

            <div className='options'>
              <span>settings</span>
              <span>LogOut</span>
            </div>

          </div>

        </div>

      </div>
    </header>
  )
}
