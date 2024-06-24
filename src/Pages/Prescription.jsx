import React, { useState, useEffect } from 'react';

const ChatPage = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [timerStarted, setTimerStarted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    let timer;
    if (timerStarted && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000); // Update remaining time every second
    } else if (remainingTime === 0) {
      // Call a function to assign a doctor when the timer ends
      assignDoctor();
    }
    return () => clearInterval(timer);
  }, [timerStarted, remainingTime]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear user input field
    setUserInput('');
    
    // Save user input to chat history
    setChatHistory([...chatHistory, { message: userInput, sender: 'User' }]);
    
    // Call the ChatGPT API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add your OpenAI API key here
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({ model: 'text-davinci-003', messages: [{ role: 'user', content: userInput }] }),
    });

    if (response.ok) {
      const data = await response.json();

      const responseMessage = data.choices[0].message.content;
      setChatHistory([...chatHistory, { message: responseMessage, sender: 'ChatGPT' }]);
    } else {
      console.error('Failed to fetch response from ChatGPT API');
    }
  };

  const handleTimerStart = () => {
    setTimerStarted(true);
  };

  const assignDoctor = () => {
    setTimerStarted(false); 
    alert('A doctor has been assigned to you.');
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-3xl font-bold text-center my-4">Describe Your Situation</h1>
      <div className="bg-gray-200 p-4 rounded-lg mb-4">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.sender === 'User' ? 'text-right' : 'text-left'}>
            <p className="mb-1">{chat.sender}: {chat.message}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <form onSubmit={handleSubmit} className="flex-grow flex items-center">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your problem..."
            className="flex-grow border p-2 rounded-l-md focus:outline-none"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md focus:outline-none">
            Submit
          </button>
        </form>
        {!timerStarted && (
          <button onClick={handleTimerStart} className="bg-green-500 text-white p-2 ml-4 rounded-md focus:outline-none">
            Start 30 Min Timer
          </button>
        )}
        {timerStarted && (
          <div className="ml-4">
            <p>Time remaining: {formatTime(remainingTime)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;

