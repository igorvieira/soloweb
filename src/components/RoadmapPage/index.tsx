import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import roadmapData from './roadmap'


export const RoadmapPage = () => {
  const [currentYear, setCurrentYear] = useState(2025);


  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'todo': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'todo': return 'To Do';
      default: return 'To Do';
    }
  };

  const previousYear = () => setCurrentYear(prev => prev - 1);
  const nextYear = () => setCurrentYear(prev => prev + 1);

  const currentYearData = roadmapData.filter(column => column.year === currentYear);

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">Solo Roadmap</h1>
              <p className="text-gray-400 mt-1 text-sm md:text-base">Track the future development of the project</p>
            </div>

            {/* Year Navigation */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={previousYear}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors touch-manipulation"
              >
                <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                <span className="text-lg md:text-xl font-semibold">{currentYear}</span>
              </div>

              <button
                onClick={nextYear}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors touch-manipulation"
              >
                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Columns */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile: Stack vertical */}
        <div className="flex flex-col gap-4 md:hidden">
          {currentYearData.map((column) => (
            <div
              key={column.id}
              className="w-full bg-gray-800 rounded-xl border border-gray-700"
            >
              {/* Column Header */}
              <div className="p-3 border-b border-gray-700">
                <h2 className="text-base font-semibold text-purple-300">{column.title.replace('Junho', 'June').replace('Julho', 'July').replace('Agosto', 'August')}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {column.tasks.length} {column.tasks.length === 1 ? 'task' : 'tasks'}
                </p>
              </div>

              {/* Tasks */}
              <div className="p-3 space-y-3">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-gray-900 rounded-lg p-3 border border-gray-600 hover:border-purple-500 transition-colors cursor-pointer group"
                  >
                    {/* Task Header */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-white group-hover:text-purple-300 transition-colors text-sm">
                        {task.title}
                      </h3>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)}`}
                        title={getStatusText(task.status)} />
                    </div>

                    {/* Task Description */}
                    <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                      {task.description}
                    </p>

                    {/* Priority Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                        {task.priority === 'high' ? 'High' : task.priority === 'medium' ? 'Medium' : 'Low'}
                      </span>

                      {task.assignee && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <UserIcon className="w-3 h-3" />
                          <span>{task.assignee}</span>
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    {task.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 text-xs bg-purple-900/50 text-purple-300 rounded-md border border-purple-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {column.tasks.length === 0 && (
                  <div className="text-center py-6 text-gray-500">
                    <ClockIcon className="w-6 h-6 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">No planned tasks</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Scroll horizontal */}
        <div className="hidden md:block overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [overscroll-behavior-x:contain]">
          <div className="flex gap-6 min-w-max">
            {currentYearData.map((column) => (
              <div
                key={column.id}
                className="flex-shrink-0 w-80 bg-gray-800 rounded-xl border border-gray-700"
              >
                {/* Column Header */}
                <div className="p-4 border-b border-gray-700">
                  <h2 className="text-lg font-semibold text-purple-300">{column.title.replace('Junho', 'June').replace('Julho', 'July').replace('Agosto', 'August')}</h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {column.tasks.length} {column.tasks.length === 1 ? 'task' : 'tasks'}
                  </p>
                </div>

                {/* Tasks */}
                <div className="p-4 space-y-4 max-h-96 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
                  {column.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="bg-gray-900 rounded-lg p-4 border border-gray-600 hover:border-purple-500 transition-colors cursor-pointer group"
                    >
                      {/* Task Header */}
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-medium text-white group-hover:text-purple-300 transition-colors">
                          {task.title}
                        </h3>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)}`}
                          title={getStatusText(task.status)} />
                      </div>

                      {/* Task Description */}
                      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                        {task.description}
                      </p>

                      {/* Priority Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'high' ? 'High' : task.priority === 'medium' ? 'Medium' : 'Low'}
                        </span>

                        {task.assignee && (
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <UserIcon className="w-3 h-3" />
                            <span>{task.assignee}</span>
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      {task.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {task.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs bg-purple-900/50 text-purple-300 rounded-md border border-purple-800"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {column.tasks.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <ClockIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No planned tasks</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>        </div>

      {currentYearData.length === 0 && (
        <div className="text-center py-8">
          <CalendarIcon className="w-12 h-12 mx-auto mb-4 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-400 mb-2">
            No planning for {currentYear}
          </h3>
          <p className="text-sm text-gray-500">
            The roadmap for this year has not been defined yet.
          </p>
        </div>
      )}
    </div>
  );
};
