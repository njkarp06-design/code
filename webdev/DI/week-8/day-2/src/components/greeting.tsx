interface GreetingProps {
  name: string
  messageCount: number
}

function Greeting({ name, messageCount }: GreetingProps) {
  return (
    <div style={{ padding: '12px', background: '#f0f4ff', borderRadius: '6px', marginBottom: '12px' }}>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new message{messageCount !== 1 ? 's' : ''}.</p>
    </div>
  )
}

export default Greeting
