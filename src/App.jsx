import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import styled from 'styled-components'
import Card from './components/card/Card'
import AddTask from './components/addTask/AddTask'

const Section = styled.section`
  width: 100%;
  height: 100%;
  margin: 20px 0px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (localStorage.getItem("tasks") != null && localStorage.getItem("tasks") != "[]") {
      setTasks(localStorage.getItem("tasks").slice(1, -1).split(',').map(item => item.trim()));
    }

  }, [])

  return (
    <main>
      <Header />
      <Section>
        {tasks.map((txt, index) => <Card key={txt} tasks={tasks} setTask={setTasks} idx={index} text={txt} />)}
        <AddTask tasks={tasks} setTask={setTasks} />
      </Section>
    </main>
  )
}

export default App
