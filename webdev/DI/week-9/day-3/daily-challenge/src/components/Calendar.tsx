type CalendarProps = {
    selectedDay: string
    onSelectDay: (day: string) => void
}

function Calendar({ selectedDay, onSelectDay }: CalendarProps) {
    const days = []
    for (let i = 0; i < 7; i++) {
        const date = new Date()
        date.setDate(date.getDate() + i)
        days.push(date.toISOString().split('T')[0])
    }

    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {days.map(day => (
                <button
                    key={day}
                    onClick={() => onSelectDay(day)}
                    style={{
                        padding: '8px 14px',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        background: selectedDay === day ? '#3498db' : '#eee',
                        color: selectedDay === day ? '#fff' : '#333',
                        fontWeight: selectedDay === day ? 'bold' : 'normal'
                    }}
                >
                    {day}
                </button>
            ))}
        </div>
    )
}

export default Calendar
