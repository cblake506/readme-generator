const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, contribution, testInstructions, github, email }) =>
`# ${title}

## Description
${description}

## Table of Contents 

## Installation 
${installation}

## Usage 
${usage}

## License 

## Contributing 
${contribution}

## Tests 
${testInstructions}

## Questions
Github: https://github.com/${github}
email: mailto:${email}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your repository?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your repository.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your repository.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your repository.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide contribution instructions for your repository.',
    },
    {
      type: 'input',
      name: 'testInstructions',
      message: 'Please provide test instructions for your repository.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your github username.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address.',
    }
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
