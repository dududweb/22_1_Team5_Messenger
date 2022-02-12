export const DATE_NOW = 'DATE_NOW';

export const add_current_date = date => {
  return {
    type: DATE_NOW,
    date: date,
  };
};
