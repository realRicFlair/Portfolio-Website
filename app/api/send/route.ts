'use server'
import { EmailTemplate } from '@/app/contact/email-template';
import { Resend } from 'resend';
//const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_a21wj1QQ_FxFfW7DwV7ccHjeJBgXooByW");

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        
        const { data, error } = await resend.emails.send({
            from: 'AdiPortfolio <onboarding@resend.dev>',
            to: ['adithya2959@gmail.com'],
            subject: `Website Email from ${name}`,
            react: EmailTemplate({ name, email, message }),
        });

        if (error) {
            return new Response(JSON.stringify({ error }), { status: 500 });
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error }), { status: 500 });
    }
}