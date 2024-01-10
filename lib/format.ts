import { formatDistanceToNowStrict } from "date-fns";

export function formatMoney(amount: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function formatTime(from: Date) {
  return formatDistanceToNowStrict(from, { addSuffix: true });
}
