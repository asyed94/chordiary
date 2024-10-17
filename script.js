// script.js

// Chord data
const chords = {
    'C Major': {
        key: 'C',
        suffix: 'major',
        positions: [
            {
                frets: [0, 0, 0, 3],
                fingers: [0, 0, 0, 3],
            },
        ],
    },
    'G Major': {
        key: 'G',
        suffix: 'major',
        positions: [
            {
                frets: [0, 2, 3, 2],
                fingers: [0, 2, 4, 3],
            },
        ],
    },
    'A Minor': {
        key: 'Am',
        suffix: 'minor',
        positions: [
            {
                frets: [2, 0, 0, 0],
                fingers: [1, 0, 0, 0],
            },
        ],
    },
    'F Major': {
        key: 'F',
        suffix: 'major',
        positions: [
            {
                frets: [2, 0, 1, 0],
                fingers: [2, 0, 1, 0],
            },
        ],
    },
    'D Major': {
        key: 'D',
        suffix: 'major',
        positions: [
            {
                frets: [2, 2, 2, 0],
                fingers: [1, 2, 3, 0],
            },
        ],
    },
    'G7': {
        key: 'G',
        suffix: '7',
        positions: [
            {
                frets: [0, 2, 1, 2],
                fingers: [0, 2, 1, 3],
            },
        ],
    },
    'E Minor': {
        key: 'Em',
        suffix: 'minor',
        positions: [
            {
                frets: [0, 4, 3, 2],
                fingers: [0, 4, 3, 2],
            },
        ],
    },
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
    const selectedChordName = chordSelect.value;
    const chordData = chords[selectedChordName];

    // Create chord card
    let chordCard = document.createElement('div');
    chordCard.className = 'chord-card';

    // Create chord diagram container
    let chordDiagramContainer = document.createElement('div');
    chordDiagramContainer.className = 'chord-diagram';

    // Generate chord diagram using ChordJS
    generateChordDiagram(chordDiagramContainer, chordData);

    // Create chord label
    let chordLabel = document.createElement('p');
    chordLabel.textContent = selectedChordName;

    // Append diagram and label to chord card
    chordCard.appendChild(chordDiagramContainer);
    chordCard.appendChild(chordLabel);

    // Append chord card to display area
    chordDisplay.appendChild(chordCard);
}

// Function to generate chord diagram using ChordJS
function generateChordDiagram(container, chordData) {
    const instrument = new ChordJS({
        size: { width: 100, height: 150 },
        instrument: 'ukulele',
        theme: 'handdrawn',
    });

    // Render the chord diagram
    const svg = instrument.draw(chordData);

    // Append the SVG to the container
    container.appendChild(svg);
}

// Function to clear all chords from display
function clearChords() {
    const chordDisplay = document.getElementById('chord-display');
    chordDisplay.innerHTML = '';
}
