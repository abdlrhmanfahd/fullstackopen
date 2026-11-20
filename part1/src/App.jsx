const App = (props) => {

  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header course={props.course} />
      <Content part1={props.part1} exercises1={props.exercises1} part2={props.part2} exercises2={props.exercises2} part3={props.part3} exercises3={props.exercises3} />
      <Total exercises1={props.exercises1} exercises2={props.exercises2} exercises3={props.exercises3} />  
    </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development'
  
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return(
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
export default App