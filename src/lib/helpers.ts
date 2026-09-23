export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTimeInNigeria(): Date {
  return new Date();
}

export function formatTimeForNigeria(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Africa/Lagos",
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  formattedTime += " WAT";

  return formattedTime;
}

// Aliases for backwards compatibility
export const getCurrentTimeInItaly = getCurrentTimeInNigeria;
export const formatTimeForItaly = formatTimeForNigeria;

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
