import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <div style={{padding: '20px'}}>
      <h1>React Assignment - Krish</h1>

      <div className="card">
        <h2>Q2: Student Card (Props)</h2>
        <div style={{border:'1px solid black', padding:'10px'}}>
          <p>Name: Krish</p>
          <p>Email: krish0095@gmail.com</p>
          <p>Course: BCA</p>
        </div>
      </div>

      <div className="card">
        <h2>Q3: Text Analyzer</h2>
        <textarea value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type something..."></textarea>
        <p>Characters: {text.length}</p>
        <p>Words: {text.split(' ').filter(w=>w!=='').length}</p>
      </div>
    </div>
  )
}
export default App
