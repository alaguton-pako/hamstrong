import Refreshbutton from "./components/buttons/Refreshbutton";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen fixed top-0 left-0 w-full">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p>Looks like this page doesn&apos;t exist.</p>
      <div className="flex justify-center"> 
        <Refreshbutton />
      </div>
    </div>
  );
}