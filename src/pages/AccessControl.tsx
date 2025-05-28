
import React, { useState } from 'react';
import { 
  Shield, 
  Share2, 
  Calendar, 
  Key, 
  Users, 
  Clock, 
  Download, 
  Eye,
  Copy,
  Settings,
  Plus,
  Trash2
} from 'lucide-react';

const AccessControl = () => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);
  const [shareSettings, setShareSettings] = useState({
    password: '',
    expirationDate: '',
    maxDownloads: '',
    watermark: false,
    requireLogin: false
  });

  const documents = [
    {
      id: '1',
      name: 'Rapport financier Q4 2024.pdf',
      shared: true,
      permissions: 3,
      expires: '2024-02-15'
    },
    {
      id: '2',
      name: 'Contrat client ABC.docx',
      shared: false,
      permissions: 1,
      expires: null
    },
    {
      id: '3',
      name: 'Présentation projet X.pptx',
      shared: true,
      permissions: 5,
      expires: '2024-01-30'
    }
  ];

  const permissions = [
    {
      id: '1',
      user: 'Marie Dubois',
      role: 'Éditeur',
      type: 'user',
      granted: '2024-01-10',
      expires: '2024-02-10'
    },
    {
      id: '2',
      user: 'Équipe Finance',
      role: 'Lecteur',
      type: 'group',
      granted: '2024-01-12',
      expires: 'Permanent'
    },
    {
      id: '3',
      user: 'Pierre Martin',
      role: 'Commentateur',
      type: 'user',
      granted: '2024-01-14',
      expires: '2024-01-28'
    }
  ];

  const shareLinks = [
    {
      id: '1',
      name: 'Lien public - Rapport Q4',
      url: 'https://docsecure.app/share/abc123def456',
      downloads: 12,
      maxDownloads: 50,
      expires: '2024-02-15',
      protected: true
    },
    {
      id: '2',
      name: 'Lien temporaire - Contrat',
      url: 'https://docsecure.app/share/xyz789uvw012',
      downloads: 3,
      maxDownloads: 10,
      expires: '2024-01-25',
      protected: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Contrôle d'Accès et Partage</h1>
        <p className="text-gray-600">Gérez les permissions et les liens de partage sécurisés</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Selection */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg border p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Sélectionner un document</h2>
            <div className="space-y-2">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDocument(doc.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedDocument === doc.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2">{doc.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          doc.shared ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {doc.shared ? 'Partagé' : 'Privé'}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {doc.permissions} permissions
                        </span>
                      </div>
                    </div>
                    <Shield className="text-gray-400" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Permissions Management */}
        <div className="lg:col-span-2 space-y-4">
          {selectedDocument ? (
            <>
              {/* Current Permissions */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Permissions actuelles</h2>
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 text-sm">
                    <Plus size={16} />
                    <span>Ajouter permission</span>
                  </button>
                </div>
                
                <div className="space-y-3">
                  {permissions.map((permission) => (
                    <div key={permission.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          permission.type === 'user' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          {permission.type === 'user' ? 
                            <Users className="text-blue-600" size={16} /> : 
                            <Users className="text-green-600" size={16} />
                          }
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{permission.user}</p>
                          <p className="text-sm text-gray-500">{permission.role} • Accordé le {permission.granted}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          Expire: {permission.expires}
                        </span>
                        <button className="text-gray-400 hover:text-red-600">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Settings */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Paramètres de partage</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mot de passe (optionnel)
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="password"
                        value={shareSettings.password}
                        onChange={(e) => setShareSettings({...shareSettings, password: e.target.value})}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Mot de passe sécurisé"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date d'expiration
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="date"
                        value={shareSettings.expirationDate}
                        onChange={(e) => setShareSettings({...shareSettings, expirationDate: e.target.value})}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre max. de téléchargements
                    </label>
                    <div className="relative">
                      <Download className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="number"
                        value={shareSettings.maxDownloads}
                        onChange={(e) => setShareSettings({...shareSettings, maxDownloads: e.target.value})}
                        className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Illimité"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={shareSettings.watermark}
                        onChange={(e) => setShareSettings({...shareSettings, watermark: e.target.checked})}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-sm text-gray-700">Ajouter un filigrane</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={shareSettings.requireLogin}
                        onChange={(e) => setShareSettings({...shareSettings, requireLogin: e.target.checked})}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-sm text-gray-700">Connexion requise</span>
                    </label>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                  <Share2 size={16} />
                  <span>Générer un lien de partage sécurisé</span>
                </button>
              </div>

              {/* Active Share Links */}
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Liens de partage actifs</h2>
                
                <div className="space-y-3">
                  {shareLinks.map((link) => (
                    <div key={link.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{link.name}</h3>
                          <p className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded mt-1">
                            {link.url}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700" title="Copier le lien">
                            <Copy size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-700" title="Paramètres">
                            <Settings size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-700" title="Supprimer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center space-x-1">
                            <Download size={14} />
                            <span>{link.downloads}/{link.maxDownloads} téléchargements</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>Expire le {link.expires}</span>
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          link.protected ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {link.protected ? 'Protégé' : 'Public'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white rounded-lg border p-12 text-center">
              <Shield className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sélectionnez un document</h3>
              <p className="text-gray-500">Choisissez un document dans la liste pour gérer ses permissions et paramètres de partage.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
