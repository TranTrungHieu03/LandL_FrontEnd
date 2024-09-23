export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  console.log(dateString)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('vi-VN', options)
}
