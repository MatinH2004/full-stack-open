export default function Total({ course }) {
  const sum = course.parts.reduce((acc, n) => acc + n.exercises, 0);
  return (
    <p>Number of total exercises: {sum}</p>
  )
}