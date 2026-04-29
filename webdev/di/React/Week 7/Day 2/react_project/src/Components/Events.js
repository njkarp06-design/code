function Events() {
    const clickMe = () => alert('I was clicked');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(event.target.value);
        }
    };

    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
            <input onKeyDown={handleKeyDown} />
        </div>
    );
}

export default Events;
