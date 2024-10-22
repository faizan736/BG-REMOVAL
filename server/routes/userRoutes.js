import express from 'express'
import { clerkWebhooks, useCredits } from '../controllers/userController.js'
import authUser from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post('/webhooks',clerkWebhooks)
userRouter.get('/credits',authUser,useCredits)

export default userRouter