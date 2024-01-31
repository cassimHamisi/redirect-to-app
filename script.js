// Function to get the query parameters from the URL
function getQueryParams(url) {
  // Create a new URLSearchParams object
  const urlSearchParams = new URLSearchParams(url.search);
  const queryParams = {};

  // Iterate through the URLSearchParams and populate the queryParams object
  for (const [key, value] of urlSearchParams.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
}

const currentUrl = new URL(window.location.href);
const queryParams = getQueryParams(currentUrl);

// Define the app's custom scheme
let appCustomScheme = "com.kberen.renthub://redirect";

console.log(queryParams);
if (queryParams?.id) {
  appCustomScheme = appCustomScheme + "/tenant/" + queryParams.id;
} else {
  appCustomScheme = appCustomScheme + "/landlord";
}
//9b60dbd0-d2d7-4672-be2a-f6a1511f8e71
console.log(appCustomScheme);

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

if (isMobile) {
  // Redirect the user to the app's custom scheme
  window.location.replace(appCustomScheme);
} else {
  // If the redirection fails, provide an alternative link
  window.location.replace(
    "https://play.google.com/store/apps/details?id=com.kberen.renthub"
  );
}
