import { FaRegSmile } from "react-icons/fa";
import { FaArrowTrendUp, FaRegClock } from "react-icons/fa6";
// import { GoPulse } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { LuMonitor } from "react-icons/lu";
import { VscCoffee } from "react-icons/vsc";

const icons = {
  'Screen Time': LuMonitor,
  'Device Before Sleep': FaRegClock,
  'Sleep Duration': IoMoonOutline,
  'Caffeine Intake': VscCoffee,
  'Mood': FaRegSmile,
  'Physical Activity': FaArrowTrendUp,
  // 'Avg Sleep': IoMoonOutline,
  // 'Avg Screen Time': LuMonitor,
  // 'Avg Exercise': FaArrowTrendUp,
  // 'Avg Stress': GoPulse,
}


export type IconName = keyof typeof icons;

interface IconDisplayProps extends React.ComponentProps<'svg'> {
  attr: IconName;
}

export default function AttributeIcon({ attr, ...props }: IconDisplayProps) {
  const Icon = icons[attr];
  return <Icon {...props} />;
}