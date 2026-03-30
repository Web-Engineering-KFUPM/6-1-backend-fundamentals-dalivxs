import { useEffect, useState } from 'react';
import './index.css';

export default function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/student')
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      });
  }, []);

  return (
    <div>
      <h1>Student Information</h1>
      {student ? (
        <div>
          <h2>{student.name}</h2>
          <p>{student.major}</p>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
}