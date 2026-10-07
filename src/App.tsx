import { RouterProvider } from "react-router-dom";
import Fallback from "./pages/Fallback";
import { Suspense } from "react";
import { router } from "./routes/routes";

const App = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
