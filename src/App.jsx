import { createRoot } from 'react-dom/client';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App/>);
