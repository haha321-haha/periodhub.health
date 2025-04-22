// 语言文本对象
const translations = {
  'en': {
    // 导航
    'home': 'Home',
    'popular_games': 'Popular Games',
    'game_categories': 'Game Categories',
    'about_us': 'About Us',
    
    // 首页特定
    'hero_title': 'No Downloads, Instant Play',
    'hero_description': 'Play various exciting casual games directly in your browser without downloading any applications. From classic puzzle games to thrilling action games, we have it all.',
    'popular_games_section': 'Popular Games',
    'categories_section': 'Game Categories',
    'about_section': 'About Us',
    'about_desc': 'NoDownloadGames.click offers a variety of free online games that you can play directly in your browser without downloading anything. We carefully select high-quality games across different categories to ensure you have the best gaming experience.',
    'why_us_title': 'Why Choose Us?',
    'why_us_1': 'No downloads required',
    'why_us_2': 'Free to play',
    'why_us_3': 'Works on all devices',
    'why_us_4': 'New games added regularly',
    'cta_title': 'Ready to Play?',
    'cta_desc': 'Join thousands of players enjoying our free online games right now!',
    'browse_category': 'Browse Category',
    'snake_card_desc': 'Guide the snake to eat apples but don\'t hit the walls or yourself!',
    'tetris_card_desc': 'Classic block-clearing game. Rotate and move blocks to complete rows.',
    
    // 游戏通用
    'play_now': 'Play Now',
    'new_game': 'New Game',
    'try_again': 'Try Again',
    'pause': 'Pause',
    'continue': 'Continue',
    'hint': 'Hint',
    'score': 'Score',
    'level': 'Level',
    'time': 'Time',
    'steps': 'Steps',
    'lines_cleared': 'Lines Cleared',
    'game_over': 'Game Over',
    'congratulations': 'Congratulations!',
    'you_win': 'You win!',
    'your_score': 'Your Score',
    'total_steps': 'Total Steps',
    'game_rules': 'Game Rules',
    'next_piece': 'Next Piece',
    
    // 游戏特定
    'memory_game_title': 'Memory Game',
    'memory_game_desc': 'Flip cards and try to match all identical pairs. The game will test your memory and attention. Try to complete the game with the fewest steps and the shortest time!',
    'memory_rule_1': 'Click on a card to flip it, and you can flip two cards at once.',
    'memory_rule_2': 'If two cards match, they will remain flipped.',
    'memory_rule_3': 'If two cards don\'t match, they will automatically flip back.',
    'memory_rule_4': 'The goal is to find all matching pairs with the fewest steps.',
    'memory_rule_5': 'You can choose different difficulty levels to increase or decrease the number of cards.',
    'memory_rule_6': '"Hint" button can temporarily show all cards, but it will increase step count.',
    'memory_rule_7': 'When all matching pairs are found, the game ends.',
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard',
    
    'tetris_title': 'Tetris',
    'tetris_desc': 'Classic Tetris game. Rotate and move different shaped blocks to complete as many rows as possible. See how high you can score!',
    'tetris_rule_1': 'Use the arrow keys to move the block.',
    'tetris_rule_2': 'The up arrow rotates the block.',
    'tetris_rule_3': 'The down arrow accelerates the block.',
    'tetris_rule_4': 'On mobile devices, use the on-screen buttons.',
    'tetris_rule_5': 'When a row is filled, it is removed and you earn points.',
    'tetris_rule_6': 'The more rows you clear, the higher your score.',
    'tetris_rule_7': 'As you progress, the block will fall faster.',
    'tetris_rule_8': 'When the block reaches the top, the game ends.',
    'tetris_rule_9': 'Press spacebar or click "Pause" to pause the game.',
    
    '2048_title': '2048',
    '2048_desc': 'Merge identical numbers to create a 2048 block! Use arrow keys to move the blocks, and a new 2 or 4 block will appear after each move.',
    
    'candy_crush_title': 'Candy Crush',
    'candy_crush_desc': 'Clear candies by swapping adjacent candies to match three or more of the same color! Completely free, play directly in your browser!',
    
    // 分类页面
    'puzzle_games_title': 'Puzzle Games',
    'puzzle_games_desc': 'Challenge your brain! Our collection of puzzle games offers various games that require thinking, strategy, and intelligence. From number puzzles to logic challenges, there\'s something for everyone.',
    
    // 游戏卡片描述
    'candy_crush_card_desc': 'Classic three-in-a-row game, swap candies to create beautiful combinations.',
    '2048_card_desc': 'Slide blocks to merge same numbers, see if you can reach 2048!',
    'sudoku_card_desc': 'Classic number filling game, test your logic thinking ability.',
    'memory_card_desc': 'Flip cards to find pairs, train your memory.',
    'puzzle_bobble_card_desc': 'Shoot colorful bubbles, eliminate bubbles of the same color.',
    'nonogram_card_desc': 'Fill in the grid based on clues, create hidden patterns.',
    
    // 页脚
    'privacy_policy': 'Privacy Policy',
    'terms_of_service': 'Terms of Service',
    'contact_us': 'Contact Us',
    'copyright': '© 2025 NoDownloadGames.click. All rights reserved.'
  },
  'zh': {
    // 导航
    'home': '首页',
    'popular_games': '热门游戏',
    'game_categories': '游戏分类',
    'about_us': '关于我们',
    
    // 首页特定
    'hero_title': '免下载，即刻游戏',
    'hero_description': '无需下载任何应用程序，直接在浏览器中体验各种精彩休闲游戏。从经典的益智游戏到刺激的动作游戏，我们应有尽有。',
    'popular_games_section': '热门游戏',
    'categories_section': '游戏分类',
    'about_section': '关于我们',
    'about_desc': 'NoDownloadGames.click提供各种免费的在线游戏，您可以直接在浏览器中玩，无需下载任何内容。我们精心挑选不同类别的高质量游戏，确保您获得最佳的游戏体验。',
    'why_us_title': '为什么选择我们？',
    'why_us_1': '无需下载',
    'why_us_2': '免费游玩',
    'why_us_3': '适用于所有设备',
    'why_us_4': '定期更新新游戏',
    'cta_title': '准备开始？',
    'cta_desc': '立即加入数千名玩家，享受我们的免费在线游戏！',
    'browse_category': '浏览分类',
    'snake_card_desc': '引导蛇吃苹果，但不要撞到墙壁或自己的身体！',
    'tetris_card_desc': '经典的方块消除游戏。旋转和移动方块以完成整行。',
    
    // 游戏通用
    'play_now': '立即玩',
    'new_game': '新游戏',
    'try_again': '再试一次',
    'pause': '暂停',
    'continue': '继续',
    'hint': '提示',
    'score': '分数',
    'level': '级别',
    'time': '时间',
    'steps': '步数',
    'lines_cleared': '已消行数',
    'game_over': '游戏结束',
    'congratulations': '恭喜！',
    'you_win': '你赢了！',
    'your_score': '你的分数',
    'total_steps': '总步数',
    'game_rules': '游戏规则',
    'next_piece': '下一个方块',
    
    // 游戏特定
    'memory_game_title': '记忆游戏',
    'memory_game_desc': '翻转卡片并尝试找出所有匹配的对子。游戏将考验你的记忆力和注意力。尝试以最少的步骤和最短的时间完成游戏！',
    'memory_rule_1': '点击卡片将其翻转，每次可以翻开两张卡片。',
    'memory_rule_2': '如果两张卡片匹配，它们将保持翻转状态。',
    'memory_rule_3': '如果两张卡片不匹配，它们将自动翻回背面。',
    'memory_rule_4': '目标是以最少的步数找出所有匹配的卡片对。',
    'memory_rule_5': '你可以选择不同的难度级别来增加或减少卡片的数量。',
    'memory_rule_6': '使用"提示"按钮可以暂时查看所有卡片，但会增加步数计数。',
    'memory_rule_7': '找出所有匹配的对子后，游戏结束。',
    'easy': '简单',
    'medium': '中等',
    'hard': '困难',
    
    'tetris_title': '俄罗斯方块',
    'tetris_desc': '经典的俄罗斯方块游戏，旋转和移动不同形状的方块以完成整行。看看你能达到多高的分数和级别！',
    'tetris_rule_1': '使用键盘方向键左右移动方块。',
    'tetris_rule_2': '向上键可以旋转方块。',
    'tetris_rule_3': '向下键可以加速方块下落。',
    'tetris_rule_4': '在移动设备上，使用屏幕下方的方向按钮控制。',
    'tetris_rule_5': '当一行填满方块时，该行会被消除并获得分数。',
    'tetris_rule_6': '消除的行数越多，获得的分数越高。',
    'tetris_rule_7': '随着级别的提升，方块下落的速度会加快。',
    'tetris_rule_8': '当方块堆叠到顶部时，游戏结束。',
    'tetris_rule_9': '按下空格键或点击"暂停"按钮可以暂停游戏。',
    
    '2048_title': '2048',
    '2048_desc': '合并相同的数字，尝试创建一个2048方块！使用箭头键移动方块，每次移动后会随机产生一个新的2或4方块。',
    
    'candy_crush_title': '糖果消除',
    'candy_crush_desc': '消除三个或更多相同颜色的糖果来获取积分！交换相邻的糖果，创建匹配的组合，完成关卡目标。',
    
    // 分类页面
    'puzzle_games_title': '益智游戏',
    'puzzle_games_desc': '挑战你的大脑！我们的益智游戏集合提供各种需要思考、策略和智慧的游戏。从数字谜题到逻辑挑战，总有一款适合你。',
    
    // 游戏卡片描述
    'candy_crush_card_desc': '经典的三消游戏，交换糖果创造美妙的组合。',
    '2048_card_desc': '滑动方块，合并相同数字，看看你能否达到2048！',
    'sudoku_card_desc': '经典的数字填充游戏，考验你的逻辑思维能力。',
    'memory_card_desc': '翻转卡片找出配对，训练你的记忆力。',
    'puzzle_bobble_card_desc': '发射彩色泡泡，消除相同颜色的泡泡组。',
    'nonogram_card_desc': '根据线索填充网格，创建出隐藏的图案。',
    
    // 页脚
    'privacy_policy': '隐私政策',
    'terms_of_service': '使用条款',
    'contact_us': '联系我们',
    'copyright': '© 2025 NoDownloadGames.click. 保留所有权利。'
  }
};

