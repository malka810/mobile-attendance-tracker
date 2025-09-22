import axios from "axios"
import { auth } from "@/firebase"

// Backend base URL
const api = axios.create({
  baseURL: process.env.EXPO_BASE_API_URL, // set your backend URL here
  timeout: 10000
})

// Response interceptor – can handle errors globally
api.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error("API Error:", error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api

// =========================
// User API calls
// =========================

// Get all users (Admin only)
export const getUsers = async () => {
  const res = await api.get("/users")
  return res.data
}

// Get single user by uid
export const getUserById = async (uid: string) => {
  const res = await api.get(`/users/${uid}`)
  return res.data
}

// Create new user (Admin only)
export const createUser = async (userData: {
  fullName: string
  email: string
  role: "admin" | "student" | "lecturer" | "parent"
  userCode?: string
}) => {
  const res = await api.post("/users", userData)
  return res.data
}

// Update user (Admin only)
export const updateUser = async (
  uid: string,
  updatedData: Partial<{
    fullName: string
    email: string
    role: "admin" | "student" | "lecturer" | "parent"
    status: "active" | "inactive"
    userCode?: string
  }>
) => {
  const res = await api.put(`/users/${uid}`, updatedData)
  return res.data
}

// Delete user (Admin only)
export const deleteUser = async (uid: string) => {
  const res = await api.delete(`/users/${uid}`)
  return res.data
}
