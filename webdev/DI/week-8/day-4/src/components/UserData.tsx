import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { fetchUser, clearUser } from '../store/userSlice'

function UserData() {
  const dispatch = useDispatch<AppDispatch>()
  const { data, loading, error } = useSelector((state: RootState) => state.user)

  function handleFetch() {
    dispatch(fetchUser(1))
  }

  function handleClear() {
    dispatch(clearUser())
  }

  return (
    <div className="user-card">
      <h2>User Profile</h2>

      <div className="btn-group">
        <button onClick={handleFetch} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch User'}
        </button>
        <button onClick={handleClear} className="secondary">
          Clear
        </button>
      </div>

      {error && (
        <p className="error-msg">Error: {error}</p>
      )}

      {data && (
        <table className="user-table">
          <tbody>
            <tr>
              <td>Name</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>@{data.username}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{data.website}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{data.address.city}</td>
            </tr>
            <tr>
              <td>Company</td>
              <td>{data.company.name}</td>
            </tr>
          </tbody>
        </table>
      )}

      {!data && !loading && !error && (
        <p className="hint">Click "Fetch User" to load data from the API.</p>
      )}
    </div>
  )
}

export default UserData
