// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import "./Onepg.css";
import professionalimg from "../assets/professionalimg.jpeg";
import researchimg from "../assets/researchimg.jpeg";
import studentimg from "../assets/studentimg.jpeg";

const Onepg = () => {
    const [url, setUrl] = useState("");
    const [summary, setSummary] = useState("");
    const [openFAQ, setOpenFAQ] = useState(null);


    const handleSummarize = () => {
        if (!url) {
            setSummary("Please enter a YouTube URL.");
            return;
        }
        setSummary(
            "This is a mock summary of the video. In a real app, this would be generated using an API."
        );
    };

    return (
        <div
            className="onepg-bg min-h-screen flex flex-col text-white p-6 bg-cover bg-center bg-no-repeat relative"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main content */}
            <div className="relative z-10 flex-1">

                {/* Header */}
                <header className="flex justify-between items-center py-4">
                    <h1 className="text-xl font-bold font-comforta">YouTube Summarizer</h1>
                    <button className="bg-white text-purple-900 px-4 py-1 rounded font-comforta">Login</button>
                </header>

                {/* Hero Section */}
                <section className="my-12 text-center p-6 rounded bg-black/40">
                    <h2 className="text-3xl font-comforta ">
                        Get YouTube transcript and use AI to summarize
                    </h2>
                    <h2 className="text-3xl font-comforta mb-4">
                        YouTube videos in one click.
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 ">

                        {/* <div className="flex justify-center gap-2"> */}
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste YouTube URL here"
                            className="p-2 rounded border-1 border-white text-white w-full md:w-96"
                        />
                        <button
                            onClick={handleSummarize}
                            className="bg-purple-600 px-4 py-2 rounded w-full md:w-auto"
                        >
                            Summarize
                        </button>
                        {/* </div> */}
                    </div>
                </section>

                {/* Summary */}
                {summary && (
                    <section className="mt-12 flex flex-col items-center p-6 rounded bg-white/10">
                        <div className="mt-6 p-4 bg-purple-800 rounded w-full max-w-2xl hover:cursor-pointer">
                            <h3 className=" font-plex mb-2">Summary:</h3>
                            <p>{summary}</p>
                        </div>
                    </section>
                )}

                {/* Question */}
                <section className="mt-12 text-center p-6 rounded bg-black/30">
                    <div className="text-white md:text-xl max-w-4xl mx-auto">
                        <h1 className="font-comforta text-2xl">Trouble grasping key points of long YouTube videos?</h1>
                        <br />
                        <p className="text-sm font-plex">YouTube Video Summarizer makes it easy to get the main ideas fast. This AI YouTube video summarizer turns any long video into a clear, short summary, so you don’t have to waste time watching the entire thing. Just paste the link and let this smart summarizer do the work — perfect for study, research, or catching up quickly. Whether it's a tutorial, lecture, or podcast, our video summarizer helps you summarize YouTube videos effortlessly.</p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-6 rounded bg-black/20">
                    <div>
                        <h4 className="font-bold font-comforta pb-4">Summarize Long and Multiple Videos at Once</h4>
                        <p className="font-plex text-neutral-500 text-sm">No limits on video length — summarize any YouTube video, whether it’s a short tutorial or a lengthy lecture. Plus, batch summarize up to 20 videos simultaneously, saving you time and effort.</p>
                    </div>
                    <div>
                        <h4 className="font-bold font-comforta pb-4">Summarize Videos Without Subtitles </h4>
                        <p className="font-plex text-neutral-500 text-sm">Summarize Videos Without Subtitles</p>
                    </div>
                    <div>
                        <h4 className="font-bold font-comforta pb-4">Powerful Subtitle Translation</h4>
                        <p className="font-plex text-neutral-500 text-sm">Supports over 60 languages with AI-powered accurate subtitle translation, helping you understand and summarize videos from around the world effortlessly.</p>
                    </div>
                </section>
            </div>

            {/* Use Cases Section */}
            <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">

                {/* For Students */}
                <div className="bg-black/30 p-10 rounded-3xl flex flex-col items-center">
                    <img src={studentimg} alt="Students" className="w-20 h-20 mb-4" />
                    <h4 className="text-xl font-comforta font-bold mb-4">For Students</h4>
                    <p className="text-xs font-plex">
                        Stay on top of your studies by using the YouTube Video Summarizer to quickly turn long lectures and tutorials into clear, time-saving YouTube summaries.
                    </p>
                </div>

                {/* For Professionals */}
                <div className="bg-black/30 p-10 rounded-3xl flex flex-col items-center">
                    <img src={professionalimg} alt="Professionals" className="w-20 h-20 mb-4" />
                    <h4 className="text-xl font-comforta font-bold mb-4">For Professionals</h4>
                    <p className="text-xs font-plex">
                        Instantly capture the key takeaways from industry talks, webinars, and conferences. This smart YouTube summarizer helps you focus on insights without watching the full video.
                    </p>
                </div>

                {/* For Researchers */}
                <div className="bg-black/30 p-10 rounded-3xl flex flex-col items-center">
                    <img src={researchimg} alt="Researchers" className="w-20 h-20 mb-4" />
                    <h4 className="text-xl font-comforta font-bold mb-4">For Researchers</h4>
                    <p className="text-xs font-plex">
                        Explore and absorb large volumes of video content more efficiently. Use of AI YouTube video summarizer to process complex materials and extract core ideas in minutes.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-12 p-6 bg-black/30 rounded text-white">
                <h2 className="text-xl font-comforta font-bold mb-6 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl font-plex mx-auto space-y-2">
                    {[
                        {
                            q: "What is the YouTube Video Summarizer?",
                            a: "The YouTube Video Summarizer converts long YouTube videos into concise summaries, saving you time while capturing key points.",
                        },
                        {
                            q: "Can I summarize multiple YouTube videos at once?",
                            a: "Currently, the Summarizer works on one video at a time. Future updates may include batch summarization.",
                        },
                        {
                            q: "Is there a limit on video length or number of summaries?",
                            a: "There are no strict limits, but extremely long videos may take longer to summarize. Batch summarization is limited to 20 videos at a time.",
                        },
                        {
                            q: "Can I customize the summary length or prompt?",
                            a: "Yes! You can adjust the summary length or provide custom prompts to get summaries tailored to your needs.",
                        },
                        {
                            q: "How accurate are the summaries?",
                            a: "Summaries are context-aware and concise, though accuracy depends on video clarity and complexity.",
                        },
                        {
                            q: "Is my data secure when using Summarizer?",
                            a: "Yes. Your data is handled securely, and videos are only processed for summarization.",
                        },
                        {
                            q: "Can I use this to summarize other content?",
                            a: "Currently, Summarizer is optimized for YouTube videos, but support for other content types may be added in the future.",
                        },
                        {
                            q: "What kinds of videos can I summarize?",
                            a: "Educational videos, lectures, tutorials, webinars, interviews, podcasts—any video with spoken content.",
                        },
                        {
                            q: "Will there be support for other languages?",
                            a: "Currently, Summarizer supports over 40 languages. More languages may be added in future updates.",
                        },
                    ].map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/10 rounded cursor-pointer hover:bg-white/20 transition"
                        >
                            <div
                                className="flex justify-between items-center p-4"
                                onClick={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                }
                            >
                                <h3 className="font-bold">{faq.q}</h3>
                                <span
                                    className={`transform transition-transform duration-300 ${openFAQ === index ? "rotate-180" : "rotate-0"
                                        }`}
                                >
                                    ▼
                                </span>
                            </div>
                            {/* Answer with smooth drop-down */}
                            <div
                                className={`transition-all duration-300 ease-in-out ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden`}
                            >
                                <p className="p-4 pt-0 text-sm">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Footer */}
            <footer className="mt-auto bg-black text-white text-center py-6  rounded">
                <p>&copy; 2025 YouTube Summarizer. All rights reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                    <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    <a href="#" className="text-sm hover:underline">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default Onepg;
