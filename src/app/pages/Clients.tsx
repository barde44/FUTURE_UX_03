import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { Plus, Mail, Phone, ExternalLink, DollarSign } from 'lucide-react';

const clients = [
  {
    id: 1,
    company: 'TechVision Inc',
    contact: 'Robert Smith',
    email: 'robert.smith@techvision.com',
    phone: '+1 (555) 123-4567',
    revenue: '$145,000',
    projects: 3,
    status: 'Active',
    since: 'Jan 2025',
  },
  {
    id: 2,
    company: 'Innovation Hub',
    contact: 'Maria Garcia',
    email: 'maria@innovationhub.com',
    phone: '+1 (555) 234-5678',
    revenue: '$98,000',
    projects: 2,
    status: 'Active',
    since: 'Nov 2024',
  },
  {
    id: 3,
    company: 'Design Studio Pro',
    contact: 'Michael Chen',
    email: 'michael@designstudio.com',
    phone: '+1 (555) 345-6789',
    revenue: '$112,000',
    projects: 4,
    status: 'Active',
    since: 'Sep 2024',
  },
  {
    id: 4,
    company: 'CloudFirst Solutions',
    contact: 'James Wilson',
    email: 'james.w@cloudfirst.io',
    phone: '+1 (555) 456-7890',
    revenue: '$87,500',
    projects: 2,
    status: 'Active',
    since: 'Dec 2024',
  },
  {
    id: 5,
    company: 'WebFlow Co',
    contact: 'Jennifer Taylor',
    email: 'j.taylor@webflow.co',
    phone: '+1 (555) 567-8901',
    revenue: '$124,000',
    projects: 3,
    status: 'Active',
    since: 'Oct 2024',
  },
  {
    id: 6,
    company: 'Digital Dynamics',
    contact: 'Lisa Brown',
    email: 'lisa.brown@digitaldynamics.com',
    phone: '+1 (555) 678-9012',
    revenue: '$76,000',
    projects: 1,
    status: 'Onboarding',
    since: 'Feb 2026',
  },
  {
    id: 7,
    company: 'Enterprise Solutions',
    contact: 'Christopher Moore',
    email: 'c.moore@entsolutions.com',
    phone: '+1 (555) 789-0123',
    revenue: '$156,000',
    projects: 5,
    status: 'Active',
    since: 'Jul 2024',
  },
  {
    id: 8,
    company: 'Growth Labs',
    contact: 'Nicole Anderson',
    email: 'nicole@growthlabs.com',
    phone: '+1 (555) 890-1234',
    revenue: '$92,000',
    projects: 2,
    status: 'Active',
    since: 'Aug 2024',
  },
];

export function Clients() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Clients" />
      
      <div className="mx-auto max-w-[1280px] p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search clients..."
                className="h-10 w-80 rounded-lg border border-gray-300 bg-white pl-4 pr-4 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          <Button variant="primary">
            <Plus className="h-4 w-4" />
            Add Client
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {clients.map((client) => (
            <Card key={client.id}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-white">
                      {client.company.split(' ').map(w => w[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{client.company}</h3>
                    <p className="text-sm text-gray-600 mt-0.5">{client.contact}</p>
                    <div className="mt-2">
                      <Badge variant={client.status === 'Active' ? 'success' : 'info'}>
                        {client.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-3 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{client.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{client.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Total Revenue: <span className="font-medium text-gray-900">{client.revenue}</span></span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Active Projects</p>
                  <p className="text-lg font-semibold text-gray-900 mt-0.5">{client.projects}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Client Since</p>
                  <p className="text-sm font-medium text-gray-900 mt-0.5">{client.since}</p>
                </div>
                <Button variant="primary" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
