import CreateUser from './components/CreateUser';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      {step === 1 && (
        <div>
          <h1>Welcome to Our App</h1>
          <p>We are excited to have you on board. Click next to get started!</p>
          <button onClick={nextStep} style={{ padding: '10px 20px', fontSize: '16px' }}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1>Tell Us About Yourself</h1>
          <CreateUser />
          <div style={{ marginTop: '20px' }}>
            <button onClick={prevStep} style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px' }}>Back</button>
            <button onClick={nextStep} style={{ padding: '10px 20px', fontSize: '16px' }}>Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <h1>You're All Set!</h1>
          <p>Thank you for providing your details. You can now explore the app.</p>
          <button onClick={() => setStep(1)} style={{ padding: '10px 20px', fontSize: '16px' }}>Start Over</button>
        </div>
      )}
    </div>
  );
}

export default App;
