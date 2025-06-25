// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	const publicPaths = ['/auth/sign-in', '/auth/sign-up', '/recovery-password']

	if (publicPaths.some(path => pathname.startsWith(path))) {
		return NextResponse.next()
	}

	const accessToken = request.cookies.get('accessToken')?.value

	if (!accessToken) {
		const loginUrl = new URL('/auth/sign-in', request.url)
		return NextResponse.redirect(loginUrl)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
