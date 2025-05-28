
import React, { useState } from 'react';
import { 
  Users as UsersIcon, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Shield, 
  User,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Settings
} from 'lucide-react';

const Users = () => {
  const [selectedTab, setSelectedTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const users = [
    {
      id: '1',
      name: 'Marie Dubois',
      email: 'marie.dubois@entreprise.com',
      role: 'Administrateur',
      status: 'Actif',
      lastLogin: '2024-01-15 14:32',
      documentsCount: 23,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '2',
      name: 'Pierre Martin',
      email: 'pierre.martin@entreprise.com',
      role: 'Éditeur',
      status: 'Actif',
      lastLogin: '2024-01-15 13:45',
      documentsCount: 15,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      email: 'sophie.laurent@entreprise.com',
      role: 'Lecteur',
      status: 'Inactif',
      lastLogin: '2024-01-12 09:22',
      documentsCount: 8,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '4',
      name: 'Jean Dupont',
      email: 'jean.dupont@entreprise.com',
      role: 'Administrateur',
      status: 'Actif',
      lastLogin: '2024-01-15 11:18',
      documentsCount: 34,
      avatar: '/api/placeholder/32/32'
    },
    {
      id: '5',
      name: 'Alice Bernard',
      email: 'alice.bernard@entreprise.com',
      role: 'Éditeur',
      status: 'Actif',
      lastLogin: '2024-01-15 09:45',
      documentsCount: 19,
      avatar: '/api/placeholder/32/32'
    }
  ];

  const roles = [
    {
      id: '1',
      name: 'Administrateur',
      description: 'Accès complet à toutes les fonctionnalités',
      permissions: ['Créer', 'Lire', 'Modifier', 'Supprimer', 'Partager', 'Gérer utilisateurs'],
      color: 'red',
      userCount: 2
    },
    {
      id: '2',
      name: 'Éditeur',
      description: 'Peut créer, modifier et partager des documents',
      permissions: ['Créer', 'Lire', 'Modifier', 'Partager'],
      color: 'blue',
      userCount: 2
    },
    {
      id: '3',
      name: 'Lecteur',
      description: 'Accès en lecture seule aux documents partagés',
      permissions: ['Lire'],
      color: 'green',
      userCount: 1
    },
    {
      id: '4',
      name: 'Invité',
      description: 'Accès temporaire limité',
      permissions: ['Lire (limité)'],
      color: 'gray',
      userCount: 0
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Actif' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  };

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      'Administrateur': 'bg-red-100 text-red-800',
      'Éditeur': 'bg-blue-100 text-blue-800',
      'Lecteur': 'bg-green-100 text-green-800',
      'Invité': 'bg-gray-100 text-gray-800'
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchTerm === '' || 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs et Rôles</h1>
          <p className="text-gray-600">Gérez les utilisateurs, leurs rôles et permissions</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <Shield size={20} />
            <span>Nouveau rôle</span>
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Plus size={20} />
            <span>Nouvel utilisateur</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border">
        <div className="flex border-b">
          <button
            onClick={() => setSelectedTab('users')}
            className={`px-6 py-3 font-medium text-sm ${
              selectedTab === 'users'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Utilisateurs ({users.length})
          </button>
          <button
            onClick={() => setSelectedTab('roles')}
            className={`px-6 py-3 font-medium text-sm ${
              selectedTab === 'roles'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Rôles et Permissions ({roles.length})
          </button>
        </div>

        {selectedTab === 'users' && (
          <div className="p-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un utilisateur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tous les rôles</option>
                <option value="Administrateur">Administrateur</option>
                <option value="Éditeur">Éditeur</option>
                <option value="Lecteur">Lecteur</option>
                <option value="Invité">Invité</option>
              </select>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">Utilisateur</th>
                    <th className="text-left p-4 font-medium text-gray-900">Rôle</th>
                    <th className="text-left p-4 font-medium text-gray-900">Statut</th>
                    <th className="text-left p-4 font-medium text-gray-900">Dernière connexion</th>
                    <th className="text-left p-4 font-medium text-gray-900">Documents</th>
                    <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="text-blue-600" size={20} />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          {user.status === 'Actif' ? 
                            <CheckCircle className="text-green-500" size={16} /> : 
                            <XCircle className="text-red-500" size={16} />
                          }
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                            {user.status}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-600 text-sm">{user.lastLogin}</span>
                      </td>
                      <td className="p-4">
                        <span className="text-gray-900 font-medium">{user.documentsCount}</span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700" title="Modifier">
                            <Edit size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-700" title="Paramètres">
                            <Settings size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-700" title="Supprimer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'roles' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={20} />
                    </button>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Permissions :</h4>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((permission, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <UsersIcon className="text-gray-400" size={16} />
                      <span className="text-sm text-gray-600">{role.userCount} utilisateurs</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Modifier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Permission Matrix */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Matrice des permissions</h3>
              <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left p-2 font-medium text-gray-900">Permissions</th>
                      {roles.map((role) => (
                        <th key={role.id} className="text-center p-2 font-medium text-gray-900">
                          {role.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {['Créer', 'Lire', 'Modifier', 'Supprimer', 'Partager', 'Gérer utilisateurs'].map((permission) => (
                      <tr key={permission}>
                        <td className="p-2 font-medium text-gray-700">{permission}</td>
                        {roles.map((role) => (
                          <td key={`${role.id}-${permission}`} className="text-center p-2">
                            {role.permissions.some(p => p.includes(permission.split(' ')[0])) ? (
                              <CheckCircle className="text-green-500 mx-auto" size={16} />
                            ) : (
                              <XCircle className="text-red-500 mx-auto" size={16} />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
