import { regex } from "@/constants/regex";
export const isEmail = (v: string) => regex.email.test(v);
export const minLen = (v: string, n = 6) => v.trim().length >= n;