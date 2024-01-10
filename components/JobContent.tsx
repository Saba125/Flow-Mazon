import { Briefcase, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";
import Badge from "./Badge";
import JobItem from "./ui/JobItem";
const JobContent = async () => {
  const jobs = await prisma.job.findMany({
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
