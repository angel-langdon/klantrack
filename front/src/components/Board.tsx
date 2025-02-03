interface Project {
  id: string;
  title: string;
  createdByUserId: string;
  modifiedByUserId: string;
  smallestStageGap: number;
  createdAt: Date;
  modifiedAt: Date;
}

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
  resolvedAt: Date;
}

interface Tag {
  id: string;
  value: string;
  objectReference: "Task";
  createdAt: Date;
  modifiedAt: Date;
}

interface TimeTrack {
  id: string;
  taskId: string;
  userId: string;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  modifiedAt: Date;
}

export default function KanbanBoard() {
  return <div className="p-4"></div>;
}
