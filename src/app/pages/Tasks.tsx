import { useState } from 'react';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Plus, Calendar, User } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface Task {
  id: number;
  title: string;
  description: string;
  assignee: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: 1,
        title: 'Prepare Q1 proposal',
        description: 'Create comprehensive proposal for TechVision Inc',
        assignee: 'Sarah Chen',
        dueDate: 'Feb 15',
        priority: 'high',
        tags: ['Proposal', 'Sales'],
      },
      {
        id: 2,
        title: 'Client discovery call',
        description: 'Initial consultation with new prospect',
        assignee: 'Mike Johnson',
        dueDate: 'Feb 14',
        priority: 'medium',
        tags: ['Meeting', 'Discovery'],
      },
      {
        id: 3,
        title: 'Update CRM records',
        description: 'Sync latest client information',
        assignee: 'Emily Davis',
        dueDate: 'Feb 16',
        priority: 'low',
        tags: ['Admin'],
      },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    tasks: [
      {
        id: 4,
        title: 'Website redesign',
        description: 'Complete homepage mockups for CloudFirst',
        assignee: 'John Doe',
        dueDate: 'Feb 18',
        priority: 'high',
        tags: ['Design', 'Web'],
      },
      {
        id: 5,
        title: 'Follow-up emails',
        description: 'Send follow-ups to qualified leads',
        assignee: 'Sarah Chen',
        dueDate: 'Feb 13',
        priority: 'medium',
        tags: ['Email', 'Outreach'],
      },
    ],
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: 6,
        title: 'Contract review',
        description: 'Legal review of WebFlow Co contract',
        assignee: 'Mike Johnson',
        dueDate: 'Feb 12',
        priority: 'high',
        tags: ['Legal', 'Contract'],
      },
      {
        id: 7,
        title: 'Campaign performance',
        description: 'Analyze January marketing campaign results',
        assignee: 'Emily Davis',
        dueDate: 'Feb 14',
        priority: 'medium',
        tags: ['Analytics', 'Marketing'],
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: 8,
        title: 'Onboard new client',
        description: 'Complete onboarding for Innovation Hub',
        assignee: 'John Doe',
        dueDate: 'Feb 10',
        priority: 'high',
        tags: ['Onboarding', 'Client'],
      },
      {
        id: 9,
        title: 'Q4 report finalized',
        description: 'Quarterly business review completed',
        assignee: 'Sarah Chen',
        dueDate: 'Feb 8',
        priority: 'medium',
        tags: ['Report', 'Analytics'],
      },
    ],
  },
];

interface TaskCardProps {
  task: Task;
  columnId: string;
}

function TaskCard({ task, columnId }: TaskCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { taskId: task.id, sourceColumnId: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const priorityColors = {
    high: 'danger',
    medium: 'warning',
    low: 'neutral',
  } as const;

  return (
    <div
      ref={drag}
      className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md cursor-move ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <h4 className="font-medium text-gray-900 mb-2">{task.title}</h4>
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {task.tags.map((tag) => (
          <Badge key={tag} variant="info">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <User className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-xs text-gray-600">{task.assignee}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-3.5 w-3.5 text-gray-400" />
          <span className="text-xs text-gray-600">{task.dueDate}</span>
        </div>
      </div>

      <div className="mt-3">
        <Badge variant={priorityColors[task.priority]}>
          {task.priority}
        </Badge>
      </div>
    </div>
  );
}

interface KanbanColumnProps {
  column: Column;
  onDrop: (taskId: number, sourceColumnId: string, targetColumnId: string) => void;
}

function KanbanColumn({ column, onDrop }: KanbanColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item: { taskId: number; sourceColumnId: string }) => {
      onDrop(item.taskId, item.sourceColumnId, column.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div className="flex flex-col min-h-[600px]">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">{column.title}</h3>
          <p className="text-sm text-gray-500">{column.tasks.length} tasks</p>
        </div>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div
        ref={drop}
        className={`flex-1 space-y-3 rounded-xl border-2 border-dashed p-4 transition-colors ${
          isOver ? 'border-indigo-400 bg-indigo-50' : 'border-gray-200 bg-gray-50'
        }`}
      >
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} columnId={column.id} />
        ))}
      </div>
    </div>
  );
}

export function Tasks() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);

  const handleDrop = (taskId: number, sourceColumnId: string, targetColumnId: string) => {
    if (sourceColumnId === targetColumnId) return;

    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find((col) => col.id === sourceColumnId);
      const targetColumn = newColumns.find((col) => col.id === targetColumnId);

      if (!sourceColumn || !targetColumn) return prevColumns;

      const taskIndex = sourceColumn.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex === -1) return prevColumns;

      const [movedTask] = sourceColumn.tasks.splice(taskIndex, 1);
      targetColumn.tasks.push(movedTask);

      return newColumns;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50">
        <Header title="Tasks" />
        
        <div className="mx-auto max-w-[1280px] p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Manage your tasks and projects</p>
            </div>
            <Button variant="primary">
              <Plus className="h-4 w-4" />
              New Task
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {columns.map((column) => (
              <KanbanColumn key={column.id} column={column} onDrop={handleDrop} />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
