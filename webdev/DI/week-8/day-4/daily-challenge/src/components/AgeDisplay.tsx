import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

function AgeDisplay() {
    const age = useSelector((state: RootState) => state.age.age)
    const loading = useSelector((state: RootState) => state.age.loading)

    return (
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            {loading ? (
                <div style={{ fontSize: '48px', animation: 'spin 1s linear infinite', display: 'inline-block' }}>
                    ⏳
                </div>
            ) : (
                <h1 style={{ fontSize: '72px', margin: 0 }}>{age}</h1>
            )}
            <p style={{ fontSize: '20px', color: '#666' }}>years old</p>
        </div>
    )
}

export default AgeDisplay
