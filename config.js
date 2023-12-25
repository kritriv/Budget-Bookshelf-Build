let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://budget-bookshelf-apis-production.up.railway.app';
} else {
  baseURL = 'https://budget-bookshelf-apis-production.up.railway.app';
  // baseURL = 'http://localhost:5000';
}

export const DomainURL = baseURL;
