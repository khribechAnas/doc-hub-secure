
import React, { useState } from 'react';
import { 
  FileText, 
  Filter, 
  Search, 
  Upload, 
  MoreVertical, 
  Download, 
  Share2, 
  Trash2,
  Folder,
  Plus,
  Grid3X3,
  List
} from 'lucide-react';

const Documents = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const folders = [
    { name: 'Finances', count: 45, color: 'blue' },
    { name: 'RH', count: 23, color: 'green' },
    { name: 'Marketing', count: 67, color: 'purple' },
    { name: 'Projets', count: 89, color: 'orange' }
  ];

  const documents = [
    {
      id: 1,
      name: 'Rapport financier Q4 2024.pdf',
      size: '2.4 MB',
      modified: '2024-01-15',
      author: 'Marie Dubois',
      tags: ['Finance', 'Rapport'],
      type: 'pdf'
    },
    {
      id: 2,
      name: 'Contrat client ABC.docx',
      size: '856 KB',
      modified: '2024-01-14',
      author: 'Pierre Martin',
      tags: ['Contrat', 'Client'],
      type: 'docx'
    },
    {
      id: 3,
      name: 'Présentation projet X.pptx',
      size: '15.2 MB',
      modified: '2024-01-13',
      author: 'Sophie Laurent',
      tags: ['Présentation', 'Projet'],
      type: 'pptx'
    },
    {
      id: 4,
      name: 'Budget marketing 2024.xlsx',
      size: '1.8 MB',
      modified: '2024-01-12',
      author: 'Jean Dupont',
      tags: ['Marketing', 'Budget'],
      type: 'xlsx'
    }
  ];

  const getFileIcon = (type: string) => {
    return <FileText className="text-blue-600" size={20} />;
  };

  const getFileColor = (type: string) => {
    const colors: { [key: string]: string } = {
      pdf: 'bg-red-100 text-red-600',
      docx: 'bg-blue-100 text-blue-600',
      pptx: 'bg-orange-100 text-orange-600',
      xlsx: 'bg-green-100 text-green-600'
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Documents</h1>
          <p className="text-gray-600">Organisez et gérez vos documents</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Upload size={20} />
          <span>Téléverser un document</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-64 space-y-4">
          {/* Create Folder */}
          <button className="w-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition-colors group">
            <Plus size={20} className="text-gray-400 group-hover:text-blue-500 mx-auto mb-2" />
            <span className="text-gray-600 group-hover:text-blue-500 text-sm font-medium">Nouveau dossier</span>
          </button>

          {/* Folders */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-medium text-gray-900 mb-3">Dossiers</h3>
            <div className="space-y-2">
              {folders.map((folder, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <Folder className={`text-${folder.color}-500`} size={16} />
                    <span className="text-sm text-gray-700">{folder.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{folder.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-medium text-gray-900 mb-3">Filtres</h3>
            <div className="space-y-2">
              {[
                { key: 'all', label: 'Tous les documents' },
                { key: 'pdf', label: 'PDF' },
                { key: 'docx', label: 'Word' },
                { key: 'xlsx', label: 'Excel' },
                { key: 'pptx', label: 'PowerPoint' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setSelectedFilter(filter.key)}
                  className={`w-full text-left px-2 py-1 rounded text-sm ${
                    selectedFilter === filter.key
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Search and View Controls */}
          <div className="bg-white rounded-lg border p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher des documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Filter size={20} />
                </button>
                <div className="flex border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid3X3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg border">
            {viewMode === 'grid' ? (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getFileColor(doc.type)}`}>
                        {getFileIcon(doc.type)}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2">{doc.name}</h3>
                    <div className="text-xs text-gray-500 space-y-1">
                      <p>Taille: {doc.size}</p>
                      <p>Modifié: {doc.modified}</p>
                      <p>Par: {doc.author}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {doc.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-700" title="Télécharger">
                          <Download size={14} />
                        </button>
                        <button className="text-green-600 hover:text-green-700" title="Partager">
                          <Share2 size={14} />
                        </button>
                      </div>
                      <button className="text-red-600 hover:text-red-700" title="Supprimer">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-900">Nom</th>
                      <th className="text-left p-4 font-medium text-gray-900">Taille</th>
                      <th className="text-left p-4 font-medium text-gray-900">Modifié</th>
                      <th className="text-left p-4 font-medium text-gray-900">Auteur</th>
                      <th className="text-left p-4 font-medium text-gray-900">Tags</th>
                      <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id} className="border-b hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded flex items-center justify-center ${getFileColor(doc.type)}`}>
                              {getFileIcon(doc.type)}
                            </div>
                            <span className="font-medium text-gray-900">{doc.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{doc.size}</td>
                        <td className="p-4 text-gray-600">{doc.modified}</td>
                        <td className="p-4 text-gray-600">{doc.author}</td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {doc.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-700" title="Télécharger">
                              <Download size={16} />
                            </button>
                            <button className="text-green-600 hover:text-green-700" title="Partager">
                              <Share2 size={16} />
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
