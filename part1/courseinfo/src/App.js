const Header = (props) => {
  console.log(props.course)
  return (
    <div>
      <p>This course is the: {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <p>The various parts include: {part1.name}, {part2.name}, {part3.name}</p>
    </div>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <div>
      <p>The total number of exercises include: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data',
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App