import { create } from 'zustand'
import Cookies from 'js-cookie'
import { UserService } from '../services'

export const userStore = create(set => ({}))
