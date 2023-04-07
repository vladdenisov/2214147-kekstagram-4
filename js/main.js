import { displayData } from './displayData.js';
import { setupModal } from './form/imageModal.js';
import { setupFormValidation } from './form/formValidation.js';
import { fetchData } from './utils/network.js';

fetchData().then(displayData);

setupFormValidation();

setupModal();
