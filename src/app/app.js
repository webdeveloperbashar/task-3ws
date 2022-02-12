import React from 'react'
import { Helmet } from "react-helmet"
import Routers from '../routes';
const App = () => {
  return (
    <>
      <Helmet>
        <title>Triple W Solutions Task</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Routers />
    </>
  )
}

export default App;