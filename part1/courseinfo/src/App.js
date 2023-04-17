const Header = (props) => {
  return (
    <div>
      <p>This course is the: {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>The various parts include: {props.part1}, {props.part2}, {props.part3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>The total number of exercises include: {props.totalnum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} />
      <Total totalnum={part1.exercises + part2.exercises + part2.exercises} />
    </>
  )
}

export default App