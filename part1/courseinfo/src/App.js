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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalnum={exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App