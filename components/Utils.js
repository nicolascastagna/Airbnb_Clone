export const dateParser = (num) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  let timestamp = Date.parse(num);

  let date = new Date(timestamp).toLocaleDateString("en-EN", options);

  return date.toString();
};
