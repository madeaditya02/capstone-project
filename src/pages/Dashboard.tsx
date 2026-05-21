import { useState } from "react";
import Calendar from "../components/Calendar";
import PieChart from "../components/PieChart";
import AddActivity from "../components/AddActivity";

export default function Dashboard() {
  const [openNewActivity, setOpenNewActivity] = useState(false)
  const [activeDate, setActiveDate] = useState<Date>()
  
  
  return (
    <>
      <main className="bg-background px-4 py-6 font-poppins sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-md bg-white p-8 shadow-md">
            <PieChart />
          </div>
          <div className="rounded-md bg-white shadow-md p-8 relevant-attributes">
          </div>
          <div className="rounded-md bg-white shadow-md p-8" />
        </section>
        <section>
            <Calendar addActivity={(date) => {
              setOpenNewActivity(true)
              setActiveDate(date)
            }} />
        </section>
      </main>
      {openNewActivity && (
        <AddActivity definedDate={activeDate} onClose={() => {
          setOpenNewActivity(false)
          setActiveDate(undefined)
        }} />
      )}
    </>
  );
}
