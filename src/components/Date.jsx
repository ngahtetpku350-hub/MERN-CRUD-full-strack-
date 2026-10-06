export const formatPostDate = (dateString) => {
  if (!dateString) return "";
  
  const date = new Date(dateString);
  
  return new Intl.DateTimeFormat("en-US", {
    month: "long",  // "September"
    day: "numeric", // "28"
    year: "numeric",// "2026"
    hour: "numeric",// "1"
    minute: "2-digit", // "00"
    hour12: true,   // Enables AM/PM
  }).format(date);
};