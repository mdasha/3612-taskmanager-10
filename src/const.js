const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

const WEEK_IN_MILLISECONDS = DAYS_IN_WEEK * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

const days = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const monthNames = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

export {WEEK_IN_MILLISECONDS, colors, days, monthNames};
