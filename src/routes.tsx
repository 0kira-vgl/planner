import { createBrowserRouter } from "react-router-dom";
import { CreateTrip } from "./pages/createTrip";
import { TripDetails } from "./pages/tripDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },

  {
    path: "/trips/:tripId",
    element: <TripDetails />,
  },
]);
