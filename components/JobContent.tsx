import { Briefcase, Clock, MapPin, Search } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Badge from "./Badge";
import JobItem from "./JobItem";
import { Prisma } from "@prisma/client";
import { JobFilterType } from "@/lib/Validation";
interface JobContentProps {
  filterValues: JobFilterType;
}
const JobContent = async ({
  filterValues: { q, type, location },
}: JobContentProps) => {
  const searchString: Prisma.JobWhereInput = q
    ? {
        AND: [
          { title: { contains: q } },
          { type: { contains: type } },
          { location: { contains: location } },
        ],
      }
    : {};
  const where: Prisma.JobWhereInput = {
    AND: [searchString, type ? { type } : {}, location ? { location } : {}],
  };
  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
      {jobs.length === 0 && (
        <p className="text-center font-bold text-2xl">No results found.</p>
      )}
    </main>
  );
};

export default JobContent;
