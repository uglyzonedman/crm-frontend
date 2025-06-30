import {
  FolderKanban,
  LayoutDashboard,
  MessageCircle,
  Plane,
  Users,
} from 'lucide-react'

export const navigations = [
  {
    title: 'Главный экран',
    url: '/',
    icon: <LayoutDashboard className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
  {
    title: 'Пользователи',
    url: '/employees',
    icon: <Users className="w-5 h-5 text-[#7D8592]" size={24} />,
  },
]
