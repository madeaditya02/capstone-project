import { useState } from "react";
import Calendar from "../components/Calendar";
import PieChart from "../components/PieChart";
import Modal from "../components/Modal";
import useInput from "../hooks/useInput";
import Input from "../components/Input";
import { FaRegSmile } from "react-icons/fa";
import { TbMoodSad } from "react-icons/tb";
import { CgSmileNeutral } from "react-icons/cg";
import Button from "../components/Button";

const getMoodColor = (value: number) => {
  const from = value <= 50 ? [255, 31, 15] : [229, 245, 0];
  const to = value <= 50 ? [229, 245, 0] : [119, 214, 0];
  const progress = value <= 50 ? value / 50 : (value - 50) / 50;
  const [red, green, blue] = from.map((color, index) =>
    Math.round(color + (to[index] - color) * progress),
  );

  return `rgb(${red}, ${green}, ${blue})`;
};

export default function Dashboard() {
  const [openNewActivity, setOpenNewActivity] = useState(false)
  const [date, handleDate] = useInput('');
  const [screenTime, handleScreenTime] = useInput('');
  const [workscreenTime, handleWorkScreenTime] = useInput('');
  const [entertainscreenTime, handleEntertainScreenTime] = useInput('');
  const [startSleepTime, handleStartSleepTime] = useInput('');
  const [endSleepTime, handleEndSleepTime] = useInput('');
  const [exerciseDuration, handleExerciseDuration] = useInput('');
  const [sportType, handleSportType] = useInput('');
  const [mood, setMood] = useState(0);
  const moodColor = getMoodColor(mood);
  const moodTrack =
    mood <= 50
      ? `linear-gradient(to right, #ff1f0f 0%, ${moodColor} ${mood}%, #d4d4d4 ${mood}%, #d4d4d4 100%)`
      : `linear-gradient(to right, #ff1f0f 0%, #e5f500 50%, ${moodColor} ${mood}%, #d4d4d4 ${mood}%, #d4d4d4 100%)`;

  return (
    <>
      <main className="bg-background px-4 py-6 font-poppins sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-md bg-white p-8 shadow-md">
            <PieChart />
          </div>

          <div className="rounded-md bg-white shadow-md p-8">
          </div>
          <div className="rounded-md bg-white shadow-md p-8" />
        </section>
        <section>
            <Calendar addActivity={() => setOpenNewActivity(true)} />
        </section>
      </main>
      {openNewActivity && (
        <Modal title="Add Activity" onClose={() => setOpenNewActivity(false)}>
          <form action="">
            <div className="mb-3">
              <label htmlFor="date">Date</label>
              <Input type="date" id="date" value={date} onChange={handleDate} />
            </div>
            <div className="mb-3">
              <label htmlFor="screen_time">Total Screen Time</label>
              <Input type="time" id="screen_time" value={screenTime} onChange={handleScreenTime} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3">
                <label htmlFor="work_screen_time">Work Screen Time</label>
                <Input type="time" id="work_screen_time" value={workscreenTime} onChange={handleWorkScreenTime} />
              </div>
              <div className="mb-3">
                <label htmlFor="entertain_screen_time">Entertain Screen Time</label>
                <Input type="time" id="entertain_screen_time" value={entertainscreenTime} onChange={handleEntertainScreenTime} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="sleep_time">Work Screen Time</label>
              <div className="flex gap-3 items-center">
                  <Input type="time" id="sleep_time" value={startSleepTime} onChange={handleStartSleepTime} className="grow" />
                  <span className="font-medium">to</span>
                  <Input type="time" value={endSleepTime} onChange={handleEndSleepTime} className="grow" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-3">
                <label htmlFor="exercise">Exercise Duration</label>
                <Input type="time" id="exercise" value={exerciseDuration} onChange={handleExerciseDuration} />
              </div>
              <div className="mb-3">
                <label htmlFor="sport_type">Type of Sport (Opsional)</label>
                <Input type="time" id="sport_type" value={sportType} onChange={handleSportType} />
              </div>
            </div>
            <div id="mood_input" className="mb-3">
              <label htmlFor="mood">Mood</label>
              <div className="mt-2">
                <div className="mb-2 flex items-center justify-between px-1">
                  <TbMoodSad className={`size-9 transition-colors ${
                        mood > 0 && mood < 50 ? "text-black" : "text-black/25"
                      }`} />
                  <CgSmileNeutral className={`size-9 transition-colors ${
                        mood >= 50 && mood < 100 ? "text-black" : "text-black/25"
                      }`} />
                  <FaRegSmile className={`size-8 transition-colors ${
                        mood == 100 ? "text-black" : "text-black/25"
                      }`} />
                </div>
                <input
                  type="range"
                  id="mood"
                  min="0"
                  max="100"
                  value={mood}
                  onChange={(event) => setMood(Number(event.target.value))}
                  className="h-3 w-full cursor-pointer appearance-none rounded-full bg-gray-300 accent-white [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-black/10 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-black/10 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm"
                  style={{ background: moodTrack }}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Modal>
        )}
    </>
  );
}
