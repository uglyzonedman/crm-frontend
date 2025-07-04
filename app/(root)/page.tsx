'use client'
import { useAuthStore } from '@/shared/stores/auth.store'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const publicPaths = ['/auth/sign-in']

const HomePage = () => {
	const pathname = usePathname()
	console.log(pathname)
	const checkAuth = useAuthStore(state => state.checkAuth)
	const isAuthenticated = useAuthStore(state => state.isAuthenticated)
	const loading = useAuthStore(state => state.loading)
	const router = useRouter()
	useEffect(() => {
		checkAuth()
	}, [])

	useEffect(() => {
		const isPublic = publicPaths.includes(pathname)

		if (!loading && !isAuthenticated && !isPublic) {
			router.replace('/auth/sign-in')
		}
	}, [loading, isAuthenticated, pathname])
	return <div>HomePage</div>
}

export default HomePage
