export const formatDateAndTime = (date: Date): string => {
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // To get AM/PM format
    });
  };