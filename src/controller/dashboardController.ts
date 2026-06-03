import api from "../utils/api"

export async function dashboardLoader() {
  const { data: resData } = await api.get('/dashboard/stress-summary')
  for (const key in resData.data.totals) {
    if (Object.prototype.hasOwnProperty.call(resData.data.totals, key)) {
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      resData.data.totals[capitalizedKey] = resData.data.totals[key];
      delete resData.data.totals[key];
    }
  }
  const { data: activities } = await api.get('/activities?period=monthly')
  console.log(activities);
  const data = {
    summary: resData.data.totals,
    // history dalam satu bulan
    histories: [
      {
        date: "Sel, 28 Mei 2026",
        dateRaw: "2026-05-28",
        title: "Daily Activity Log",
        stressStatus: "Near-Burnout",
        stressLevel: 82,
        details: [
          { label: "Screen Time", value: "9.2h" },
          { label: "Device Before Sleep", value: "2h" },
          { label: "Sleep Duration", value: "5.5h" },
          { label: "Physical Activity", value: "0 min" },
          { label: "Caffeine Intake", value: "4 cups" },
          { label: "Mood", value: "😊 Anxious" },
        ],
      },
    ],
    // isi atribut shap dan rekomendasi aktivitas, tapi belum tau bentuknya
  }

  return { data }
}