import "../../components/loader.css";

export default function Loading() {
  return (
    <p className="pt-40 h-screen flex justify-center text-center text-gray-500">
      <div className="">
        <div className="loader"></div>
      </div>
    </p>
  );
}
