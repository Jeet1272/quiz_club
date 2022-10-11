
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componenet/Blog/Blog';
import Home from './componenet/Home/Home';
import Quiz from './componenet/Quiz/Quiz';
import Topics from './componenet/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    { path: '*', element: <h1>This page is not found 404</h1> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
