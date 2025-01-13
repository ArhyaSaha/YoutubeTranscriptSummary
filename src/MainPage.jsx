import React, { useState } from 'react';
import { Youtube, Bot, Loader2, LogOut } from 'lucide-react';
import { useSignOut, useAuthenticationStatus } from '@nhost/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainPage = ({ sessionFunction }) => {
    const [url, setUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { signOut } = useSignOut();
    const { isAuthenticated } = useAuthenticationStatus();

    const handleSignOut = async () => {
        await signOut();
        sessionFunction(null)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSummary('');

        try {
            console.log('step 1')
            const youtubeURL = url;
            console.log('Sending request')
            const webhookUrl = import.meta.env.VITE_API_URL;;
            console.log(webhookUrl)
            const response = await axios.get(webhookUrl, {
                params: { youtubeURL },
            });

            console.log(response.data)
            setSummary(response.data);
        } catch (error) {
            console.error('Error fetching summary:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,38,38,0.3),rgba(0,0,0,1))]">
            {/* Sign Out Button */}
            <div className="absolute top-4 right-4">
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600/80 hover:bg-red-700/80 rounded-lg font-semibold transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Youtube className="w-12 h-12 text-red-500" />
                        <Bot className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">YouTube Transcript Summarizer</h1>
                    <p className="text-gray-400">Get quick summaries of any YouTube video</p>
                </div>

                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste YouTube URL here..."
                            className="flex-1 px-4 py-3 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={loading || !url}
                            className="px-6 py-3 bg-red-600/80 backdrop-blur-xl hover:bg-red-700/80 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 hover:scale-105"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Summarizing...
                                </>
                            ) : (
                                'Summarize'
                            )}
                        </button>
                    </div>
                </form>

                {error && (
                    <div className="p-4 bg-red-950/50 backdrop-blur-xl border border-red-900/50 rounded-lg mb-6">
                        <p className="text-red-200">{error}</p>
                    </div>
                )}

                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 min-h-[200px] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <Loader2 className="w-8 h-8 animate-spin text-red-500" />
                        </div>
                    ) : summary ? (
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-xl font-semibold mb-4 text-red-400">Summary</h2>
                            <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
                        </div>
                    ) : (
                        <div className="text-center text-gray-500">
                            Enter a YouTube URL and click Summarize to get started
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MainPage;