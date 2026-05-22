import { useDispatch, useSelector } from 'react-redux'
import { ageUpAsync, ageDownAsync } from '../store/ageSlice'
import type { AppDispatch, RootState } from '../store/store'

function AgeControls() {
    const dispatch = useDispatch<AppDispatch>()
    const loading = useSelector((state: RootState) => state.age.loading)

    return (
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button
                type="button"
                onClick={() => dispatch(ageUpAsync())}
                disabled={loading}
                style={{ padding: '12px 30px', fontSize: '18px', background: '#2ecc71', color: '#fff', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
            >
                Age Up
            </button>
            <button
                type="button"
                onClick={() => dispatch(ageDownAsync())}
                disabled={loading}
                style={{ padding: '12px 30px', fontSize: '18px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '8px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
            >
                Age Down
            </button>
        </form>
    )
}

export default AgeControls
