import { useState } from "react";

export const usePasswordToggel = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return {
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleMouseUpPassword
    }
}