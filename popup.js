const TABZIP_PREFIX = 'tabzip:';

document.getElementById('compressBtn').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    const urls = tabs.map((tab) => tab.url);
    const data = JSON.stringify(urls);
    const compressed = compress(data);
    const compressedData = TABZIP_PREFIX + compressed;

    navigator.clipboard.writeText(compressedData).then(() => {
      alert('Compressed tab data has been copied to the clipboard!');
    });
  });
});

document.getElementById('restoreBtn').addEventListener('click', () => {
  const input = document.getElementById('restoreInput').value;
  const TABZIP_PREFIX = 'tabzip:';
  if (input.startsWith(TABZIP_PREFIX)) {
    const compressedData = input.slice(TABZIP_PREFIX.length);
    const decompressedData = decompress(compressedData);
    const urls = JSON.parse(decompressedData);
    urls.forEach((url) => {
      chrome.tabs.create({ url });
    });
    alert('Tabs have been restored!');
  } else {
    alert('Input is not a valid compressed tab data!');
  }
});

function compress(data) {
  return btoa(data);
}

function decompress(data) {
  return atob(data);
}
