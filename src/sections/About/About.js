import React from 'react'
import {OurMission} from '../Home/OurMission'
import FormationProcess from './FormationProcess'
import AlleyLetter from './AlleyLetter'

export default function About() {
  return (
    <>
      <AlleyLetter/>
      <FormationProcess/>
      <OurMission about={true}/>
    </>
  )
}