// 获取当前语言或设置默认语言
function getCurrentLanguage() {
  // 始终返回英文作为默认语言
  return 'en';
}

// 切换语言函数
function changeLanguage(lang) {
  // 确保使用支持的语言
  const supportedLang = (lang === 'zh' || lang === 'en') ? lang : 'en';
  
  // 保存用户语言偏好
  localStorage.setItem('preferred_language', supportedLang);
  
  // 更新所有带有data-i18n属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[supportedLang] && translations[supportedLang][key]) {
      element.textContent = translations[supportedLang][key];
    }
  });

  // 更新所有带有data-i18n-placeholder属性的元素
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[supportedLang] && translations[supportedLang][key]) {
      element.placeholder = translations[supportedLang][key];
    }
  });

  // 更新所有带有data-i18n-title属性的元素
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (translations[supportedLang] && translations[supportedLang][key]) {
      element.title = translations[supportedLang][key];
    }
  });
  
  // 更新页面语言属性
  document.documentElement.lang = supportedLang;
  
  // 更新语言切换按钮状态
  document.querySelectorAll('.language-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === supportedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  console.log('Language changed to: ' + supportedLang);
}

// 文档加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  // 初始化语言为英文
  changeLanguage('en');
  
  // 绑定语言切换事件
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
});

// 导出函数供外部使用
window.changeLanguage = changeLanguage;
window.getCurrentLanguage = getCurrentLanguage; 