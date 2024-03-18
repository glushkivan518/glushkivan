# glushkivan

A collection of utilities for time and tempo calculations in music.

## Installation

You can install this module via npm: `npm install glushkivan`

## Usage

```javascript
const tempoTools = require('tempo-tools');

// Example usage
const bpm = 120;
const beats = 16;
const duration = tempoTools.phraseDuration(beats, bpm);
console.log('Duration of the phrase:', tempoTools.millisecondsToTime(duration));

const newBpm = tempoTools.calculateTempo(beats, duration);
console.log('Calculated tempo:', newBpm, 'BPM');
```

