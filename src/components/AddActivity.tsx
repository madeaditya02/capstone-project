import { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { formatDate } from "../utils/util";
import { TbMoodSad } from "react-icons/tb";
import { CgSmileNeutral } from "react-icons/cg";
import { FaRegSmile } from "react-icons/fa";
import Button from "./Button";
import useFormInput from "../hooks/useFormInput";

const getMoodColor = (value: number) => {
  const from = value <= 50 ? [255, 31, 15] : [229, 245, 0];
  const to = value <= 50 ? [229, 245, 0] : [119, 214, 0];
  const progress = value <= 50 ? value / 50 : (value - 50) / 50;
  const [red, green, blue] = from.map((color, index) =>
    Math.round(color + (to[index] - color) * progress),
  );

  return `rgb(${red}, ${green}, ${blue})`;
};

type AddActivityProp = {
  definedDate?: Date,
  // onFinish: () => void,
  onClose: () => void
}

export default function AddActivity({ definedDate, onClose }: AddActivityProp) {
  const [mood, setMood] = useState(0);
  const [form, handleInputChange] = useFormInput({
    date: definedDate ? formatDate(definedDate) : '',
    screenTime: '',
    workScreenTime: '',
    entertainScreenTime: '',
    startSleepTime: '',
    endSleepTime: '',
    exerciseDuration: '',
    sportType: '',
    // mood: 0,
  })
  const moodColor = getMoodColor(mood);
  const moodTrack =
    mood <= 50
      ? `linear-gradient(to right, #ff1f0f 0%, ${moodColor} ${mood}%, #d4d4d4 ${mood}%, #d4d4d4 100%)`
      : `linear-gradient(to right, #ff1f0f 0%, #e5f500 50%, ${moodColor} ${mood}%, #d4d4d4 ${mood}%, #d4d4d4 100%)`;

  return (
    <Modal title="Add Activity" onClose={onClose}>
      <form action="">
        <div className="mb-3">
          <label htmlFor="date">Date</label>
          <Input type="date" id="date" value={form.date} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="screenTime">Total Screen Time</label>
          <Input type="time" id="screenTime" value={form.screenTime} onChange={handleInputChange} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-3">
            <label htmlFor="workScreenTime">Work Screen Time</label>
            <Input type="time" id="workScreenTime" value={form.workScreenTime} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="entertainScreenTime">Entertain Screen Time</label>
            <Input type="time" id="entertainScreenTime" value={form.entertainScreenTime} onChange={handleInputChange} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="startSleepTime">Work Screen Time</label>
          <div className="flex gap-3 items-center">
              <Input type="time" id="startSleepTime" value={form.startSleepTime} onChange={handleInputChange} className="grow" />
              <span className="font-medium">to</span>
              <Input type="time" id="endSleepTime" value={form.endSleepTime} onChange={handleInputChange} className="grow" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="mb-3">
            <label htmlFor="exerciseDuration">Exercise Duration</label>
            <Input type="time" id="exerciseDuration" value={form.exerciseDuration} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="sportType">Type of Sport (Opsional)</label>
            <Input type="time" id="sportType" value={form.sportType} onChange={handleInputChange} />
          </div>
        </div>
        <div className="mb-3">
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
  )
}