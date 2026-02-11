import { Search, Bell, ChevronDown } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-8">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
        
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-9 w-64 rounded-lg border border-gray-200 bg-white pl-10 pr-4 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Notifications */}
          <button className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-50">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User Menu */}
          <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 hover:bg-gray-50">
            <div className="h-7 w-7 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-medium text-white">JD</span>
            </div>
            <span className="text-sm font-medium text-gray-700">John Doe</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
