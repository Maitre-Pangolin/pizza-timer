let counterValue = 1;
let intervalId;
let resetValue;

function increaseCounter() {
    counterValue++;
    if (counterValue === resetValue + 1) {
        counterValue = 1;
    }
    document.getElementById('counter').textContent = counterValue;
}

function startCounter(intervalMinutes) {
    clearInterval(intervalId); // Clear any existing intervals
    intervalId = setInterval(() => {
        increaseCounter();
    }, intervalMinutes * 60000); // Convert minutes to milliseconds
}


document.getElementById('applyButton')?.addEventListener('click', () => {
    const intervalInput = document.getElementById('intervalInput');
    const resetValueInput = document.getElementById('resetValueInput');
    const intervalMinutes = parseInt(intervalInput.value);
    resetValue = parseInt(resetValueInput.value);
    console.log('Reset Counter')

    document.getElementById('applyButton').textContent = '🍕 Reset Counter 🍕'
    counterValue = 1;
    startCounter(intervalMinutes);
    document.getElementById('counter').textContent = counterValue;
}
);
