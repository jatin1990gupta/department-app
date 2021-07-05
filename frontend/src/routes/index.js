import MailSentPage from "../Components/SinglePages/MailSentPage/MailSentPage";
import PasswordChanged from "../Components/SinglePages/PasswordChanged/PasswordChanged";
import { Routes } from "../constants/routes";
import ForgotPassword from "../Containers/ForgotPassword/ForgotPassword";
import HomePage from "../Containers/HomePage/HomePage";
import LeaveFormPage from "../Containers/LeaveFormPage/LeaveFormPage";
import ProfilePage from "../Containers/ProfilePage/ProfilePage";
import SetPassPage from "../Containers/SetPassPage/SetPassPage";
import TimeTablePage from "../Containers/TimeTablePage/TimeTablePage";

export const publicRoutes = [
  { path: Routes.homePage, exact: true, component: HomePage },
  { path: Routes.forgotPass, component: ForgotPassword },
  { path: Routes.profile, component: ProfilePage },
  { path: Routes.leaveForm, component: LeaveFormPage },
  { path: Routes.timetable, component: TimeTablePage },
  { path: Routes.resetMailSent, component: MailSentPage },
  { path: Routes.setPassword, component: SetPassPage },
  { path: Routes.passwordChanged, component: PasswordChanged },
];
