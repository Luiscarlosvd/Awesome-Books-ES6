import { DateTime, Settings } from '../node_modules/luxon/src/luxon.js';

Settings.defaultLocale = 'en-US';
const dt = DateTime.utc().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

export default dt;
