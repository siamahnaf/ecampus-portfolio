import { Client, cacheExchange, fetchExchange, errorExchange } from 'urql';

export const client = new Client({
    url: process.env.NEXT_PUBLIC_API_URL as string,
    exchanges: [
        errorExchange({
            onError: (error) => {
                error.message = error.message.replace(/^\[.*\]\s*/, "");
            }
        }),
        cacheExchange,
        fetchExchange
    ],
});