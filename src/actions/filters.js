import {
  ASCENDING_POPULARITY,
  DESCENDINGLY_POPULARITY,
  ASCENDING_DATE,
  DESCENDINGLY_DATE
} from './actions';

export default filter => {
  if (filter === 'ascPopularity') {
    return ASCENDING_POPULARITY;
  }

  if (filter === 'descPopularity') {
    return DESCENDINGLY_POPULARITY;
  }

  if (filter === 'ascDate') {
    return ASCENDING_DATE;
  }

  if (filter === 'descDate') {
    return DESCENDINGLY_DATE;
  }
};
