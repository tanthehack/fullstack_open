const Header = (props) => {
  console.log(props.course.name)
  return (
    <div>
      <p>This course is the: {props.course.name}</p>
    </div>
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.course.parts
  return (
    <div>
      <p>The various parts include: {part1.name}, {part2.name}, {part3.name}</p>
    </div>
  )
}

const Total = (props) => {
  const [part1, part2, part3] = props.course.parts
  return (
    <div>
      <p>The total number of exercises include: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App