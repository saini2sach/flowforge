
export type ProjectSummary = {
    name: string;
    team: string;
    progress: number;
    color: string;
};

export type TaskStatus = "Todo" | "In Progress" | "In Review" | "Done";

export type TaskPriority = "Low" | "Medium" | "High";

export type TaskSummary = {
    title: string;
    project: string;
    status: TaskStatus;
    priority: TaskPriority;
};

export type DashboardStat = {
    label: string;
    value: string;
    note: string;
};
