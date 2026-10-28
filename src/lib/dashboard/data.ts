
import type {
    DashboardStat,
    ProjectSummary,
    TaskSummary,
} from "@/types/dashboard";

const projects: ProjectSummary[] = [
    {
        name: "Website Redesign",
        team: "Design",
        progress: 75,
        color: "bg-blue-500",
    },
    {
        name: "Mobile App v2",
        team: "Engineering",
        progress: 45,
        color: "bg-violet-500",
    },
    {
        name: "Customer Research",
        team: "Product",
        progress: 90,
        color: "bg-emerald-500",
    },
];

const tasks: TaskSummary[] = [
    {
        title: "Finalize dashboard wireframes",
        project: "Website Redesign",
        status: "In Progress",
        priority: "High",
    },
    {
        title: "Implement authentication flow",
        project: "Mobile App v2",
        status: "In Review",
        priority: "High",
    },
    {
        title: "Review customer feedback",
        project: "Customer Research",
        status: "Todo",
        priority: "Medium",
    },
    {
        title: "Update design system",
        project: "Website Redesign",
        status: "Done",
        priority: "Low",
    },
];

const stats: DashboardStat[] = [
    { label: "Total Projects", value: "12", note: "+2 this month" },
    { label: "Active Tasks", value: "24", note: "8 due this week" },
    { label: "Completed", value: "86", note: "+12 this month" },
    { label: "Overdue", value: "3", note: "Needs attention" },
];

export async function getProjects(): Promise<ProjectSummary[]> {
    return projects;
}

export async function getTasks(): Promise<TaskSummary[]> {
    return tasks;
}

export async function getDashboardStats(): Promise<DashboardStat[]> {
    return stats;
}
