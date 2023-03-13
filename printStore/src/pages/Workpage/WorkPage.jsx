import React from 'react'
import styles from './WorkPage.module.css'
import bwArmy from '../../assets/pictures/bwArmy.png'
import bwBattle from '../../assets/pictures/bwBattle.png'
import bwBegger from '../../assets/pictures/bwBeggar.png'
import bwFamine from '../../assets/pictures/bwFamine.png'
import bwFeces from '../../assets/pictures/bwFeces.png'
import bwFlaying from '../../assets/pictures/bwFlaying.png'
import WorkList from './WorkList'


const intital_data = [
  {
    id: 'e1',
    image: bwArmy,
    title: 'untitled',
    media: 'Digital print',
    price: '100'
  },
  {
    id: 'e2',
    image: bwBattle,
    title: 'untitled',
    media: 'Digital print',
    price: '100'
  },
  {
    id: 'e3',
    image: bwBegger,
    title: 'untitled',
    media: 'Book',
    price: '100'
  },
  {
    id: 'e4',
    image: bwFamine,
    title: 'untitled',
    media: 'Book',
    price: '100'
  },
  {
    id: 'e5',
    image: bwFeces,
    title: 'untitled',
    media: 'Book',
    price: '100'
  },
  {
    id: 'e6',
    image: bwFlaying,
    title: 'untitled',
    media: 'Book',
    price: '100'
  },

]

const WorkPage = () => {

  return (
    <main className={`${styles.main}`}>
      <WorkList items={intital_data}/>
    </main>
  )
}

export default WorkPage