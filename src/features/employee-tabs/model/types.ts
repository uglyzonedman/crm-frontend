export interface TabItem {
	id: number
	label: string
	type: string
}

export interface TabSwitcherProps {
	tabs: TabItem[]
	activeTab: string
	onChange: (type: string) => void
}
