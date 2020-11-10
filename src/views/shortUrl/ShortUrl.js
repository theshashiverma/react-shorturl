import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './ShortUrl.css'
import Button from '../../components/UI/Button/Button.js'
import Input from '../../components/UI/Input/Input'
import { getShortUrl } from '../../actions/ShortUrlAction';

const ShortUrl = () => {
    const [actualUrl, setActualUrl]= useState("");
    const dispatch = useDispatch();
    // Getting state value from store
    const shortUrl = useSelector(state => state.shortUrl);

    // Dispatching action
    const getShortUrlHandler = () => {
        if(actualUrl!==""){
            dispatch(getShortUrl(actualUrl))
        }else {
            alert("Please enter a valid url")
        }
    }

    return (
        <header className="App-header">
            <p>Paste your url</p>
            <Input
                placeholder="Your Url"
                value={actualUrl}
                changed={e => setActualUrl(e.target.value)}
            />
            <Button 
                clicked={getShortUrlHandler}
                value="Get Short Url"
            />
            
            {shortUrl !== null && 
            <div>
                <p>
                Your short url: <a className="shortUrl" rel="noreferrer" href={shortUrl} target="_blank">{shortUrl}</a> 
                </p>
            </div>
            }
        </header>
    )
}

export default ShortUrl
