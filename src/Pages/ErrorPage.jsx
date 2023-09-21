import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[24px] ">Oops!</h1>
      <p className="text-[18px] font-bold">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}