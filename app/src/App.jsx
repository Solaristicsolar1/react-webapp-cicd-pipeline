import { useState, useEffect } from 'react'
import './App.css'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function getTime() {
  return new Date().toLocaleTimeString();
}

function App() {
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState(getDate());
  const [currentTime, setCurrentTime] = useState(getTime());

  // ⏰ Auto-update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getTime());
      setCurrentDate(getDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-lg text-center">
        <h1 className="text-3xl font-extrabold mb-6 drop-shadow-lg">
          🚀 AWS Hands-On Project: CI/CD Pipeline - New Feature
        </h1>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-white/20 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">⏱ Live Time</h2>
            <p className="text-2xl font-mono">{currentTime}</p>
          </div>

          <div className="p-4 bg-white/20 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">📅 Today's Date</h2>
            <p className="text-2xl font-mono">{currentDate}</p>
          </div>
        </div>

        <p className="text-md leading-relaxed mb-6">
          This app demonstrates a full AWS CI/CD pipeline using{" "}
          <span className="font-bold">CodePipeline</span>,{" "}
          <span className="font-bold">CodeBuild</span>,{" "}
          <span className="font-bold">CodeDeploy</span>,{" "}
          <span className="font-bold">S3</span>, and{" "}
          <span className="font-bold">Vite + React</span>.
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
        >
          👍 Pipeline Tested {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
