import Part from './Part';

export default function Content({ course }) {
  return (
    <>
      {course.parts.map((part, idx) => (
        <Part key={idx} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
}