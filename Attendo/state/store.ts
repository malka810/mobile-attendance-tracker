import { create } from "zustand";


type AttendanceState = { count: number; inc: () => void };
export const useCounterStore = create<AttendanceState>((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }));
