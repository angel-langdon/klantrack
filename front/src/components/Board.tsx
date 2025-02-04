import { useState } from "react";

interface IUser {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
}

const userMock: IUser = {
  id: "1",
  email: "1@klantrack.com",
  password_hash: "password",
  name: "User One",
  createdAt: new Date(),
  modifiedAt: new Date(),
};

interface IProject {
  id: string;
  title: string;
  createdByUserId: string;
  modifiedByUserId: string;
  smallestStageGap: number;
  createdAt: Date;
  modifiedAt: Date;
}
const projectMock: IProject = {
  id: "1",
  title: "Project Alpha",
  createdByUserId: "user1",
  modifiedByUserId: "user2",
  smallestStageGap: 1,
  createdAt: new Date(),
  modifiedAt: new Date(),
};

interface IStage {
  id: string;
  title: string;
  startsTimeTracking: boolean;
  projectId: string;
  position: number;
  smallestTaskGap: number;
  createdAt: Date;
  modifiedAt: Date;
}

const stagesMock: IStage[] = [
  {
    id: "1",
    title: "To Do",
    startsTimeTracking: false,
    projectId: "1",
    position: 1.0,
    smallestTaskGap: 1,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "2",
    title: "In Progress",
    startsTimeTracking: true,
    projectId: "1",
    position: 2.0,
    smallestTaskGap: 1,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "3",
    title: "Done",
    startsTimeTracking: false,
    projectId: "2",
    position: 3.0,
    smallestTaskGap: 1,
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

interface ITag {
  id: string;
  value: string;
  objectReference: "Task";
  projectId: string;
  createdAt: Date;
  modifiedAt: Date;
}

const tagsMock: ITag[] = [
  {
    id: "1",
    value: "Sub Project 1",
    objectReference: "Task",
    projectId: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "2",
    value: "Sub Project 2",
    objectReference: "Task",
    projectId: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "3",
    value: "Sub Project 3",
    objectReference: "Task",
    projectId: "1",
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

interface ITask {
  id: string;
  title: string;
  description?: string;
  stageId: string;
  position: number;
  projectId: string;
  tagId?: string;
  columnId: string;
  assignedToUserId?: string;
  createdByUserId?: string;
  isArchived: boolean;
  createdAt: Date;
  modifiedAt: Date;
  resolvedAt?: Date;
}

const tasksMock: ITask[] = [
  {
    id: "1",
    title: "Task One",
    description: "This is a task",
    stageId: "1",
    position: 1.0,
    projectId: "1",
    tagId: "1",
    columnId: "1",
    assignedToUserId: "1",
    createdByUserId: "1",
    isArchived: false,
    createdAt: new Date(),
    modifiedAt: new Date(),
    resolvedAt: undefined,
  },
  {
    id: "2",
    title: "Task Two",
    description: "This is a task",
    stageId: "2",
    position: 2.0,
    projectId: "1",
    tagId: "2",
    columnId: "1",
    assignedToUserId: "1",
    createdByUserId: "1",
    isArchived: false,
    createdAt: new Date(),
    modifiedAt: new Date(),
    resolvedAt: undefined,
  },
  {
    id: "3",
    title: "Task Three",
    description: "This is a task",
    stageId: "3",
    position: 3.0,
    projectId: "1",
    tagId: undefined,
    columnId: "1",
    assignedToUserId: "1",
    createdByUserId: "1",
    isArchived: false,
    createdAt: new Date(),
    modifiedAt: new Date(),
    resolvedAt: undefined,
  },
];

interface ITimeTrack {
  id: string;
  taskId: string;
  userId: string;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  modifiedAt: Date;
}

const timeTracksMock: ITimeTrack[] = [
  {
    id: "1",
    taskId: "1",
    userId: "1",
    startAt: new Date(),
    endAt: new Date(),
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "2",
    taskId: "2",
    userId: "1",
    startAt: new Date(),
    endAt: new Date(),
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
  {
    id: "3",
    taskId: "3",
    userId: "1",
    startAt: new Date(),
    endAt: new Date(),
    createdAt: new Date(),
    modifiedAt: new Date(),
  },
];

interface StageComponentProps {
  stage: IStage;
  tasks: ITask[];
  tags: ITag[];
}
const Stage: React.FC<StageComponentProps> = ({ stage, tasks, tags }) => {
  const Task: React.FC<{ task: ITask; tag: ITag | undefined }> = ({
    task,
    tag,
  }) => {
    return (
      <div
        key={task.position}
        className="flex-col bg-white rounded-sm border-[1px] border-gray-300 p-3 hover:bg-gray-300 hover:cursor-pointer"
      >
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>🏷️{!tag ? "-" : tag.value}</div>
      </div>
    );
  };

  return (
    <div className="flex flex-col bg-gray-100 p-2 rounded-md gap-y-3 w-3xs">
      <h3 className="text-lg font-semibold uppercase">{stage.title}</h3>
      <div className="flex flex-col mb-5">
        {tasks
          .filter((task) => task.stageId == stage.id)
          .map((task) => (
            <Task task={task} tag={tags.find((tag) => tag.id == task.tagId)} />
          ))}
      </div>
    </div>
  );
};

export default function KanbanBoard() {
  const [stages, setStages] = useState<IStage[]>(stagesMock);
  const [tasks, setTasks] = useState<ITask[]>(tasksMock);
  const [project, setProject] = useState<IProject>(projectMock);
  return (
    <div className="p-4 flex flex-col gap-y-3">
      <h2>{project.title}</h2>
      <input
        className="border-[1px] border-gray-300 p-2 rounded-md"
        type="text"
        placeholder="Search tasks"
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          const filteredTasks = tasksMock.filter((task) =>
            task.title.toLowerCase().includes(searchTerm)
          );
          setTasks(filteredTasks);
          // Update the state or perform any action with filteredTasks
        }}
      />
      <div className="flex gap-x-4">
        {stages.map((stage) => (
          <Stage key={stage.id} stage={stage} tasks={tasks} tags={tagsMock} />
        ))}
      </div>
    </div>
  );
}
