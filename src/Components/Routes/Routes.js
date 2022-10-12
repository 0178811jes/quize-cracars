import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Statistics from '../Statistics/Statistics';
import Blogs from '../Blogs/Blogs'
import Root from "../Root/Root";
import Quiz from "../Quiz/Quiz";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />,

            },
            {
                path: '/quiz/:id',
                element: <Quiz />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
            {
                path: '/statistics',
                element: <Statistics />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
        ]
    }
])

export default routes;