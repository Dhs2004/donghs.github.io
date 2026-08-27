(function () {
  var counter = document.querySelector('.unified-page-view-count');
  if (!counter) return;

  var canonicalHomepage = 'https://dhs2004.github.io/donghs.github.io/';
  fetch('https://events.vercount.one/api/v2/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: canonicalHomepage, isNewUv: false })
  })
    .then(function (response) {
      if (!response.ok) throw new Error('Counter request failed');
      return response.json();
    })
    .then(function (result) {
      var value = result && result.data && Number(result.data.page_pv);
      if (Number.isFinite(value)) counter.textContent = value.toLocaleString();
    })
    .catch(function () {
      counter.textContent = '—';
    });
})();
