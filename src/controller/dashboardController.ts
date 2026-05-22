export async function dashboardLoader() {

  const data = {
    summary: {
      "Refreshed": 42,
      "Strained": 28,
      "Near-Burnout": 40
    },
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