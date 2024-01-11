import { Briefcase, Clock, MapPin, Search } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Badge from "./Badge";
import JobItem from "./JobItem";
import { Prisma } from "@prisma/client";
import { JobFilterType } from "@/lib/Validation";
interface JobContentProps {
  filterValues: JobFilterType
}
const JobContent = async ({filterValues: {q,type,location}}: JobContentProps) => {
  const where: Prisma.JobWhereInput = q ? {
    
    OR: [
      {title: {contains: q}},
      {type: {contains: type}},
      {location: {contains: location}},

    ]
  } : {}
  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="flex flex-col gap-4">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </main>
  );
};

export default JobContent;
