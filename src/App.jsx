import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage";
import LoginPage from "./Pages/LoginPage";
import ImageGalleryPage from "./Pages/ImageGalleryPage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <LoginPage />,
			errorElement: <ErrorPage />,
		},
		{
			path: "/image-gallery",
			element: <ImageGalleryPage />
			
		},
	]);

	return (
		<DndProvider backend={HTML5Backend} className="App">
			<RouterProvider router={router} />
		</DndProvider>
	);
}
