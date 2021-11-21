export default function TodoCounter({ todos }) {
  const completeCount = (todos || []).filter((todo) => todo.complete).length
  if(!completeCount) return false;
  return (
    <p> {completeCount} completed </p>
  )
}