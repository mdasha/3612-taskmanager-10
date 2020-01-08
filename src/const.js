const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

const WEEK_IN_MILLISECONDS = DAYS_IN_WEEK * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;

const COLOR = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`
};

const colors = [COLOR.BLACK, COLOR.YELLOW, COLOR.BLUE, COLOR.GREEN, COLOR.PINK];

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

const FilterType = {
  ALL: `all`,
  ARCHIVE: `archive`,
  FAVOURITES: `favourites`,
  OVERDUE: `overdue`,
  REPEATING: `repeating`,
  TAGS: `tags`,
  TODAY: `today`
};

export {WEEK_IN_MILLISECONDS, colors, days, monthNames, FilterType, COLOR};
