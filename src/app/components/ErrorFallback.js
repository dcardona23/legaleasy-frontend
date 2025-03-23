import Button from 'react-bootstrap/Button'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
    <p>Something went wrong: { error.message }</p>
    <Button variant="primary" onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  )
}
  
export default ErrorFallback;