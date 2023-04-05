import { displayData } from './displayData.js';
import { generateData } from './generateData.js';
import { setupModal } from './imageModal.js';
import { setupFormValidation } from './formValidation.js';

displayData(generateData(26));


setupFormValidation();

setupModal();
