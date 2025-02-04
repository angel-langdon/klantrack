interface User {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
}

const user: User = {
  id: "1",
  email: "1@klantrack.com",
  password_hash: "password",
  name: "User One",
  createdAt: new Date(),
  modifiedAt: new Date(),
};

interface Project {
  id: string;
  title: string;
  createdByUserId: string;
  modifiedByUserId: string;
  smallestStageGap: number;
  createdAt: Date;
  modifiedAt: Date;
}
const project: Project = {
  id: "1",
  title: "Project Alpha",
  createdByUserId: "user1",
  modifiedByUserId: "user2",
  smallestStageGap: 1,
  createdAt: new Date(),
  modifiedAt: new Date(),
};

interface Stage {
  id: string;
  title: string;
  startsTimeTracking: boolean;
  projectId: string;
  position: number;
  smallestTaskGap: number;
  createdAt: Date;
  modifiedAt: Date;
}

const stages: Stage[] = [
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

interface Tag {
  id: string;
  value: string;
  objectReference: "Task";
  projectId: string;
  createdAt: Date;
  modifiedAt: Date;
}

const tags: Tag[] = [
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

interface Task {
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

const tasks: Task[] = [
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
    tagId: "3",
    columnId: "1",
    assignedToUserId: "1",
    createdByUserId: "1",
    isArchived: false,
    createdAt: new Date(),
    modifiedAt: new Date(),
    resolvedAt: undefined,
  },
];

interface TimeTrack {
  id: string;
  taskId: string;
  userId: string;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  modifiedAt: Date;
}

const timeTracks: TimeTrack[] = [
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

export default function KanbanBoard() {
  return <div className="p-4"></div>;
}
