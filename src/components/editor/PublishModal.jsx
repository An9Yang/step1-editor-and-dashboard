import React, { useState } from 'react';

function PublishModal({ onClose }) {
    const [subdomain, setSubdomain] = useState('');
    const [accessLevel, setAccessLevel] = useState('Anyone');
    const [websiteInfoExpanded, setWebsiteInfoExpanded] = useState(false);
    const [siteTitle, setSiteTitle] = useState('Allbirds: Comfortable, Sustainable Shoes');
    const [siteDescription, setSiteDescription] = useState("Allbirds: The world's most comfortable shoes, flats, and clothing made with natural materials like merino wool and eucalyptus. FREE shipping & returns.");
    const [shareImage, setShareImage] = useState(null);

    const MAX_DESCRIPTION_LENGTH = 150;

    // Close when clicking outside content (overlay)
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {/* Overlay to handle click outside */}
            <div
                className="fixed inset-0 z-[1001] bg-transparent"
                onClick={handleOverlayClick}
            />

            {/* Modal Content */}
            <div className="absolute top-10 right-0 z-[1002] w-[400px] bg-[#fcfbf8] rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-[#eceae4] p-6 flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-[20px] font-semibold text-[#1c1c1c] m-0">Publish</h2>
                    <p className="text-[14px] text-[#5f5f5d] leading-relaxed m-0">
                        Make your project live and track its performance.
                    </p>
                </div>

                {/* Domain Section */}
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={subdomain}
                        onChange={(e) => setSubdomain(e.target.value)}
                        placeholder="Add subdomain (empty to auto-generate)"
                        className="w-full h-10 px-3 rounded-[8px] bg-white border border-[#eceae4] text-[14px] text-[#1c1c1c] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#1e52f1] focus:ring-1 focus:ring-[#1e52f1] transition-all"
                    />
                    <div>
                        <button className="bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[13px] font-medium px-4 py-2 rounded-[8px] transition-colors">
                            Add custom domain
                        </button>
                    </div>
                </div>

                {/* Website Info */}
                <div className="flex flex-col">
                    <div
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={() => setWebsiteInfoExpanded(!websiteInfoExpanded)}
                    >
                        <span className="text-[15px] font-medium text-[#1c1c1c]">Website info</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`w-4 h-4 text-[#5f5f5d] group-hover:text-[#1c1c1c] transition-all duration-200 ${websiteInfoExpanded ? 'rotate-90' : ''}`}
                        >
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Expanded Content */}
                    {websiteInfoExpanded && (
                        <div className="mt-4 flex flex-col gap-5">
                            {/* Icon & Title */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[14px] font-medium text-[#1c1c1c]">Icon & title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#9ca3af] cursor-help">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-3 bg-[#f7f4ed] rounded-[10px] px-4 py-3">
                                    <span className="text-xl">🍊</span>
                                    <input
                                        type="text"
                                        value={siteTitle}
                                        onChange={(e) => setSiteTitle(e.target.value)}
                                        className="flex-1 bg-transparent text-[14px] text-[#1c1c1c] focus:outline-none"
                                        placeholder="Enter site title"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[14px] font-medium text-[#1c1c1c]">Description</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#9ca3af] cursor-help">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <textarea
                                        value={siteDescription}
                                        onChange={(e) => setSiteDescription(e.target.value)}
                                        rows={4}
                                        className="w-full bg-[#f7f4ed] rounded-[10px] px-4 py-3 text-[14px] text-[#1c1c1c] focus:outline-none resize-none leading-relaxed"
                                        placeholder="Enter site description"
                                    />
                                    <span className={`absolute bottom-3 right-3 text-[12px] ${siteDescription.length > MAX_DESCRIPTION_LENGTH ? 'text-red-500' : 'text-[#9ca3af]'}`}>
                                        {siteDescription.length} / {MAX_DESCRIPTION_LENGTH}
                                    </span>
                                </div>
                            </div>

                            {/* Share Image */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[14px] font-medium text-[#1c1c1c]">Share image</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#9ca3af] cursor-help">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div
                                    className="relative bg-[#f7f4ed] rounded-[10px] h-[180px] flex items-center justify-center cursor-pointer hover:bg-[#eceae4] transition-colors overflow-hidden"
                                    onClick={() => document.getElementById('share-image-input').click()}
                                >
                                    {shareImage ? (
                                        <img
                                            src={shareImage}
                                            alt="Share preview"
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-[48px] font-light text-[#1c1c1c]" style={{ fontFamily: 'cursive' }}>allbirds</span>
                                        </div>
                                    )}
                                    <input
                                        id="share-image-input"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onload = (e) => setShareImage(e.target.result);
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Access Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#f7f4ed] flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1c1c1c]">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            </svg>
                        </div>
                        <span className="text-[14px] text-[#1c1c1c]">Who can access?</span>
                    </div>

                    <div className="relative">
                        <select
                            value={accessLevel}
                            onChange={(e) => setAccessLevel(e.target.value)}
                            className="appearance-none bg-white border border-[#eceae4] rounded-[8px] py-1.5 pl-3 pr-8 text-[14px] text-[#1c1c1c] hover:border-[#d0cdc6] focus:outline-none focus:border-[#1e52f1] cursor-pointer"
                        >
                            <option value="Anyone">Anyone</option>
                            <option value="Team">Team only</option>
                            <option value="Password">Password protected</option>
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#5f5f5d]">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex gap-3 pt-2">
                    <button className="flex-1 bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[14px] font-medium py-2.5 rounded-[10px] transition-colors">
                        Review security
                    </button>
                    <button
                        className="flex-1 bg-[#1e52f1] hover:bg-[#1640d6] text-white text-[14px] font-medium py-2.5 rounded-[10px] shadow-sm transition-colors"
                        onClick={() => {
                            console.log('Publishing with:', { subdomain, accessLevel });
                            onClose();
                        }}
                    >
                        Publish
                    </button>
                </div>

            </div>
        </>
    );
}

export default PublishModal;
