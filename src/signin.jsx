import { useState } from 'react';
import { useSignInEmailPasswordless } from '@nhost/react';
import { Mail, Loader2, Youtube, Bot } from 'lucide-react';

export default function SignIn() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const { signInEmailPasswordless, error } = useSignInEmailPasswordless();

    const handleSignIn = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await signInEmailPasswordless(email, {
            redirectTo: 'https://6784aa230f3572a4a836ee7a--youtubesummary.netlify.app/'
        });

        if (error) {
            console.error({ error });
            return;
        }

        setLoading(false);
        alert('Magic Link Sent!');
    };

    return (
        <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.3),rgba(0,0,0,1))]">
            <div className="container mx-auto px-4 py-16 max-w-md">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Youtube className="w-12 h-12 text-red-500" />
                        <Bot className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400">Sign in to access YouTube Transcript Summarizer</p>
                </div>

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <form onSubmit={handleSignIn} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 pl-10 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                                />
                                <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-6 py-3 bg-red-600/80 backdrop-blur-xl hover:bg-red-700/80 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending Magic Link...
                                </>
                            ) : (
                                'Send Magic Link'
                            )}
                        </button>

                        {error && (
                            <div className="p-4 bg-red-950/50 backdrop-blur-xl border border-red-900/50 rounded-lg mt-4">
                                <p className="text-red-200 text-sm">{error.message}</p>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}