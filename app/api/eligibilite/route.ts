import { NextResponse } from "next/server";

export const POST = async (req:Request) => {
    const body = await req.json();
    try {
        await fetch('https://n8n.captive-web.fr/webhook/send-liia-form-eligible', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return NextResponse.json({message: 'ok'});
    } catch (error) {
        console.error(error);
    }
}