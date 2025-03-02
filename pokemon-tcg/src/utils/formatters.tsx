const formatDate = (date: string | undefined) => {
  if (!date) {
    return "---"
  }

  const dateObject = new Date(date);
  return `${dateObject.getDate()} - ${dateObject.getMonth()} - ${dateObject.getFullYear()}`
}

export {formatDate}