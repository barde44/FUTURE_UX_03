import { Header } from '../components/Header';
import { KPICard } from '../components/KPICard';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { DollarSign, Users, TrendingUp, Building2, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', value: 42000 },
  { month: 'Feb', value: 48000 },
  { month: 'Mar', value: 45000 },
  { month: 'Apr', value: 52000 },
  { month: 'May', value: 58000 },
  { month: 'Jun', value: 65000 },
];

const activities = [
  { id: 1, type: 'lead', title: 'New lead from TechStart Inc', time: '5 min ago', status: 'new' },
  { id: 2, type: 'deal', title: 'Deal closed with Innovate Labs', time: '1 hour ago', status: 'success' },
  { id: 3, type: 'task', title: 'Follow-up call scheduled', time: '2 hours ago', status: 'pending' },
  { id: 4, type: 'client', title: 'New client onboarded', time: '3 hours ago', status: 'success' },
  { id: 5, type: 'lead', title: 'Lead converted to opportunity', time: '4 hours ago', status: 'success' },
];

const tasks = [
  { id: 1, title: 'Prepare proposal for WebFlow Co', assignee: 'Sarah Chen', dueDate: 'Today', priority: 'high' },
  { id: 2, title: 'Follow-up call with Design Studio', assignee: 'Mike Johnson', dueDate: 'Tomorrow', priority: 'medium' },
  { id: 3, title: 'Send contract to CloudTech', assignee: 'Emily Davis', dueDate: 'Feb 15', priority: 'high' },
  { id: 4, title: 'Schedule demo for StartupXYZ', assignee: 'John Doe', dueDate: 'Feb 16', priority: 'low' },
];

const leads = [
  { id: 1, company: 'TechVision Inc', contact: 'Robert Smith', status: 'Qualified', score: 85, value: '$45,000' },
  { id: 2, company: 'Digital Dynamics', contact: 'Lisa Brown', status: 'New', score: 72, value: '$32,000' },
  { id: 3, company: 'CloudFirst', contact: 'James Wilson', status: 'Contacted', score: 68, value: '$28,000' },
  { id: 4, company: 'Innovation Hub', contact: 'Maria Garcia', status: 'Qualified', score: 91, value: '$52,000' },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Dashboard" />
      
      <div className="mx-auto max-w-[1280px] p-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="$325,480"
            change={12.5}
            icon={<DollarSign className="h-6 w-6" />}
          />
          <KPICard
            title="Active Leads"
            value="148"
            change={8.2}
            icon={<Users className="h-6 w-6" />}
          />
          <KPICard
            title="Conversion Rate"
            value="24.8%"
            change={3.1}
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <KPICard
            title="Active Clients"
            value="64"
            change={5.4}
            icon={<Building2 className="h-6 w-6" />}
          />
        </div>

        {/* Performance Chart */}
        <Card className="mb-8">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">Revenue Performance</h3>
            <p className="text-sm text-gray-500">Monthly revenue trend</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  fontSize: '12px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#4F46E5" 
                strokeWidth={2}
                dot={{ fill: '#4F46E5', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          {/* Recent Activities */}
          <Card>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">Recent Activities</h3>
              <p className="text-sm text-gray-500">Latest updates from your team</p>
            </div>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className={`mt-0.5 rounded-full p-2 ${
                    activity.status === 'success' ? 'bg-green-50' : 
                    activity.status === 'pending' ? 'bg-yellow-50' : 
                    'bg-blue-50'
                  }`}>
                    {activity.status === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : activity.status === 'pending' ? (
                      <Clock className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Tasks Preview */}
          <Card>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">Upcoming Tasks</h3>
              <p className="text-sm text-gray-500">Your priorities this week</p>
            </div>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{task.title}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span>{task.assignee}</span>
                      <span>•</span>
                      <span>{task.dueDate}</span>
                    </div>
                  </div>
                  <Badge variant={
                    task.priority === 'high' ? 'danger' : 
                    task.priority === 'medium' ? 'warning' : 
                    'neutral'
                  }>
                    {task.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Leads Summary */}
        <Card className="mt-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">Top Leads</h3>
            <p className="text-sm text-gray-500">High-value opportunities</p>
          </div>
          <div className="overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 text-left">
                  <th className="pb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Company</th>
                  <th className="pb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Contact</th>
                  <th className="pb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Status</th>
                  <th className="pb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Score</th>
                  <th className="pb-3 text-xs font-medium uppercase tracking-wide text-gray-500">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-4 text-sm font-medium text-gray-900">{lead.company}</td>
                    <td className="py-4 text-sm text-gray-600">{lead.contact}</td>
                    <td className="py-4">
                      <Badge variant={
                        lead.status === 'Qualified' ? 'success' : 
                        lead.status === 'Contacted' ? 'info' : 
                        'neutral'
                      }>
                        {lead.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 rounded-full bg-gray-100">
                          <div 
                            className="h-2 rounded-full bg-indigo-600" 
                            style={{ width: `${lead.score}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{lead.score}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-gray-900">{lead.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
