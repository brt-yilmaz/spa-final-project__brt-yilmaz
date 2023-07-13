import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function MovieSkeleton() {
  return (
    <Box className="rounded-xl flex gap-4  bg-gray-500 px-4 pb-3 pt-4 shadow-md shadow-slate-500 animate-fadeIn">
      <div className={"w-2/5 rounded-md  "}>
        <Skeleton animation="wave" className={"w-full"} height={150} />
      </div>
      <div className={"flex flex-col gap-2 w-3/5"}>
        <Skeleton animation="wave" height={40} />
        <Skeleton animation="wave" width={70} />
        <Skeleton animation="wave" width={70} />
        <Skeleton animation="wave" />
      </div>
    </Box>
  );
}

export default MovieSkeleton;
