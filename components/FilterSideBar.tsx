import { Input } from "./ui/input";
import { Label } from "./ui/label";
import prisma from "@/lib/prisma";
import Select from "./ui/select";
import { Button } from "./ui/button";
import { JobFilterSchema } from "@/lib/Validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmit";
const FilterSideBar = async () => {
  const types = (await prisma.job
    .findMany({
      select: { type: true },
      distinct: "type",
    })
    .then((type) => {
      return type.map(({ type }) => type).filter(Boolean);
    })) as string[];

  const distinctLocations = (await prisma?.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean)
    )) as string[];
  async function formAction(formData: FormData) {
    "use server";
    const values = Object.fromEntries(formData.entries());
    const parsedValues = JobFilterSchema.parse(values);
    const { q, type, location } = parsedValues;
    const searchParams = new URLSearchParams({
      ...(q && { q: q.trim() }),
      ...(type && { type }),
      ...(location && { location }),
    });
    redirect(`/?${searchParams}`);
  }
  return (
    <aside className="border rounded-lg p-4 bg-background md:sticky top-0 h-fit">
      <form className="flex flex-col gap-3" action={formAction}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="q">Search</Label>
          <Input placeholder="Title,company, etc" id="q" name="q" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="select">Type</Label>
          <Select id="select" name="type">
            <option value="">All types</option>
            {types.map((type) => (
              <option value={type} key={type}>
                {" "}
                {type}{" "}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="location">Location</Label>
          <Select id="location" name="location">
            <option value="">All locations</option>
            {distinctLocations.map((location) => (
              <option value={location} key={location}>
                {" "}
                {location}{" "}
              </option>
            ))}
          </Select>
        </div>
        <FormSubmitButton>
          Filter
        </FormSubmitButton>
      </form>
    </aside>
  );
};

export default FilterSideBar;
