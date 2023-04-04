export function formatDate(dateStr) {
  const date = new Date(dateStr);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const newDate = `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;

  return newDate;
}
