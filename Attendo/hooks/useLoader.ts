import { useState, useCallback } from "react";
export function useLoader<T extends any[]>(fn: (...args: T) => Promise<any>) {
const [loading, setLoading] = useState(false);
const wrapped = useCallback(async (...args: T) => { setLoading(true); try { return await fn(...args); } finally { setLoading(false); } }, [fn]);
return { loading, wrapped } as const;
}