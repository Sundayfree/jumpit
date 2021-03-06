import {
  GET_HIGHBLOOD_DATA,
  GET_SUGAR_DATA,
  CLEAR_HIGHBLOOD,
  CLEAR_SUGAR,
  READ_STEPS,
  READ_FLOORS,
  READ_DISTANCE,
  CLEAR_STEPS,
  CLEAR_FLOORS,
  CLEAR_DISTANCE
} from '../actiontypes';

const initState = {
  labels: [],
  datasets: [],
  isLoading: false
};

export const highblood = (state = initState, action) => {
  switch (action.type) {
    case GET_HIGHBLOOD_DATA: {
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_HIGHBLOOD: {
      return { ...initState };
    }
    default:
      return state;
  }
};

export const sugar = (state = initState, action) => {
  switch (action.type) {
    case GET_SUGAR_DATA: {
      const { datasets, labels } = action.payload;

      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_SUGAR: {
      return { ...initState };
    }
    default:
      return state;
  }
};

export const steps = (state = initState, action) => {
  switch (action.type) {
    case READ_STEPS: {
      const { datasets, labels } = action.payload;
      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_STEPS: {
      return { ...initState };
    }
    default:
      return state;
  }
};
export const floors = (state = initState, action) => {
  switch (action.type) {
    case READ_FLOORS: {
      const { datasets, labels } = action.payload;
      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_FLOORS: {
      return { ...initState };
    }
    default:
      return state;
  }
};
export const distances = (state = initState, action) => {
  switch (action.type) {
    case READ_DISTANCE: {
      const { datasets, labels } = action.payload;
      return { ...initState, datasets, labels, isLoading: true };
    }
    case CLEAR_DISTANCE: {
      return { ...initState };
    }
    default:
      return state;
  }
};
