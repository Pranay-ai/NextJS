import NextAuth, { CredentialsSignin } from 'next-auth';
import googleProvider from 'next-auth/providers/google';
import credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        googleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async ({ username, password }) => {
                console.log('username', username);

                // Check if username is empty or null
                if (!username || username.trim() === '') {
                    throw new CredentialsSignin('Please enter your username');
                }

                // Simulate database or secure source validation
                // Replace with actual secure validation logic
                const isValidCredentials = (username === 'admin' && password === 'admin');

                if (!isValidCredentials) {
                    throw new CredentialsSignin('Invalid credentials');
                }

                // Replace with actual user retrieval logic
                // Example: Fetch user details from database
                const user = {
                    id: 1,
                    name: 'admin',
                    username
                };

                return user;
            }






        })
    ],
})