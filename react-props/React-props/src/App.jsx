import Student from './Student.jsx';

function App() {
    return (
      <>
      <Student name="Adam" age={29} isStudent={true} />
      <Student name="Adéla" age={17} isStudent={false} />
      <Student name="Kostík" age={16} isStudent={true} />
      <Student name="Zuza" age={16} isStudent={true} />
      <Student />
    
      </>
    );
}

export default App;
  