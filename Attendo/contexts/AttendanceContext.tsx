// import { createContext, useEffect, useState } from "react";
// import { markAttendance, getHistory } from "@/services/attendance/attendanceService";
// import { useAuth } from "@/hooks/useAuth";
// import type { AttendanceItem } from "@/components/attendance/AttendanceList";


// export const AttendanceContext = createContext({
//         history: [] as AttendanceItem[],
//         mark: async (_: { qr: string; coords?: any }) => {},
//         refresh: async () => {},
// });


// export const AttendanceProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
// const { user } = useAuth();
// const [history, setHistory] = useState<AttendanceItem[]>([]);


// async function refresh() {
// if (!user) return;
// const rows = await getHistory(user.uid);
// setHistory(rows.map((r:any) => ({ id: r.id, course: r.course, at: (r.at?.toMillis?.() ?? Date.now()), status: r.status })));
// }


// async function mark(input: { qr: string; coords?: any }) {
// if (!user) return;
// await markAttendance({ uid: user.uid, qr: input.qr, coords: input.coords });
// await refresh();
// }


// useEffect(() => { refresh(); }, [user?.uid]);


// return (
// <AttendanceContext.Provider value={{ history, mark, refresh }}>
// {children}
// </AttendanceContext.Provider>
// );
// };