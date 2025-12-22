// handell mui skeleton component
import { Skeleton } from "@mui/material"

const CategorySkeleton = () => {
    return (
        <>
            <Skeleton variant="rectangular" width={205} height={250} />
            <Skeleton variant="rectangular" width={205} height={250} />
            <Skeleton variant="rectangular" width={205} height={250} />
            <Skeleton variant="rectangular" width={205} height={250} />
            <Skeleton variant="rectangular" width={205} height={250} />
        </>
    );
};

export default CategorySkeleton
