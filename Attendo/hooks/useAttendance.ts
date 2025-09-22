import { useContext } from "react";
import { AttendanceContext } from "@/contexts/AttendanceContext";
export const useAttendance = () => useContext(AttendanceContext);