import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const password = searchParams.get("password");

    if (!password || password !== "secret") {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default ProtectedRoute;
