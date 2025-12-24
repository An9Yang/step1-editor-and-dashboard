import React from 'react';

function CodeEditorPanel() {
    return (
        <div className="h-full flex flex-col bg-white">
            {/* Editor Tabs or Breadcrumbs */}
            <div className="flex items-center px-4 py-2 border-b border-[#eceae4] bg-[#fcfbf8]">
                <div className="flex items-center gap-2 text-sm text-[#5f5f5d]">
                    <span className="px-2 py-1 bg-white border border-[#eceae4] rounded text-[#1c1c1c] shadow-sm">App.jsx</span>
                </div>
            </div>

            <div className="flex-1 flex min-h-0">
                {/* Main Code Area */}
                <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-relaxed text-[#1c1c1c]">
                    <pre>
                        {`import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero 
        title="Welcome to our platform"
        subtitle="Build amazing things with us."
      />
      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature cards would go here */}
        </section>
      </main>
    </div>
  );
}

export default App;`}
                    </pre>
                </div>


            </div>
        </div>
    );
}

export default CodeEditorPanel;
