import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { CounterPage } from './counter/CounterPage';
import SignupPage from './signup/SignupPage';
import { DemoCounterPage } from './demo/counter/DemoCounterPage';
import DemoSignupPage from './demo/signup/DemoSignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/counter",
    element: <CounterPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  {
    path: "/demo-counter",
    element: <DemoCounterPage/>,
  },
  {
    path: "/demo-signup",
    element: <DemoSignupPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  .render(<RouterProvider router={router}/>)

