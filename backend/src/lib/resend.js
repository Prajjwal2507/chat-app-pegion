import { Resend } from 'resend';

// import dotenv from 'dotenv';
// dotenv.config();

//import 'dotenv/config';
import { ENV } from './env.js';

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender ={
    email: ENV.EMAIL_FROM,
    name : ENV.EMAIL_FROM_NAME,
};