🔒 [Security Fix] Add noopener noreferrer to external link

🎯 **What:**
Added `rel="noopener noreferrer"` to the external Google Maps link that opens in a new tab (`target="_blank"`) in `public/catering.html:362`.

⚠️ **Risk:**
When a link uses `target="_blank"` without `rel="noopener noreferrer"`, the page that opens in the new tab can access the original page's `window` object via `window.opener`. This exposes the site to a "reverse tabnabbing" attack, where the malicious or compromised external site could navigate the original page to a phishing site or execute malicious scripts, potentially compromising user data.

🛡️ **Solution:**
Adding the `rel="noopener noreferrer"` attribute severs the connection between the current page and the newly opened tab, preventing the new page from accessing the `window.opener` object, effectively eliminating the reverse tabnabbing vulnerability.
