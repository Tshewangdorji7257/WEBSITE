const DateFormat = (date: string): string =>
  date && new Date(date).toDateString()

export default DateFormat
