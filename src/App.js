import React from 'react';
import { Navbar, HomePage, Footer } from './Home';
import { NewExercise } from './new-exercise.js';
import { DiscussionPage } from './discussion.js';
import { ExercisePage } from './exercise';
import { DetailsPage } from './exercise-details';
import { PastExercises } from './past-exercises';
import { ProgressPage } from './progress-page.js';
import { LoginPage } from './login';

function App(props) {
  return (
    <div className='home-exa'>
      <Navbar />

      {/*<LoginPage />*/}
      <HomePage />
      {/*<DetailsPage exerciseObj={props.exercises[0]} />*/}
      {/*<ProgressPage /> */}
      {/*<PastExercises />*/}
      {/* <ExercisePage exercises={props.exercises} /> */}
      {/*<NewExercise /> */}
      {/* <DiscussionPage messageData={props.messageData} /> */}


      <Footer />

    </div>
  )
}

export default App;


