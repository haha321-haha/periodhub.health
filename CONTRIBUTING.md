# Contributing to Period Magic

Thank you for considering contributing to Period Magic! We appreciate your help in making this project better. Please follow these guidelines when submitting contributions.

## Code of Conduct

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) before participating in discussions or contributing code.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improvement, please create an issue on our [GitHub Issue Tracker](https://github.com/yourusername/period-magic/issues).

- Provide a clear and concise description of the problem.
- Include steps to reproduce the issue if applicable.
- Mention the version of the project you are using.
- If possible, include screenshots or error messages.

### Submitting Pull Requests

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
    bash
git clone https://github.com/yourusername/period-magic.git
cd period-magic
3. **Create a New Branch**: Create a new branch for your changes.    bash
git checkout -b feature/amazing-feature
4. **Make Changes**: Make your desired changes. 5. **Test Your Changes**: Ensure that your changes work as expected and do not break existing functionality. 6. **Commit Your Changes**: Commit your changes with a descriptive commit message.    bash
git commit -m 'Add some amazing feature'
7. **Push to Your Fork**: Push your changes to your forked repository.    bash
git push origin feature/amazing-feature
```
8. Open a Pull Request: Go to the original repository and click the "New Pull Request" button. Select your branch as the source and the main branch as the target. Fill out the pull request template and submit it.

Coding Standards
Follow the existing coding style and conventions used in the project.
Write clean, readable, and maintainable code.
Add comments where necessary to explain complex logic.
Ensure that your code passes all linting checks.
Documentation
Update relevant documentation if your changes affect how the project works.
Document any new features or significant changes.
Development Setup
Prerequisites
Ensure you have Node.js and npm installed on your machine.

Installation
Clone the repository:
bash
深色版本
git clone https://github.com/yourusername/period-magic.git
cd period-magic
Install dependencies:
bash
深色版本
npm install
Run the development server:
bash
深色版本
npm run dev
Open http://localhost:3000 in your browser.
Build Commands
npm run dev: Start the development server (with hot reloading).
npm run build: Create a production build.
STATIC_EXPORT=true npm run build: Create a static export build.
Project Structure
深色版本
/
├── app/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   └── public/         # Static assets
├── lib/                # Utility functions
└── types/              # TypeScript types
We look forward to your contributions!