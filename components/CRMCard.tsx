"use client";

import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
    return (
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-48 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center font-bold text-blue-200">
                    CRM PREVIEW
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                        Live Demo <ExternalLink size={16} />
                    </button>
                    <button className="flex-1 bg-gray-50 text-gray-900 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-100 transition-colors">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
}