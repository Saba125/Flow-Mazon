import Image from "next/image";
import { Briefcase, MapPin, Clock, Banknote } from "lucide-react";
import Badge from "./Badge";
import { Job } from "@prisma/client";
import { formatMoney, formatTime } from "@/lib/format";
interface JobItemProps {
  job: Job;
}
const JobItem: React.FC<JobItemProps> = ({
  job: { title, companyName, type, location, locationType, salary, createdAt },
}) => {
  return (
    <article className="border p-5 w-full rounded-lg hover:bg-muted/60">
      <div className="flex gap-3">
        <Image
          src="/company-logo-placeholder.png"
          alt="laptop-logo"
          width={100}
          height={100}
          className="self-center"
        />
        <div className="grow">
          <h3 className="font-bold dark:font-extralight"> {title} </h3>
          <p className="text-muted-foreground"> {companyName} </p>
          <div className="mt-3 flex flex-col gap-1">
            <p className="text-muted-foreground   flex flex-row gap-1.5 items-center">
              {" "}
              <Briefcase size={16} /> {type}{" "}
            </p>
            <p className="text-muted-foreground flex flex-row gap-1.5 items-center">
              {" "}
              <MapPin size={16} /> {locationType}{" "}
            </p>
            <p className="text-muted-foreground flex flex-row gap-1.5 items-center">
              {" "}
              <Banknote size={16} /> {formatMoney(salary)}{" "}
            </p>
            <p className="sm:hidden text-muted-foreground flex flex-row gap-1.5 items-center">
              {" "}
              <Clock size={16} /> {formatTime(createdAt)}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col justify-between">
          <Badge> {type} </Badge>
          <span
            className="
          flex
          items-center
          gap-1.5
          text-muted-foreground
          "
          >
            {formatTime(createdAt)}
            <Clock size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};

export default JobItem;
