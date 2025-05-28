
import React from 'react';
import { FileText, Users, Share2, Download, Plus, Folder, TrendingUp, Eye } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Documents totaux', value: '1,245', icon: FileText, color: 'blue' },
    { label: 'Documents partagés', value: '89', icon: Share2, color: 'green' },
    { label: 'Téléchargements', value: '3,567', icon: Download, color: 'purple' },
    { label: 'Utilisateurs actifs', value: '156', icon: Users, color: 'orange' }
  ];

  const recentDocuments = [
    { name: 'Rapport financier Q4.pdf', date: 'Il y a 2 heures', author: 'Marie Dubois', views: 12 },
    { name: 'Contrat client ABC.docx', date: 'Il y a 4 heures', author: 'Pierre Martin', views: 8 },
    { name: 'Présentation projet X.pptx', date: 'Hier', author: 'Sophie Laurent', views: 24 },
    { name: 'Manuel utilisateur.pdf', date: 'Il y a 2 jours', author: 'Jean Dupont', views: 45 }
  ];

  const sharedDocuments = [
    { name: 'Budget 2024.xlsx', sharedWith: 'Équipe Finance', expires: 'Dans 5 jours' },
    { name: 'Politique RH.pdf', sharedWith: 'Tous les employés', expires: 'Permanent' },
    { name: 'Plan marketing.pptx', sharedWith: 'Équipe Marketing', expires: 'Dans 2 jours' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Bienvenue, Jean Dupont</h1>
        <p className="text-blue-100">Voici un aperçu de votre activité documentaire</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            purple: 'bg-purple-500',
            orange: 'bg-orange-500'
          };

          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <Plus size={20} className="text-gray-400 group-hover:text-blue-500 mr-2" />
            <span className="text-gray-600 group-hover:text-blue-500 font-medium">Téléverser un document</span>
          </button>
          <button className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group">
            <Folder size={20} className="text-gray-400 group-hover:text-green-500 mr-2" />
            <span className="text-gray-600 group-hover:text-green-500 font-medium">Créer un dossier</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Documents récents</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Voir tout</button>
          </div>
          <div className="space-y-3">
            {recentDocuments.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.author} • {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Eye size={14} />
                  <span className="text-xs">{doc.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shared Documents */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Documents partagés</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Gérer</button>
          </div>
          <div className="space-y-3">
            {sharedDocuments.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Share2 size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
                    <p className="text-xs text-gray-500">Partagé avec {doc.sharedWith}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Expire {doc.expires}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Chart Placeholder */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Activité des 7 derniers jours</h2>
          <TrendingUp size={20} className="text-gray-400" />
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Graphique d'activité (à implémenter avec Recharts)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
