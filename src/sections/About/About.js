import React, { Suspense } from 'react';
import LoadingPage from '../../pages/LoadingPage';

const LazyAlleyLetter = React.lazy(() => import('./AlleyLetter'));
const LazyFormationProcess = React.lazy(() => import('./FormationProcess'));
const LazyOurMission = React.lazy(() => import('../Home/OurMission'));

export default function About({data}) {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <LazyAlleyLetter />
      <LazyFormationProcess />
      <LazyOurMission about={true} mission={data.mission} video={data.video} coreVal={data.coreVal} />
    </Suspense>
  )
}
