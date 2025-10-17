// API Configuration
// This file should be loaded before any page scripts
// Set window.PROTACT_API_URL to override the default localhost URL

(function () {
  // Auto-detect based on how the page is being accessed
  const hostname = window.location.hostname;

  let apiUrl;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    // Local access
    apiUrl = 'http://localhost:8000/api/public';
  } else {
    // Remote access - use the same hostname that the page is accessed from
    // This works for Tailscale, LAN IP, or any remote connection
    apiUrl = `http://${hostname}:8000/api/public`;
  }

  // Manual override (uncomment and set if needed)
  // apiUrl = 'http://192.168.100.126:8000/api/public';

  window.PROTACT_API_URL = apiUrl;

  console.log('API URL configured:', apiUrl);
})();
