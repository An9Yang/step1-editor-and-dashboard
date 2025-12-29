import React, { useState, useEffect, useRef } from 'react';

function ShareProjectModal({ onClose, anchorRef }) {
    const [view, setView] = useState('main'); // 'main', 'invited', 'preview'
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Calculate position based on anchor
    useEffect(() => {
        if (anchorRef?.current) {
            const rect = anchorRef.current.getBoundingClientRect();
            // Align top-right of modal with bottom-right of button roughly, but adjust for specific design
            // based on images, it appears centered or right-aligned below the share button.
            // Let's position it absolute relative to the button if we can, or fixed.
            // But since this is a modal that might need to be on top of everything, fixed is often safer.
            // However, the previous PublishModal was absolute. Let's stick to absolute if the parent is relative.
            // Actually, PublishModal was: absolute top-10 right-0.
            // Let's assume the parent of this modal will be the same container as the button.
        }
    }, [anchorRef]);

    // Close when clicking outside
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const MainView = () => {
        const [inviteLinkAccess, setInviteLinkAccess] = useState('edit'); // 'edit', 'view', 'disabled'
        const [inviteLinkDropdownOpen, setInviteLinkDropdownOpen] = useState(false);
        const [canEditDropdownOpen, setCanEditDropdownOpen] = useState(false);

        // Mock data
        const collaborators = [
            { id: 1, name: "HaoCheng's Step1", role: 'Can edit', avatar: 'H' },
            { id: 2, email: "smile.xuhc@gmail.com", role: 'Owner', avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c' }
        ];

        return (
            <div className="flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex flex-col gap-1.5">
                    <h2 className="text-[16px] font-[600] text-[#1c1c1c] m-0">Share project</h2>
                </div>

                {/* Add People Input */}
                <div>
                    <input
                        type="text"
                        placeholder="Add people"
                        className="w-full h-[36px] px-3 rounded-[6px] bg-white border border-[#eceae4] text-[13px] text-[#1c1c1c] placeholder:text-[#9a9a98] focus:outline-none focus:border-[#1e52f1] focus:ring-1 focus:ring-[#1e52f1] transition-all"
                    />
                </div>

                {/* Project Access */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-[13px] font-[500] text-[#1c1c1c]">Project access</h3>

                    <div className="flex flex-col">
                        {/* Invited People Row */}
                        <div
                            className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-[#f7f4ed] -mx-2 px-2 rounded-[6px] transition-colors group"
                            onClick={() => setView('invited')}
                        >
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-[#f7f4ed] flex items-center justify-center text-[#5f5f5d]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                        <path fillRule="evenodd" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 12 2.25Zm0 8.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Zm0 1.5c-2.61 0-4.83.653-6.25 1.423-.833.452-1.302 1.574-1.302 3.12 1.747 1.137 4.295 1.87 7.552 1.87 3.257 0 5.805-.733 7.552-1.87 0-1.545-.469-2.668-1.302-3.12-1.42-.77-3.64-1.423-6.25-1.423Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-[13px] text-[#1c1c1c]">People you invited (1)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    <img src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c" alt="User" className="w-6 h-6 rounded-full border-2 border-white" />
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#9ca3af] group-hover:text-[#1c1c1c]">
                                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                        {/* Collaborator Row 1 */}
                        <div className="flex items-center justify-between py-1.5">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-[#be185d] flex items-center justify-center text-white text-[10px] font-medium">
                                    H
                                </div>
                                <span className="text-[13px] text-[#1c1c1c]">HaoCheng's Step1</span>
                            </div>
                            <div className="relative">
                                <button
                                    className="flex items-center gap-1 text-[12px] text-[#5f5f5d] hover:text-[#1c1c1c] hover:bg-[#f7f4ed] px-2 py-1 rounded-[6px] transition-colors"
                                    onClick={() => setCanEditDropdownOpen(!canEditDropdownOpen)}
                                >
                                    <span>Can edit</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {canEditDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setCanEditDropdownOpen(false)} />
                                        <div className="absolute right-0 top-full mt-1 w-[240px] bg-[#fcfbf8] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] z-20 overflow-hidden py-1">
                                            <button className="w-full text-left px-3 py-1.5 hover:bg-[#f7f4ed] flex items-center justify-between group">
                                                <div className="flex flex-col">
                                                    <span className="text-[13px] text-[#1c1c1c] font-medium">Can edit</span>
                                                    <span className="text-[11px] text-[#9a9a98]">Full access to project</span>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#1c1c1c]">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <button className="w-full text-left px-3 py-1.5 hover:bg-[#f7f4ed] flex items-center justify-between group">
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[13px] text-[#1c1c1c]">No access</span>
                                                        <span className="bg-[#ede9fe] text-[#7c3aed] text-[9px] px-1.5 py-0.5 rounded-[4px] font-medium flex items-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5">
                                                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v3H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm0 6V6a2 2 0 012-2 2 2 0 012 2v3H8V8z" clipRule="evenodd" />
                                                            </svg>
                                                            Business
                                                        </span>
                                                    </div>
                                                    <span className="text-[11px] text-[#9a9a98]">Remove workspace access</span>
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Owner Row */}
                        <div className="flex items-center justify-between py-1.5">
                            <div className="flex items-center gap-2.5">
                                <img src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c" alt="Owner" className="w-7 h-7 rounded-full" />
                                <span className="text-[13px] text-[#1c1c1c]">smile.xuhc@gmail.com</span>
                            </div>
                            <span className="text-[12px] text-[#9a9a98] px-2">Owner</span>
                        </div>

                        {/* Invite Link Row */}
                        <div className="flex items-center justify-between py-1.5">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-[6px] bg-[#f7f4ed] flex items-center justify-center text-[#5f5f5d]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="8.5" cy="7" r="4"></circle>
                                        <line x1="20" y1="8" x2="20" y2="14"></line>
                                        <line x1="23" y1="11" x2="17" y2="11"></line>
                                    </svg>
                                </div>
                                <span className="text-[13px] text-[#1c1c1c]">Invite link</span>
                            </div>
                            <div className="relative">
                                <button
                                    className="flex items-center gap-1 text-[12px] text-[#5f5f5d] hover:text-[#1c1c1c] hover:bg-[#f7f4ed] px-2 py-1 rounded-[6px] transition-colors"
                                    onClick={() => setInviteLinkDropdownOpen(!inviteLinkDropdownOpen)}
                                >
                                    <span>
                                        {inviteLinkAccess === 'edit' && 'Edit access'}
                                        {inviteLinkAccess === 'view' && 'View access'}
                                        {inviteLinkAccess === 'disabled' && 'Disabled'}
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {inviteLinkDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setInviteLinkDropdownOpen(false)} />
                                        <div className="absolute right-0 top-full mt-1 w-[260px] bg-[#fcfbf8] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] z-20 overflow-hidden py-1">
                                            {/* Edit Access Option */}
                                            <button
                                                className="w-full text-left px-3 py-1.5 hover:bg-[#f7f4ed] flex items-start gap-2.5 group"
                                                onClick={() => { setInviteLinkAccess('edit'); setInviteLinkDropdownOpen(false); }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 text-[#5f5f5d] group-hover:text-[#1c1c1c]">
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                                </svg>
                                                <div className="flex flex-col">
                                                    <span className="text-[13px] text-[#1c1c1c] font-medium">Edit access</span>
                                                    <span className="text-[11px] text-[#9a9a98]">Anyone with link becomes editor</span>
                                                </div>
                                            </button>

                                            {/* View Access Option */}
                                            <button
                                                className="w-full text-left px-3 py-1.5 hover:bg-[#f7f4ed] flex items-start gap-2.5 group"
                                                onClick={() => { setInviteLinkAccess('view'); setInviteLinkDropdownOpen(false); }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 text-[#5f5f5d] group-hover:text-[#1c1c1c]">
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                                <div className="flex flex-col">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[13px] text-[#1c1c1c] font-medium">View access</span>
                                                        <span className="bg-[#ede9fe] text-[#7c3aed] px-1.5 py-0.5 rounded-[4px] text-[9px] flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-2.5 h-2.5">
                                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-[11px] text-[#9a9a98]">Anyone with link becomes viewer</span>
                                                </div>
                                            </button>

                                            {/* Disabled Option */}
                                            <button
                                                className="w-full text-left px-3 py-1.5 hover:bg-[#f7f4ed] flex items-start gap-2.5 group"
                                                onClick={() => { setInviteLinkAccess('disabled'); setInviteLinkDropdownOpen(false); }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 mt-0.5 text-[#5f5f5d] group-hover:text-[#1c1c1c]">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                                                </svg>
                                                <div className="flex flex-col">
                                                    <span className="text-[13px] text-[#1c1c1c] font-medium">Disabled</span>
                                                    <span className="text-[11px] text-[#9a9a98]">Invite link disabled</span>
                                                </div>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copy Link Button */}
                <button className="w-full bg-[#1c1c1c] hover:bg-black text-white text-[13px] font-medium py-2 rounded-[8px] transition-colors shadow-sm mt-1">
                    Copy invite link
                </button>

                {/* Footer Buttons */}
                <div className="flex gap-2.5 pt-1">
                    <button
                        className="flex-1 bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[13px] font-medium py-2 rounded-[8px] transition-colors flex items-center justify-center gap-2"
                        onClick={() => setView('preview')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        Share preview
                    </button>
                    <button className="flex-1 bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[13px] font-medium py-2 rounded-[8px] transition-colors flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Publish project
                    </button>
                </div>
            </div>
        );
    };

    const InvitedView = () => (
        <div className="flex flex-col gap-4 animate-in slide-in-from-right-10 duration-200">
            {/* Header */}
            <div className="flex flex-col gap-3">
                <button
                    onClick={() => setView('main')}
                    className="flex items-center gap-1 text-[#5f5f5d] hover:text-[#1c1c1c] text-[13px] w-fit -ml-1 pl-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M19 12H5"></path>
                        <path d="M12 19l-7-7 7-7"></path>
                    </svg>
                    Share project
                </button>

                <input
                    type="text"
                    placeholder="Invite by email"
                    className="w-full h-[36px] px-3 rounded-[6px] bg-white border border-[#eceae4] text-[13px] text-[#1c1c1c] placeholder:text-[#9a9a98] focus:outline-none focus:border-[#1e52f1] focus:ring-1 focus:ring-[#1e52f1] transition-all"
                />
            </div>

            {/* Who has access */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[13px] font-[500] text-[#1c1c1c]">Who has access</h3>

                {/* List */}
                <div className="flex flex-col">
                    <div className="flex items-center justify-between py-1.5">
                        <div className="flex items-center gap-2.5">
                            <img src="https://lh3.googleusercontent.com/a/ACg8ocLTPbwOQImSElqoAA58lISohryAkCnD7tK2wto9KftMFBNMug=s96-c" alt="Owner" className="w-7 h-7 rounded-full" />
                            <span className="text-[13px] text-[#1c1c1c]">smile.xuhc@gmail.com</span>
                        </div>
                        <span className="text-[12px] text-[#9a9a98]">Owner</span>
                    </div>
                </div>
            </div>
        </div>
    );

    const PreviewView = () => (
        <div className="flex flex-col gap-4 animate-in slide-in-from-right-10 duration-200">
            {/* Header */}
            <div className="flex flex-col gap-1.5">
                <button
                    onClick={() => setView('main')}
                    className="flex items-center gap-1 text-[#5f5f5d] hover:text-[#1c1c1c] text-[13px] w-fit -ml-1 pl-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M19 12H5"></path>
                        <path d="M12 19l-7-7 7-7"></path>
                    </svg>
                    Share preview
                </button>

                <p className="text-[13px] text-[#1c1c1c] leading-relaxed mt-1">
                    Create a public link to allow anyone to access a view only version of your project. The link is valid for 7 days.
                </p>
            </div>

            {/* Preview Image */}
            <div className="rounded-[8px] overflow-hidden border border-[#eceae4] bg-[#fcfbf8] aspect-[16/10] relative group">
                {/* Need a placeholder image here if real one isn't available. Using a grey background for now or the one from images */}
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <img
                        src="/step1.png"
                        alt="Project preview"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<span class="text-gray-400">Preview not available</span>';
                        }}
                    />
                </div>
            </div>

            {/* Copy Link Button */}
            <button className="w-full bg-[#f7f4ed] hover:bg-[#eceae4] text-[#1c1c1c] text-[13px] font-medium py-2 rounded-[8px] transition-colors flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                Copy preview link
            </button>
        </div>
    );

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 z-[1001] bg-transparent"
                onClick={handleOverlayClick}
            />

            {/* Modal */}
            <div className="absolute top-10 right-0 z-[1002] w-[400px] bg-[#fcfbf8] rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-[#eceae4] p-5 flex flex-col transition-all duration-300">
                {view === 'main' && <MainView />}
                {view === 'invited' && <InvitedView />}
                {view === 'preview' && <PreviewView />}
            </div>
        </>
    );
}

export default ShareProjectModal;
