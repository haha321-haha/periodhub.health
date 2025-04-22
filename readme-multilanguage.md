# NoDownloadGames.click 多语言支持文档

本文档介绍了如何为NoDownloadGames.click网站维护和扩展多语言支持功能。

## 当前支持的语言

- 英文 (en) - 默认语言
- 中文 (zh)

## 技术实现原理

网站采用基于JavaScript的动态语言切换方案，主要组件包括：

1. **i18n.js** - 核心翻译功能和语言切换逻辑
2. **language-switcher.css** - 语言切换按钮样式
3. **HTML中的data-i18n属性** - 标记需要翻译的元素

## 添加新语言支持

### 1. 更新翻译文件

在`js/i18n.js`文件中的`translations`对象中添加新语言：

```javascript
const translations = {
  "en": {
    // 英文翻译
  },
  "zh": {
    // 中文翻译
  },
  "es": {
    // 西班牙语翻译 (示例)
    "home": "Inicio",
    "popular_games": "Juegos Populares",
    // ... 添加所有需要的翻译键值对
  }
};
```

### 2. 添加新语言切换按钮

在所有页面的导航栏中添加新语言按钮：

```html
<div class="language-switcher">
  <button class="language-btn" data-lang="en" onclick="changeLanguage('en')">EN</button>
  <button class="language-btn" data-lang="zh" onclick="changeLanguage('zh')">中文</button>
  <!-- 新语言按钮 -->
  <button class="language-btn" data-lang="es" onclick="changeLanguage('es')">ES</button>
</div>
```

### 3. 验证所有翻译键

确保所有HTML中使用的`data-i18n`键在新语言中都有对应的翻译值。

## 添加新页面的多语言支持

为新页面添加多语言支持需要执行以下步骤：

1. 在HTML头部引入必要的CSS和JavaScript：

```html
<link rel="stylesheet" href="../css/language-switcher.css">
<script src="../js/i18n.js"></script>
```

2. 添加语言切换按钮到导航栏：

```html
<div class="language-switcher">
  <button class="language-btn" data-lang="en" onclick="changeLanguage('en')">EN</button>
  <button class="language-btn" data-lang="zh" onclick="changeLanguage('zh')">中文</button>
</div>
```

3. 使用`data-i18n`属性标记需要翻译的元素：

```html
<h1 data-i18n="page_title">Page Title</h1>
<p data-i18n="page_description">Page description goes here.</p>
```

4. 在`js/i18n.js`文件中添加新的翻译键：

```javascript
"en": {
  // 现有翻译
  "page_title": "Page Title",
  "page_description": "Page description goes here."
},
"zh": {
  // 现有翻译
  "page_title": "页面标题",
  "page_description": "页面描述在这里。"
}
```

## 内容翻译指南

- 保持翻译的一致性，特别是常用术语
- 注意不同语言的文本长度可能不同，UI设计应能适应
- 考虑文化差异，确保翻译内容适合目标语言的文化背景
- 使用自然、流畅的语言，而不是逐字直译

## 特殊元素翻译

除了标准文本内容外，以下元素也可以进行翻译：

- **占位符文本** - 使用`data-i18n-placeholder`属性
- **标题提示** - 使用`data-i18n-title`属性
- **动态生成的按钮文本** - 在JavaScript中使用`translations[lang][key]`

JavaScript示例：
```javascript
pauseButton.textContent = translations[getCurrentLanguage()]["pause"];
```

## 故障排除

如果遇到翻译相关问题：

1. 检查HTML元素是否正确添加了`data-i18n`属性
2. 确认所有使用的键在`translations`对象中都有定义
3. 检查控制台是否有JavaScript错误
4. 验证语言代码（如"en"、"zh"）是否一致

## 性能考虑

当前实现方式适用于中小型网站。如果网站规模显著增长，可考虑以下优化：

- 将翻译数据拆分为单独的JSON文件按需加载
- 实现翻译内容的延迟加载
- 对于大型应用，考虑使用专业的i18n库如i18next或vue-i18n 