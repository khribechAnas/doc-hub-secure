
import React, { useState } from 'react';
import { 
  Clock, 
  Filter, 
  Download, 
  Search, 
  Eye, 
  Share2, 
  Trash2, 
  Edit, 
  Upload,
  Calendar,
  User,
  FileText
} from 'lucide-react';

const AuditLogs = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const actionIcons: { [key: string]: { icon: React.ComponentType<any>, color: string } } = {
    'Consultation': { icon: Eye, color: 'text-blue-600' },
    'Téléchargement': { icon: Download, color: 'text-green-600' },
    'Partage': { icon: Share2, color: 'text-purple-600' },
    'Suppression': { icon: Trash2, color: 'text-red-600' },
    'Modification': { icon: Edit, color: 'text-orange-600' },
    'Téléversement': { icon: Upload, color: 'text-indigo-600' }
  };

  const logs = [
    {
      id: '1',
      user: 'Marie Dubois',
      action: 'Consultation',
      document: 'Rapport financier Q4.pdf',
      timestamp: '2024-01-15 14:32:15',
      ip: '192.168.1.10',
      details: 'Document consulté depuis l\'application web'
    },
    {
      id: '2',
      user: 'Pierre Martin',
      action: 'Téléchargement',
      document: 'Contrat client ABC.docx',
      timestamp: '2024-01-15 13:45:22',
      ip: '192.168.1.25',
      details: 'Téléchargement via lien de partage'
    },
    {
      id: '3',
      user: 'Sophie Laurent',
      action: 'Partage',
      document: 'Présentation projet X.pptx',
      timestamp: '2024-01-15 12:18:09',
      ip: '192.168.1.33',
      details: 'Lien de partage créé avec mot de passe'
    },
    {
      id: '4',
      user: 'Jean Dupont',
      action: 'Modification',
      document: 'Budget marketing 2024.xlsx',
      timestamp: '2024-01-15 11:22:41',
      ip: '192.168.1.15',
      details: 'Permissions modifiées pour l\'équipe Marketing'
    },
    {
      id: '5',
      user: 'Admin System',
      action: 'Suppression',
      document: 'Ancien rapport Q3.pdf',
      timestamp: '2024-01-15 10:15:33',
      ip: '192.168.1.1',
      details: 'Suppression automatique après expiration'
    },
    {
      id: '6',
      user: 'Alice Bernard',
      action: 'Téléversement',
      document: 'Nouvelle politique RH.pdf',
      timestamp: '2024-01-15 09:45:18',
      ip: '192.168.1.42',
      details: 'Document téléversé dans le dossier RH'
    },
    {
      id: '7',
      user: 'Bob Wilson',
      action: 'Consultation',
      document: 'Manuel utilisateur.pdf',
      timestamp: '2024-01-15 09:12:55',
      ip: '192.168.1.67',
      details: 'Document consulté depuis l\'application mobile'
    },
    {
      id: '8',
      user: 'Claire Dubois',
      action: 'Partage',
      document: 'Rapport mensuel.xlsx',
      timestamp: '2024-01-15 08:38:12',
      ip: '192.168.1.89',
      details: 'Partagé avec l\'équipe de direction'
    }
  ];

  const filters = [
    { key: 'all', label: 'Toutes les actions', count: logs.length },
    { key: 'Consultation', label: 'Consultations', count: logs.filter(log => log.action === 'Consultation').length },
    { key: 'Téléchargement', label: 'Téléchargements', count: logs.filter(log => log.action === 'Téléchargement').length },
    { key: 'Partage', label: 'Partages', count: logs.filter(log => log.action === 'Partage').length },
    { key: 'Modification', label: 'Modifications', count: logs.filter(log => log.action === 'Modification').length },
    { key: 'Suppression', label: 'Suppressions', count: logs.filter(log => log.action === 'Suppression').length },
    { key: 'Téléversement', label: 'Téléversements', count: logs.filter(log => log.action === 'Téléversement').length }
  ];

  const filteredLogs = logs.filter(log => {
    const matchesFilter = selectedFilter === 'all' || log.action === selectedFilter;
    const matchesSearch = searchTerm === '' || 
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.document.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Historique et Logs d'Audit</h1>
          <p className="text-gray-600">Suivez toutes les activités sur vos documents</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Download size={20} />
          <span>Exporter les logs</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher dans les logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-400" size={20} />
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="text-gray-500">à</span>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total aujourd'hui</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Clock className="text-blue-600" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Consultations</p>
              <p className="text-2xl font-bold text-green-600">23</p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <Eye className="text-green-600" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Téléchargements</p>
              <p className="text-2xl font-bold text-purple-600">12</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Download className="text-purple-600" size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Partages</p>
              <p className="text-2xl font-bold text-orange-600">8</p>
            </div>
            <div className="p-2 bg-orange-100 rounded-lg">
              <Share2 className="text-orange-600" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-900">Action</th>
                <th className="text-left p-4 font-medium text-gray-900">Utilisateur</th>
                <th className="text-left p-4 font-medium text-gray-900">Document</th>
                <th className="text-left p-4 font-medium text-gray-900">Date/Heure</th>
                <th className="text-left p-4 font-medium text-gray-900">Adresse IP</th>
                <th className="text-left p-4 font-medium text-gray-900">Détails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLogs.map((log) => {
                const actionConfig = actionIcons[log.action];
                const ActionIcon = actionConfig?.icon || FileText;
                
                return (
                  <tr key={log.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg bg-gray-100`}>
                          <ActionIcon className={actionConfig?.color || 'text-gray-600'} size={16} />
                        </div>
                        <span className="font-medium text-gray-900">{log.action}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="text-blue-600" size={14} />
                        </div>
                        <span className="text-gray-900">{log.user}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-900 font-medium">{log.document}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-600">{log.timestamp}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-600 font-mono text-sm">{log.ip}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-500 text-sm">{log.details}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {filteredLogs.length === 0 && (
          <div className="p-8 text-center">
            <Clock className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun log trouvé</h3>
            <p className="text-gray-500">Aucune activité ne correspond à vos critères de recherche.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredLogs.length > 0 && (
        <div className="bg-white border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              Affichage de 1 à {filteredLogs.length} sur {logs.length} entrées
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Précédent
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
                Suivant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuditLogs;
