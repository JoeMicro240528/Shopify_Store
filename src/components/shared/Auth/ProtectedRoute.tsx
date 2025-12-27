import { useAppSelector } from "../../../store/hooks";
import { Navigate } from "react-router";
export const ProtectedRoute = ({ children }: { children: React.ReactNode | React.JSX.Element }) => {

    const { access_token } = useAppSelector((state) => state.auth)
    if (!access_token) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {children}
        </>
    )
}