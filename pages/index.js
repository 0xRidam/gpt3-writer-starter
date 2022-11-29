import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  
  const [userInput, setUserInput] = useState('')
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  

  const onUserChangedtext = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Technical blog post about Ethereum</h1>
          </div>
          <div className="header-subtitle">
            <h2>insert your subtitle here</h2>
          </div>
        </div>
        <div className='prompt-container'>
          <textarea 
            placeholder='Start typing here'
            className='prompt-box'
            value={userInput}
            onChange={onUserChangedtext} />

            <div className='prompt-buttons'>
              <a className='generate-button' onClick={null}>
                <div className='generate'>
                  <p>Generate</p>
                </div>
              </a>
            </div> 
        </div>

        
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
