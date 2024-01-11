import FilterSideBar from "@/components/FilterSideBar";
import JobContent from "@/components/JobContent";
import { JobFilterType } from "@/lib/Validation";
import Image from "next/image";

export default function Home({
  searchParams: { q, type, location },
}: {
  searchParams: { q?: string; type?: string; location?: string };
}) {
  const filterValues: JobFilterType = {
    q,
    type,
    location,
  };
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
      <div className="flex flex-col gap-4 md:flex-row mt-10">
        <FilterSideBar />
        <div className="flex-1">
          <JobContent filterValues={filterValues} />
        </div>
      </div>
    </main>
  );
}
