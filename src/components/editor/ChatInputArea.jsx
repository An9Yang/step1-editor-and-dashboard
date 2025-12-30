import { useState } from 'react';
import AIResponseCard from './AIResponseCard';
import CloudActions from './CloudActions';

/**
 * ChatInputArea - AI响应区域
 * 面向非技术用户的简洁展示
 */
function ChatInputArea() {
  // 模拟数据 - 实际使用时从props或context获取
  const [responses] = useState([
    {
      id: 1,
      status: 'completed',
      title: '网站首页已完成',
      summary: '根据您上传的设计稿，我已经完成了 Allbirds 风格的首页克隆，包括导航栏、Banner、产品展示区等核心模块。',
      filesChanged: [
        { name: 'src/components/HeroSection.jsx', changes: 45 },
        { name: 'src/components/Header.jsx', changes: 32 },
        { name: 'src/components/ProductGrid.jsx', changes: 28 },
        { name: 'src/styles/globals.css', changes: 15 },
      ],
      timestamp: '刚刚',
      technicalDetails: (
        <div className="space-y-2">
          <p>使用了以下技术实现：</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>React 组件化架构</li>
            <li>Tailwind CSS 样式系统</li>
            <li>响应式布局适配移动端</li>
            <li>图片懒加载优化性能</li>
          </ul>
        </div>
      ),
    }
  ]);

  const handleFileClick = (file) => {
    // 点击文件跳转到代码编辑器
    console.log('Navigate to file:', file);
  };

  return (
    <div className="w-full caret-[#1c1c1c] [color-scheme:light]">
      {/* AI 响应列表 */}
      <div className="space-y-4 pb-2">
        {responses.map((response) => (
          <AIResponseCard
            key={response.id}
            status={response.status}
            title={response.title}
            summary={response.summary}
            filesChanged={response.filesChanged}
            timestamp={response.timestamp}
            technicalDetails={response.technicalDetails}
            onFileClick={handleFileClick}
          />
        ))}
      </div>

      {/* 反馈操作区 */}
      <div className="mt-2">
        <CloudActions />
      </div>
    </div>
  );
}

export default ChatInputArea;
