import { Routes } from "./routes";

export const studentOptions = [
  { id: 0, title: "Notices", link: Routes.notices },
  { id: 1, title: "Leave Form", link: Routes.leaveForm },
  { id: 2, title: "My Timetable", link: Routes.timetable },
];

export const facultyOptions = [
  { id: 0, title: "Notices", link: Routes.notices },
  { id: 1, title: "Leave Requests", link: Routes.leaveForm },
  { id: 2, title: "Timetable", link: Routes.timetable },
];

export const profileTab = {
  id: 3,
  title: "My Profile",
  link: Routes.profile,
};
