interface UserCardProps {
  name?: string
  age?: number
  role?: string
}

function UserCard({ name = 'Unknown User', age, role = 'No role assigned' }: UserCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>Age: {age !== undefined ? age : 'N/A'}</p>
      <p>Role: {role}</p>
    </div>
  )
}

export default UserCard
