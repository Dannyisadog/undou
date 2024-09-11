import AllIcon from "../components/client/common/Sidebar/ic-all.png";
import BasketballIcon from "../components/client/common/Sidebar/ic-basketball.png";
import BadminIcon from "../components/client/common/Sidebar/ic-badminton.png";
import TennisIcon from "../components/client/common/Sidebar/ic-tennis.png";
import RunningIcon from "../components/client/common/Sidebar/ic-running.png";
import ClimbIcon from "../components/client/common/Sidebar/ic-climb.png";
import BicycleIcon from "../components/client/common/Sidebar/ic-bicycle.png";
import SwimIcon from "../components/client/common/Sidebar/ic-swim.png";
import YogaIcon from "../components/client/common/Sidebar/ic-yoga.png";
import DanceIcon from "../components/client/common/Sidebar/ic-dance.png";
import VolleyballIcon from "../components/client/common/Sidebar/ic-volleyball.png";
import PingpongIcon from "../components/client/common/Sidebar/ic-pingpong.png";
import GolfIcon from "../components/client/common/Sidebar/ic-golf.png";
import BoxingIcon from "../components/client/common/Sidebar/ic-boxing.png";

export const useTypeIcon = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "basketball":
        return BasketballIcon;
      case "badminton":
        return BadminIcon;
      case "tennis":
        return TennisIcon;
      case "running":
        return RunningIcon;
      case "mountaineering":
        return ClimbIcon;
      case "bicycle":
        return BicycleIcon;
      case "swimming":
        return SwimIcon;
      case "yoga":
        return YogaIcon;
      case "dance":
        return DanceIcon;
      case "volleyball":
        return VolleyballIcon;
      case "pingpong":
        return PingpongIcon;
      case "golf":
        return GolfIcon;
      case "boxing":
        return BoxingIcon;
      default:
        return AllIcon;
    }
  };

  return { getIcon };
};
