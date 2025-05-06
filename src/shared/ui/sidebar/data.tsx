import {
  FolderKanban,
  LayoutDashboard,
  MessageCircle,
  Plane,
  Users,
} from "lucide-react";

export const navigations = [
  {
    title: "Dashboard",
    url: "#",
    icon: <LayoutDashboard className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
  {
    title: "Projects",
    url: "#",
    icon: <FolderKanban className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
  {
    title: "Calendar",
    url: "#",
    icon: <Plane className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
  {
    title: "Employees",
    url: "#",
    icon: <Users className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
  {
    title: "Messenger",
    url: "#",
    icon: <MessageCircle className="text-[#7D8592]" size={24} />,
  },
];
