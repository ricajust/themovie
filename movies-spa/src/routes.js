import { Movies } from "./views/Movies";
import { RootLayout } from "./views/RootLayout";

export const routes = createBrowserRouter([
    { path: "/", element: <RootLayout />, children: [ 
        {path: "/", element: <home />}, 
        {path: "/movies", element: <Movies />} 
      ]
    }
])