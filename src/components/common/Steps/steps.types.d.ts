export type StepOptionsProps = {
    id: number;
    name: string,
    description: string,
    href: string,
    status: "complete" | "current" | "upcoming",
};