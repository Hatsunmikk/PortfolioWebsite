import Head from 'next/head'
import HomePage from '../components/HomePage'
import HeadTag from '../components/HeadTag'

export default function Home({ currentTheme }) {

  return (
    <div>
      <HeadTag page='Home'/>
      <HomePage currentTheme={currentTheme} />
    </div>
  )
}