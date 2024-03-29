# Node.js Application Example

[![Workflow](https://github.com/gitdsoares/node-app/actions/workflows/p-unit-project-ci-microservice.yml/badge.svg?branch=main)](https://github.com/gitdsoares/node-app/actions/workflows/p-unit-project-ci-microservice.yml)

Here is a brief description of the workflow executed in this Continuous Integration:

1. Testing
    - Installation of dependencies.
    - Unit Tests.

2. Compliance & Vulnerability Management
    - Installation of tools.
    - SAST Scan.
    - File Scan.
    - Image Scan.
    - Publication of reports.

3. Build
    - Creation of versioning tag.
    - Build Docker image.
    - Push Docker image to the Docker registry.

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