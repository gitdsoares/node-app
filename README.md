# Node.js Application Example

[![P-UNIT-PROJECT-CI-MICROSERVICE-NODE](https://github.com/gitdsoares/node-app/actions/workflows/p-unit-project-ci-microservice.yml/badge.svg?branch=main)](https://github.com/gitdsoares/node-app/actions/workflows/p-unit-project-ci-microservice.yml)

This is a simple project made in Node.js, which has an automated Continuous Integration workflow based on reusable templates available on this [repository](https://github.com/gitdsoares/templates/tree/main/.github/workflows).

<br>

## Tech Stack

<div>
  
  <img align="center" alt="node" height="50" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="npm" height="50" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="html" height="50" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
  <img align="center" alt="css" height="50" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
  <img align="center" alt="docker" height="50" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />

</div>

<br>

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/package/npm)
- [HTML](https://pt.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [Docker](https://docs.docker.com/)

<br>

## Running it locally

1. Clone the project:

```bash
  git clone git@github.com:gitdsoares/node-app.git
```

2. To permit traffic to port 8080 run:
```bash
  sudo ufw allow 8080
```

3. Get into the project directory:

```bash
  cd ~/node-app
```

4. Install the project's dependencies:

```bash
  npm install
```

5. Start the application with node app.js:

```bash
  node app.js
```

Navigate your browser to http://localhost:8080. You will load the application landing page.

