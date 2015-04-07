// Saves options to chrome.storage
function save_options() {
  var url = document.getElementById('url').value;
  url = url.match(/.+\/d\/.+\/|.+\/d\/.+$/)[0];
  chrome.storage.local.set({
    spreedsheetUrl: url
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Link salvo.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    spreedsheetUrl: ''
  }, function(items) {
    document.getElementById('url').value = items.spreedsheetUrl;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);