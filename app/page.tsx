import FilterSideBar from "@/components/FilterSideBar";
import JobContent from "@/components/JobContent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-5xl p-4 m-auto">
      <div
        className="
      text-center
      mt-7
      flex 
      flex-col
      gap-3"
      >
        <h1
          className="
        font-bold
        text-5xl
        "
        >
          Developer jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <div className="mt-10">
      {/* <FilterSideBar /> */}
      <JobContent />
      </div>
    </main>
  );
}
