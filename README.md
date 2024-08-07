# Rock Climbing App Data Generation Program

This program generates random information for testing purposes in a rock climbing app. It utilizes the Faker.js library to create mock data for customers, employees, users, merchandise, and inventory. The generated data is then either posted to an API using Axios or used to generate additional lists based on fetched API responses.

## Features

- Generates mock data for:
  - Customers
  - Employees
  - Users
  - Merchandise information
  - Inventory items

- Utilizes Faker.js for realistic data generation.
- Posts generated data to the API using Axios.
- Fetches data from the API to generate additional lists or perform operations.

## Folder and File Descriptions

- **accountType/**: Contains programs for generating account information for different types of users, including customers, employees, and users. These programs are linked to `generateAccount.js`.

- **coverage/**: Contains files related to test coverage reports.

- **database/**: Stores all JSON files generated by the program, including customer, employee, and merchandise data.

- **node_modules/**: Contains all the project's dependencies installed via npm.

- **tests/**: Contains test files for the account type programs to ensure their functionality.

- **Jenkinsfile**: Configuration file for CI/CD pipeline, used for continuous integration and testing.

- **README.md**: This file, providing an overview and instructions for the repository.

- **Rental.js**: Script used to create information for renting and returning merchandise.

- **assignCert.js**: Script used to assign certifications to customers.

- **assignWaiver.js**: Script used to assign waivers to customers.

- **checkIns.js**: Script used to create check-in information for customers.

- **eslint.config.mjs**: Configuration file for ESLint to ensure code quality and consistency.

- **generateAccount.js**: Main program for the `accountType` folder. Generates account information for users, customers, and employees.

- **generateCategory.js**: Script used to create merchandise category names and descriptions. This is a one-time use script.

- **generateMerchandise.js**: Script used to create merchandise information by referencing `database/ROCKDBmerchandise.json`.

- **generateMerchandiseInventory.js**: Script used to generate merchandise inventory information.

- **generateRental.js**: Script used to generate rental information.

- **package-lock.json**: Automatically generated file that locks the versions of dependencies installed.

- **package.json**: Contains metadata about the project and its dependencies.

## Credits

- **Faker.js**: Library used for generating realistic mock data.
- **Axios**: HTTP client for making API requests.

Feel free to explore the files and folders to understand how each component contributes to the data generation process. If you have any questions or need further clarification, don't hesitate to ask!

