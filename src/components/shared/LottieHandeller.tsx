import Lottie from "lottie-react";
import notFound from "../../assets/notFound.json";
import loading from "../../assets/loading.json";
import error from "../../assets/error.json";
import empty from "../../assets/empty.json";
import success from "../../assets/success.json";
type LottieType = "loading" | "error" | "empty" | "notFound" | "success";

interface LottieHandellerProps {
    type: LottieType;
}

const LottieHandeller = ({ type }: LottieHandellerProps) => {
    const getAnimationData = () => {
        switch (type) {
            case "loading":
                return loading;
            case "error":
                return error;
            case "empty":
                return empty;
            case "success":
                return success;
            default:
                return notFound;
        }
    };

    return (
        <div style={{ width: "300px", margin: "0 auto" }}>
            <Lottie
                animationData={getAnimationData()}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};

export default LottieHandeller;
