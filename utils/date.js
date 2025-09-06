export const formattedDate = (date) => {
  return date.toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const getRecentDaysDate = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
