import {
  getDashboardStats,
  getPaginatedTasks,
  getProjects,
} from "@/lib/dashboard/data";

import TaskSearch from "@/components/dashboard/task-search";
import TaskFilters from "@/components/dashboard/task-filters";
import TaskPagination from "@/components/dashboard/task-pagination";

type DashboardPageProps = {
  searchParams: Promise<{
    search?: string;
    status?: string;
    page?: string;
  }>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const params = await searchParams;

  const validStatuses = [
    "Todo",
    "In Progress",
    "In Review",
    "Done",
  ] as const;

  type ValidStatus = (typeof validStatuses)[number];

  const status: ValidStatus | "All" =
    validStatuses.find((item) => item === params.status) ?? "All";

  const parsedPage = Number(params.page ?? "1");
  const page =
    Number.isSafeInteger(parsedPage) && parsedPage > 0
      ? parsedPage
      : 1;

  const [projects, stats, taskResult] = await Promise.all([
    getProjects(),
    getDashboardStats(),
    getPaginatedTasks({
      search: params.search,
      status,
      page,
      pageSize: 5,
    }),
  ]);



  const tasks = taskResult.items;

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">
            Tuesday, October 27, 2026
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
            Good morning, Jordan
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Here&apos;s what&apos;s happening across your projects.
          </p>
        </div>
        <button
          type="button"
          className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
        >
          + New project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold tracking-tight">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-slate-500">{stat.note}</p>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-5 md:p-6">
        <div className="mb-6">
          <h2 className="font-semibold">Active projects</h2>
          <p className="mt-1 text-sm text-slate-500">
            Track progress across your team.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.name}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{project.name}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {project.team}
                  </p>
                </div>
                <span className="text-sm font-semibold">
                  {project.progress}%
                </span>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label={`${project.name} progress`}
                aria-valuenow={project.progress}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={`h-full rounded-full ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Recent Tasks</h2>
            <TaskFilters />
          </div>
          <p className="mt-1 text-sm text-slate-500">
            A snapshot of your team&apos;s latest work.
          </p>
        </div>


        <div className="overflow-x-auto">
          {tasks.length === 0 ? (
            <div className="rounded-xl  p-8 text-center">
              <h3 className="font-semibold">No tasks found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or status filter.
              </p>
            </div>
          ) : (
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Task</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Priority</th>
                </tr>
              </thead>


              <tbody className="divide-y divide-slate-100">
                {tasks.map((task) => (
                  <tr key={task.title} className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <p className="font-medium">{task.title}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {task.project}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {task.priority}
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          )}

        </div>
      </section>
      <TaskSearch />
      <TaskPagination
        page={taskResult.page}
        totalPages={Math.max(1, taskResult.totalPages)}
        total={taskResult.total}
      />

      <footer className="pb-2 text-center text-xs text-slate-400">
        FlowForge · Project management made clearer.
      </footer>
    </main>
  );
}

