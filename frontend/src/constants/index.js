export const Method = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const APIs = {
  studentLogin: "/auth/studentLogin/",
  facultyLogin: "/auth/facultyLogin/",
  resetLink: "/auth/resetLink",
  setPassword: "/auth/setPassword",
  fetchTimeTable: "/fetchTT",
  uploadTimeTable: "/faculty/uploadTT",
};

export const STUDENT_TEXT = "student";
export const FACULTY_TEXT = "faculty";

export const SUCCESS_OK = 200;
export const RESOURCE_CREATED = 201;
export const ERROR_UNAUTHORIZED = 401;
export const BAD_REQUEST = 400;