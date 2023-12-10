import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImQuotesRight } from "react-icons/im";
import { RiTwitterXFill, RiFileCopyLine, RiVolumeUpFill } from "react-icons/ri";
import { toast } from 'react-toastify';

const Quote = () => {
    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('Anonymous');

    const api = "https://api.quotable.io/quotes/random";

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(api);
            setQuote(response.data[0].content);
            setAuthor(response.data[0].author);
        }
        fetchData();
    }, []);

    const getNewQuote = async () => {
        const response = await axios.get(api);
        setQuote(response.data[0].content);
        setAuthor(response.data[0].author);
        toast("Here's a new one for you!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const tweetQuote = () => {
        window.open("https://twitter.com/intent/tweet?text=" + quote + " - by, " + author, "Tweet a quote!", "width=1000, height=600");
        toast.success('Your followers will not stop retweeting!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const copyQuote = async () => {
        await navigator.clipboard.writeText(quote);
        toast.success('Our quote is safely transferred to your clipboard!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const speakQuote = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = quote;
        window.speechSynthesis.speak(speech);
        toast.success('We hope this quote sounds better than reading it!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className='box'>
            <div className="header">
                <h1 className='headerText'>Quote of the day</h1>
                <div className="line"></div>
            </div>
            <div className="content">
                <div className="quote">
                    <p>"{quote}"</p>
                </div>
                <div className="author">
                    <p>- by {author}</p>
                </div>
            </div>
            <div className="buttons">
                <button onClick={getNewQuote}><ImQuotesRight /> New Quote</button>
                <button onClick={tweetQuote}><RiTwitterXFill /> Tweet</button>
                <button onClick={copyQuote}><RiFileCopyLine /> Copy</button>
                <button onClick={speakQuote}><RiVolumeUpFill /> Speak</button>
            </div>
        </div>
    )
}

export default Quote;
