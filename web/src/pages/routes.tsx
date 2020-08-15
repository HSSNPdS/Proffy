import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landind from './landing'
import TeacherList from './TeacherList'
import TeacherForm from './TeacherForm'

function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landind}/>
      <Route path="/study" component={TeacherList}/>
      <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
  )
}

export default Routes;