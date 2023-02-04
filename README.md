# Intro Service

> Introduction Service to BnB

# Related Projects


# Table of Contents

1. [Getting Started](#getting-started)
1. [Prerequesites](#prerequesites)
1. [Installation](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Tech Framework used](#tech-framework-used)

# Getting Started
These are the steps to get up and running with my service :+1:

# Prerequesites
Make sure you have installed the following prerequesites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* postgreSQL server - Installation docs for: [macOS](https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html), [Windows](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html), for [WSL - Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
* Make sure PostgreSQL server is running -

## Installation
* Clone repository

`git clone https://github.com/Epona-SDC/melvin-service.git`

* Install dependencies

`npm install`

# Usage
* Create index.js in the config directory
  * In your config/index.js add the following code, with your own credentials:

  ```javascript
  module.exports = {
    postgresPassword: `yourPassword`,
    postgresUsername: `userName`,
  };
  ```
  * Once your credentials are in this config file you can proceed to the next step.

* Run csv data builder

  `npm run build-data`

* Create database
`npm run create-db`

* Import data on postgreSQL CLI
 1. From the project's directory change current folder database/data
 `cd database/data`
 1. Open postgres CLI
 `sudo -u postgres psql`
 1. Run the sql script, to connect to and populate airbnblisting database. Enter the following:
 `\i populateAirbnbListing.sql`

* Build webpack bundle

  `npm run build`

* Start express server

  `npm run server`

The service will then run on http://localhost:3002. Bundle.js file should also be in http://localhost:3002/app.js

### Testing w/ Artillery
- Needs Readme for Artillery usage- See Enhancement [Issue](https://github.com/Epona-SDC/melvin-service/issues/7)

# Tech Framework Used
* React
* Express
* postgreSQL
* Jest
* webpack
* Artillery

