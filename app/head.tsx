import React from'react';

const HeadComponent: React.FC = () => {
  return (
    <>
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
      {/* 如果项目还需要其他头部相关的配置，比如引入 CSS 样式文件、设置 meta 标签等，都可以在这里添加 */}
    </>
  );
};

export default HeadComponent;