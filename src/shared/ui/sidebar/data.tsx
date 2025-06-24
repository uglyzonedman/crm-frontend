import {
	FolderKanban,
	LayoutDashboard,
	MessageCircle,
	Plane,
	Users,
} from 'lucide-react'

export const navigations = [
	{
		title: 'Дэшбоард',
		url: '#',
		icon: <LayoutDashboard className='w-5 h-5 text-[#7D8592]' size={24} />,
	},
	{
		title: 'Проекты',
		url: '#',
		icon: <FolderKanban className='w-5 h-5 text-[#7D8592]' size={24} />,
	},
	{
		title: 'Календарь',
		url: '#',
		icon: <Plane className='w-5 h-5 text-[#7D8592]' size={24} />,
	},
	{
		title: 'Сотрудники',
		url: '/employees',
		icon: <Users className='w-5 h-5 text-[#7D8592]' size={24} />,
	},
	{
		title: 'Мессенджер',
		url: '#',
		icon: <MessageCircle className='text-[#7D8592]' size={24} />,
	},
]
