// import { FaUser, FaBook } from "react-icons";
// import { MdDashboard } from "react-icons/md";

export const StudentSidebar = [
  {
    title: "MAIN",
    items: [
      {
        // icon: MdDashboard,
        label: "Overview",
        path: "/student",
      },
    ],
  },
  {
    title: "Academics",
    items: [
      {
        // icon: FaUser,
        label: "Profile",
        path: "/student/profile",
      },
      {
        label: "Courses",
        path: "/student/courses",
      },
      {
        label: "Results/GPA",
        path: "/student/results",
      },
      {
        label: "Assignment",
        path: "/studentassignments",
      },
      {
        label: "Timetable",
        path: "/studenttimetable",
      },
    ],
  },

  {
    title: "Finance",
    items: [
      {
        label: "Fees & Payment",
        path: "/studentpayment",
      },
    ],
  },

  {
    title: "Communication",
    items: [
      {
        label: "Anouncement",
        path: "/studentanouncement",
      },
      {
        label: "Events",
        path: "/studentevents",
      },
      {
        label: "Messages",
        path: "/studentmessages",
      },
      {
        label: "Notification",
        path: "/studentnotification",
      },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        label: "Document",
        path: "/studentdocuments"
      },
    ],
  },

  {
    title: "ACCOUNT",
    items: [
      {
        label: "Settings",
        path: "/studentsettings",
      },
      {
        label: "Help & Support",
        path: "/studentsupport"
      },
    ],
  },
];
