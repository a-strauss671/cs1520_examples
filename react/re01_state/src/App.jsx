import './App.css'
import IndependentButtons from './IndependentButtons.jsx'
import SharedButtons from './SharedButtons.jsx';
import MyForm from './MyForm.jsx';

export default function App() {
  return (
    <div id="appDiv">
      <IndependentButtons />
      <SharedButtons />
      <MyForm />
    </div>
  );
}
