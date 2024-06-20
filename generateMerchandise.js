const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { faker } = require('@faker-js/faker/locale/en');

// Path to the RockDB.json and generateMerchandise.json files
const rockDBPath = path.join(__dirname, 'database', 'RockDB.merchandises.json');
const generateMerchandisePath = path.join(__dirname, 'database', 'generateMerchandise.json');

// API endpoint where you want to post each merchandise item
const apiUrl = 'https://batuu.sensoft.cloud:9889/v1/merchandises'; // Replace with your actual API endpoint

// Function to transform and extract the required fields from the merchandise data
function transformMerchandiseData(merchandise) {
  const roles = ['ADMIN', 'MANAGER', 'STAFF'];

  // Determine the number of roles (1 to the total number of available roles)
  const numberOfRoles = Math.floor(Math.random() * roles.length) + 1;

  // Select the roles
  const selectedRoles = [];
  while (selectedRoles.length < numberOfRoles) {
    const role = faker.helpers.arrayElement(roles);
    if (!selectedRoles.includes(role)) {
      selectedRoles.push(role);
    }
  }

  // Generate random enable status
  const enable = faker.datatype.boolean();

  return {
    name: merchandise.name,
    sku: merchandise._id,
    parent_sku: merchandise.parent_sku,
    category: merchandise.category,
    desc: merchandise.desc,
    images: merchandise.img,
    size: merchandise.size,
    unit_price: [{
      currency: merchandise.unit_price.currency,
      value: merchandise.unit_price.value,
      quantity: merchandise.unit_price.quantity,
      unit: merchandise.unit_price.unit
    }],
    // Add generated authority and enable
    authority: selectedRoles,
    enable: enable,
  };
}


// Function to post data using Axios
async function postData(url, data) {
  try {
    const response = await axios.post(url, data);
    console.log('Data posted successfully:', response.data);
  } catch (error) {
    console.error('Error posting data:', error);
  }
}

// Asynchronous function to transform, save, and post merchandise data
async function transformSaveAndPostMerchandise() {
  try {
    // Read the RockDB.merchandises.json file
    const rockDBData = JSON.parse(fs.readFileSync(rockDBPath, 'utf-8'));

    // Transform the data
    const transformedData = rockDBData.map(transformMerchandiseData);

    // Write the updated data to the generateMerchandise.json file (overwrite existing file)
    fs.writeFileSync(generateMerchandisePath, JSON.stringify(transformedData, null, 2));
    console.log(`Successfully saved transformed merchandise data to ${generateMerchandisePath}`);

    // Post each merchandise item to the API endpoint one by one
    for (const merchandise of transformedData) {
      await postData(apiUrl, merchandise);
    }

    console.log('All merchandise items posted successfully.');
  } catch (error) {
    console.error('Error transforming, saving, or posting merchandise data:', error);
  }
}

// Execute the main function
transformSaveAndPostMerchandise();
