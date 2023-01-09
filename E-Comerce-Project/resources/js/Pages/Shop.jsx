import { Head } from "@inertiajs/inertia-react";
import DefaultNavigation from "@/Components/Navigation/DefaultNavigation";
import MobileNavigation from "@/Components/Navigation/MobileNavigation";

export default function Shop(props) {
  return (
    <>
      <Head title="Shop" />
      <div className="bg-red-500 min-h-screen">
        <div className="flex h-full w-full md:flex-row bg-indigo-400 p-10 md:p-5">
          <DefaultNavigation />
          <MobileNavigation />
        </div>
        <div className="mt-10">
          <p className="font-bold text-4xl">{props.phpVer}</p>
        </div>
      </div>
    </>
  );
}
