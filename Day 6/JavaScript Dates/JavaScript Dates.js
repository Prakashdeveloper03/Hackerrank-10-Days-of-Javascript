function getDayName(dateString) {
  const d = new Date(dateString);

  const options = {
    weekday: "long",
  };

  return new Intl.DateTimeFormat("en-Us", options).format(d);
}
