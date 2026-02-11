import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Plus, Filter, Download, ChevronLeft, ChevronRight } from 'lucide-react';

const leads = [
  { 
    id: 1, 
    name: 'Robert Smith', 
    company: 'TechVision Inc', 
    email: 'robert.smith@techvision.com', 
    status: 'Qualified', 
    score: 85, 
    owner: 'Sarah Chen',
    date: 'Feb 10, 2026'
  },
  { 
    id: 2, 
    name: 'Lisa Brown', 
    company: 'Digital Dynamics', 
    email: 'lisa.brown@digitaldynamics.com', 
    status: 'New', 
    score: 72, 
    owner: 'Mike Johnson',
    date: 'Feb 11, 2026'
  },
  { 
    id: 3, 
    name: 'James Wilson', 
    company: 'CloudFirst Solutions', 
    email: 'james.w@cloudfirst.io', 
    status: 'Contacted', 
    score: 68, 
    owner: 'Emily Davis',
    date: 'Feb 10, 2026'
  },
  { 
    id: 4, 
    name: 'Maria Garcia', 
    company: 'Innovation Hub', 
    email: 'maria@innovationhub.com', 
    status: 'Qualified', 
    score: 91, 
    owner: 'John Doe',
    date: 'Feb 9, 2026'
  },
  { 
    id: 5, 
    name: 'David Lee', 
    company: 'StartupXYZ', 
    email: 'david.lee@startupxyz.com', 
    status: 'Nurturing', 
    score: 58, 
    owner: 'Sarah Chen',
    date: 'Feb 8, 2026'
  },
  { 
    id: 6, 
    name: 'Jennifer Taylor', 
    company: 'WebFlow Co', 
    email: 'j.taylor@webflow.co', 
    status: 'Contacted', 
    score: 76, 
    owner: 'Mike Johnson',
    date: 'Feb 8, 2026'
  },
  { 
    id: 7, 
    name: 'Michael Chen', 
    company: 'Design Studio Pro', 
    email: 'michael@designstudio.com', 
    status: 'Qualified', 
    score: 82, 
    owner: 'Emily Davis',
    date: 'Feb 7, 2026'
  },
  { 
    id: 8, 
    name: 'Amanda White', 
    company: 'TechStart Inc', 
    email: 'amanda@techstart.io', 
    status: 'New', 
    score: 65, 
    owner: 'John Doe',
    date: 'Feb 7, 2026'
  },
  { 
    id: 9, 
    name: 'Christopher Moore', 
    company: 'Enterprise Solutions', 
    email: 'c.moore@entsolutions.com', 
    status: 'Nurturing', 
    score: 54, 
    owner: 'Sarah Chen',
    date: 'Feb 6, 2026'
  },
  { 
    id: 10, 
    name: 'Nicole Anderson', 
    company: 'Growth Labs', 
    email: 'nicole@growthlabs.com', 
    status: 'Contacted', 
    score: 79, 
    owner: 'Mike Johnson',
    date: 'Feb 6, 2026'
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'Qualified':
      return 'success';
    case 'Contacted':
      return 'info';
    case 'Nurturing':
      return 'warning';
    case 'New':
      return 'neutral';
    default:
      return 'neutral';
  }
};

export function Leads() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Leads" />
      
      <div className="mx-auto max-w-[1280px] p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search leads..."
                className="h-10 w-80 rounded-lg border border-gray-300 bg-white pl-4 pr-4 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
          <Button variant="primary">
            <Plus className="h-4 w-4" />
            Add Lead
          </Button>
        </div>

        <Card className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Score
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Owner
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                    Date Added
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.company}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.email}</td>
                    <td className="px-6 py-4">
                      <Badge variant={getStatusVariant(lead.status)}>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-24 rounded-full bg-gray-100">
                          <div 
                            className="h-2 rounded-full bg-indigo-600" 
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{lead.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{lead.owner}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{lead.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-6 py-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium text-gray-900">1-10</span> of <span className="font-medium text-gray-900">148</span> leads
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
