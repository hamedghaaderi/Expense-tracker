export const formattedDate = (date) => {
  return date.toLocaleDateString("fa-IR", {
    day: "2-digit",
    month: "long",
    year: "2-digit",
  });
};
