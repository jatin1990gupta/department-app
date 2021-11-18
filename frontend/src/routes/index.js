import MailSentPage from "../Components/SinglePages/MailSentPage";
import PasswordChanged from "../Components/SinglePages/PasswordChanged";
import { Routes } from "../constants/routes";
import ForgotPassword from "../Containers/ForgotPassword";
import NoticePage from "../Containers/NoticePage";
import LeaveFormPage from "../Containers/LeaveFormPage";
import Profile from "../Containers/Profile";
import SetPassPage from "../Containers/SetPassPage";
import TimeTable from "../Containers/TimeTable";

export const protectedRoutes = [
  { path: Routes.notices, exact: true, component: NoticePage },
  { path: Routes.profile, component: Profile },
  { path: Routes.timetable, component: TimeTable },
  { path: Routes.leaveForm, component: LeaveFormPage },
];

export const publicRoutes = [
  { path: Routes.forgotPass, component: ForgotPassword },
  { path: Routes.resetMailSent, component: MailSentPage },
  { path: Routes.setPassword, component: SetPassPage },
  { path: Routes.passwordChanged, component: PasswordChanged },
];
