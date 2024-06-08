import styles from './Nav.module.css'

const Nav = ({ active }) => {
  return (
    <nav>
      {items.map(({ url, name, key }) => (
        <a className={`${styles.link} ${active === key && styles.activeLink}`} href={url} key={key}>{name}</a>
      ))}
    </nav>
  )
}

const items = [
  {
    key: 'home',
    url: '/',
    name: 'Home'
  },
  {
    key: 'dashboard',
    url: '/dashboard',
    name: 'Dashboard'
  }
]

export default Nav
