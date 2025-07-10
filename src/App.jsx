import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import StudentInfo from './components/StudentInfo';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPanel students={students} setStudents={setStudents} />} />
        <Route path="/students" element={<StudentInfo students={students} />} />
      </Routes>
    </Router>
  );
}

export default App;
