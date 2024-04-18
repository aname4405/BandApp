https://www.youtube.com/watch?v=eVZcI7m8cKc

# Estate Agents Application

## Getting started

First run the backend and if not already done re-create the tables using the Backend instructions below.  

Once the backend is running, move on to the frontend instructions. 

## Useful tools

### Thunderclient

Thunderclient is a VSCode extension that basically replaces Postman. 

VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client

You can import the test suite by clicking on the `Import` button in the Thunderclient toolbar, then selecting [thunder-collection_EstateAgentTests.json](spring-boot-backend/thunder-collection_EstateAgentTests.json)

## Backend

Spring boot app that hosts an in-memory table using H2 and manages buyers. 

### First steps / resetting DB

Once the springboot app is running, browse to `localhost:8080/h2-console/login.do` and fill in the following:
* DriverClass: `org.h2.Driver`
* JDBC URL: `jdbc:h2:/<path_to_repo>/data/demo`
* Username: `sa`
* Password: 

Then paste the following into the SQL Statement panel:

```sql
DROP TABLE BUYERS;
CREATE TABLE BUYERS(id LONG PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255))
```

### Running backend:

Commandline (linux/mac): `./mvnw spring-boot:run`
VSCode (with debugging): Use "Run and Debug" on the toolbar, select `Spring Boot-SpringBootBackendApplication<spring-boot-backend>` configuration


## Frontend

### Running

Move into the frontend project: `cd front-end`

> Note: If first time running call: `npm install`

Start the application using: `npm start`

## Other notes

QA FASE Link:
https://gitlab.com/qa1322911/fase

Run Project:

Run Back End Java Code First

cd front-end


Trello Project 3 link:
https://trello.com/invite/b/iXD1Xy0S/ATTI0251b413fbaccc2912918da9339678b709BC3052/project-3

Swagger URL Link:
http://localhost:8080/swagger-ui/index.html



