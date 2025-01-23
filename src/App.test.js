import { render, screen } from '@testing-library/react';
import App from './App';

//test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});

render(<App/>);
conts htmlElement = document.documentElement;
const appliedTheme = HTMLeLEMENT.getAttribute('data-theme');
expect(['light', 'dark']).toContain(appliedTheme);
