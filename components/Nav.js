import React from 'react'
import { CoffeeOutlined} from '@ant-design/icons';
import css from '../styles/Nav.module.css';
import Link from 'next/link';


const Nav = () => {
  return (
    <div className={`${css.main}`} >
      <nav className={`${css.nav}`}>
        <ul>
          <li><Link href='/'>Trending</Link></li>
          <li>
            <label className={`${css.dropdown}`}>
              <div className={`${css.ddButton}`}>
                Movies
              </div>
              <input type="checkbox"  className={`${css.ddInput}`} id="test" />

              <ul className={`${css.ddMenu}`}>
                <li><Link href="/movie/popularMovie">Popular</Link></li>
                <li><Link href="/movie/nowPlayingMovie">Now Playing</Link></li>
                <li><Link href="/movie/upComingMovie">Upcoming</Link></li>
                <li><Link href="/movie/topRatedMovie">Top Rated</Link></li>
              </ul>
            </label>
          </li>
          <li><CoffeeOutlined style={{ fontSize: '3vmax' }} /></li>
          <li>
          <label className={`${css.dropdown}`}>
              <div className={`${css.ddButton}`}>
                TV Shows
              </div>
              <input type="checkbox"  className={`${css.ddInput}`} id="test" />

              <ul className={`${css.ddMenu}`}>
                <li><Link href="/show/popularShow">Popular</Link></li>
                <li><Link href="/show/airingTodayShow">Airing Today</Link></li>
                <li><Link href="/show/onTVShow">On TV</Link></li>
                <li><Link href="/show/topRatedShow">Top Rated</Link></li>
              </ul>
            </label>
          </li>
          <li><Link href='/search'>Search</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;