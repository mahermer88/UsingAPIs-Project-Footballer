export function renderError(error) {
  const toastHTML = `<span>${error}</span><button class="btn-flat toast-action">Refresh</button>`;

  M.toast({
    html: toastHTML,
    displayLength: 8000,
    classes: 'rounded',
    completeCallback: function () {
      if (confirm("refresh this page")) {
        location.reload();
      }
    },
  });
}
