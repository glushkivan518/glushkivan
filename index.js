const moment = require('moment');
const tempo = require('tempo');

/**
 * Function to convert beats per minute (BPM) to milliseconds per beat (MPB)
 * @param {number} bpm - Beats per minute
 * @returns {number} - Milliseconds per beat
 */
function bpmToMpb(bpm) {
  return 60000 / bpm;
}

/**
 * Function to calculate the duration of a musical phrase in milliseconds
 * @param {number} beats - Number of beats in the phrase
 * @param {number} bpm - Beats per minute
 * @returns {number} - Duration of the phrase in milliseconds
 */
function phraseDuration(beats, bpm) {
  const mpb = bpmToMpb(bpm);
  return beats * mpb;
}

/**
 * Function to convert milliseconds to a human-readable time format
 * @param {number} milliseconds - Duration in milliseconds
 * @returns {string} - Human-readable time format
 */
function millisecondsToTime(milliseconds) {
  return moment.utc(milliseconds).format('HH:mm:ss.SSS');
}

/**
 * Function to calculate the tempo of a musical phrase in beats per minute (BPM)
 * @param {number} beats - Number of beats in the phrase
 * @param {number} duration - Duration of the phrase in milliseconds
 * @returns {number} - Tempo of the phrase in BPM
 */
function calculateTempo(beats, duration) {
  const mpb = duration / beats;
  return Math.round(60000 / mpb);
}

module.exports = {
  bpmToMpb,
  phraseDuration,
  millisecondsToTime,
  calculateTempo
};
