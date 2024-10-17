// script.js

// Chord data with image paths
const chords = {
    'C Major': 'images/C_major.png',
    'G Major': 'images/G_major.png',
    'A Minor': 'images/A_minor.png',
    'F Major': 'images/F_major.png',
    // Add more chords as needed
};

// Initialize the app on window load
window.onload = () => {
    populateChordOptions();
    addEventListeners();
};

// Populate the select dropdown with chord options
function populateChordOptions() {
    const chordSelect = document.getElementById('chord-select');

    for (let chordName in chords) {
        let option = document.createElement('option');
        option.value = chordName;
        option.textContent = chordName;
        chordSelect.appendChild(option);
    }
}

// Add event listeners to buttons
function addEventListeners() {
    const addChordBtn = document.getElementById('add-chord-btn');
    const clearChordsBtn = document.getElementById('clear-chords-btn');

    addChordBtn.addEventListener('click', addChord);
    clearChordsBtn.addEventListener('click', clearChords);
}

// Function to add selected chord to display
function addChord() {
    const chordSelect = document.getElementById('chord-select');
    const chordDisplay = document.getElementById('chord-display');
    const selectedChord = chordSelect.value;

    // Create chord card
    let chordCard = document.createElement('div');
    chordCard.className = 'chord-card';

    // Create chord image
    let chordImage = document.createElement('img');
    chordImage.src = chords[selectedChord];
    chordImage.alt = selectedChord + ' diagram';

    // Create chord label
    let chordLabel = document.createElement('p');
    chordLabel.textContent = selectedChord;

    // Append image and label to chord card
    chordCard.appendChild(chordImage);
    chordCard.appendChild(chordLabel);

    // Append chord card to display area
    chordDisplay.appendChild(chordCard);
}

// Function to clear all chords from display
function clearChords() {
    const chordDisplay = document.getElementById('chord-display');
    chordDisplay.innerHTML = '';
}
