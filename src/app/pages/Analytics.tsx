import { Header } from '../components/Header';
import { KPICard } from '../components/KPICard';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { DollarSign, Users, TrendingUp, Target, Download, Calendar } from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const revenueData = [
  { month: 'Jul', revenue: 42000, target: 40000 },
  { month: 'Aug', revenue: 48000, target: 45000 },
  { month: 'Sep', revenue: 45000, target: 47000 },
  { month: 'Oct', revenue: 52000, target: 50000 },
  { month: 'Nov', revenue: 58000, target: 55000 },
  { month: 'Dec', revenue: 61000, target: 58000 },
  { month: 'Jan', revenue: 65000, target: 62000 },
  { month: 'Feb', revenue: 68000, target: 65000 },
];

const leadSourceData = [
  { source: 'Website', leads: 45 },
  { source: 'Referral', leads: 32 },
  { source: 'Social Media', leads: 28 },
  { source: 'Email', leads: 21 },
  { source: 'Events', leads: 15 },
  { source: 'Direct', leads: 7 },
];

const conversionData = [
  { stage: 'New Lead', value: 148 },
  { stage: 'Contacted', value: 92 },
  { stage: 'Qualified', value: 58 },
  { stage: 'Proposal', value: 31 },
  { stage: 'Won', value: 18 },
];

const pipelineData = [
  { name: 'Leads', value: 148, color: '#6366F1' },
  { name: 'Qualified', value: 58, color: '#8B5CF6' },
  { name: 'Proposal', value: 31, color: '#EC4899' },
  { name: 'Won', value: 18, color: '#10B981' },
];

export function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Analytics" />
      
      <div className="mx-auto max-w-[1280px] p-8">
        {/* Header Actions */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Calendar className="h-4 w-4" />
              Last 6 Months
            </Button>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Revenue"
            value="$439,000"
            change={15.3}
            icon={<DollarSign className="h-6 w-6" />}
          />
          <KPICard
            title="Total Leads"
            value="148"
            change={8.7}
            icon={<Users className="h-6 w-6" />}
          />
          <KPICard
            title="Conversion Rate"
            value="12.2%"
            change={2.4}
            icon={<TrendingUp className="h-6 w-6" />}
          />
          <KPICard
            title="Target Achievement"
            value="104%"
            change={4.2}
            icon={<Target className="h-6 w-6" />}
          />
        </div>

        {/* Revenue Chart */}
        <Card className="mb-8">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">Revenue vs Target</h3>
            <p className="text-sm text-gray-500">Monthly performance tracking</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
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
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#4F46E5" 
                strokeWidth={3}
                dot={{ fill: '#4F46E5', r: 5 }}
                name="Revenue"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#9CA3AF" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#9CA3AF', r: 4 }}
                name="Target"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          {/* Lead Sources */}
          <Card>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">Lead Sources</h3>
              <p className="text-sm text-gray-500">Where your leads come from</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadSourceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="source" stroke="#6B7280" style={{ fontSize: '11px' }} />
                <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
                <Bar dataKey="leads" fill="#4F46E5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Pipeline Stage Distribution */}
          <Card>
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900">Pipeline Distribution</h3>
              <p className="text-sm text-gray-500">Current opportunities by stage</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                  labelLine={false}
                  style={{ fontSize: '12px' }}
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Conversion Funnel */}
        <Card className="mt-6">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">Conversion Funnel</h3>
            <p className="text-sm text-gray-500">Lead progression through sales stages</p>
          </div>
          <div className="space-y-4">
            {conversionData.map((stage, index) => {
              const percentage = index === 0 ? 100 : Math.round((stage.value / conversionData[0].value) * 100);
              const dropoff = index > 0 ? Math.round(((conversionData[index - 1].value - stage.value) / conversionData[index - 1].value) * 100) : 0;
              
              return (
                <div key={stage.stage} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{stage.stage}</span>
                    <div className="flex items-center gap-4">
                      {index > 0 && (
                        <span className="text-xs text-red-600">-{dropoff}%</span>
                      )}
                      <span className="text-sm font-medium text-gray-900">{stage.value}</span>
                      <span className="text-sm text-gray-500">({percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-12 rounded-lg bg-gray-100 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 transition-all duration-500 flex items-center justify-center"
                      style={{ width: `${percentage}%` }}
                    >
                      {percentage > 15 && (
                        <span className="text-sm font-medium text-white">
                          {percentage}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
