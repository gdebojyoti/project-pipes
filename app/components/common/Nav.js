import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      {items.map(({ url, name, key }) => (
        <a className={styles.link} href={url} key={key}>{name}</a>
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
