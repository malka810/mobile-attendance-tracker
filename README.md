# mobile-attendance-tracker
A mobile application for managing student attendance using QR codes.  Built with React Native and Firebase (Firestore, Auth, Cloud Functions).  Features include QR-based attendance, GPS validation, device binding,  real-time reports, and role-based access for students, lecturers, and admins.

##  Overview

- **Lecturer** generates a unique, time-limited QR code for each session.  
- **Students** scan the QR code to mark attendance (with GPS + device validation).  
- **Parents** can view their child’s attendance summary and notifications.  
- **Backend** verifies session validity, location, time, and device before marking attendance.  
- **Admins** can view reports, manage users/roles, and configure settings.  

##  Features

**Lecturer**
- Manage classes and sessions  
- Generate QR codes for attendance  
- Quick reports (CSV/PDF export)  

**Student**
- Scan QR codes to mark attendance  
- View attendance percentage and history  
- Receive notifications  

**Parent**
- View child’s attendance summary (%)  
- View attendance history  
- Receive notifications (alerts on absences, low percentage, etc.)  

**Admin**
- User and role management  
- Global settings (GPS radius, QR time window)  
- Audit logs and detailed reports  

## Tech Stack
- **Frontend:** React Native (Expo)  
- **Backend:** Firebase Cloud Functions (Node.js)  
- **Database:** Firebase Firestore  
- **Authentication:** Firebase Auth  
- **Reports/Storage:** Firebase Storage  
- **Notifications:** Firebase Cloud Messaging (FCM)

  ## 🎥 Project Walkthrough

Check out the video below for a comprehensive walkthrough of the Attendo App, built with React Native, Expo, and Firebase:

[![Attendo App | React Native + Expo + Firebase](https://img.youtube.com/vi/4x0IKlNJ1TY/maxresdefault.jpg)](https://www.youtube.com/watch?v=4x0IKlNJ1TY)

In this video, I cover:

- 📱 Setting up the Expo project
- 🔐 Implementing Firebase authentication
- 🧭 Navigating with Expo Router
- 🛠️ Building a user-friendly UI




