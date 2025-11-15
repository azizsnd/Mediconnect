// utils/pharmacyStatus.ts
export const getPharmacyStatus = (type: "day" | "night", isGuard: boolean) => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Dimanche
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const hour = now.getHours()+1;
  const minute = now.getMinutes();
  const currentTime = hour * 60 + minute;
  // Config identique à ton backend
  const dayMorning = { open: 8 * 60 + 30, close: 13 * 60 };
  const dayAfternoon = { open: 15 * 60, close: 19 * 60 + 30 };
  const night = { open: 19 * 60 + 30, close: 8 * 60 + 30 }; // traverse minuit

  const inDay =
    (currentTime >= dayMorning.open && currentTime <= dayMorning.close) ||
    (currentTime >= dayAfternoon.open && currentTime <= dayAfternoon.close);
  const inNight =
    currentTime >= night.open || currentTime <= night.close; // traversée minuit
  if (type === "night") {
    return inNight ? "Ouvert" : "Fermé";
  }

  if (type === "day") {
    if (isWeekend && !isGuard) return "Fermé";
    return inDay ? "Ouvert" : "Fermé";
  }

  return "Fermé";
};
