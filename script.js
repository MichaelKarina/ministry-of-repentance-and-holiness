const rowsPerPage = 10; // Number of iframe rows per page
let currentPage = 1;

const allRows = Array.from(document.querySelectorAll('.iframe-row'));
const totalPages = Math.ceil(allRows.length / rowsPerPage);

const paginationContainer = document.getElementById('pagination');

function showPage(page) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  // Show only rows for current page
  allRows.forEach((row, index) => {
    row.style.display = (index >= start && index < end) ? 'flex' : 'none';
  });

  // Move pagination below the last visible row
  const lastVisibleRow = allRows[end - 1] || allRows[allRows.length - 1];
  lastVisibleRow.parentNode.insertBefore(paginationContainer, lastVisibleRow.nextSibling);

  renderPagination();
}

function renderPagination() {
  paginationContainer.innerHTML = '';

  // Previous button
  if (currentPage > 1) {
    const prev = document.createElement('a');
    prev.textContent = '« Previous';
    prev.classList.add('prev');
    prev.addEventListener('click', () => {
      currentPage--;
      showPage(currentPage);
    });
    paginationContainer.appendChild(prev);
  }

  // Numbered pages
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.textContent = i;
    if (i === currentPage) pageLink.classList.add('active');
    pageLink.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
    paginationContainer.appendChild(pageLink);
  }

  // Next button
  if (currentPage < totalPages) {
    const next = document.createElement('a');
    next.textContent = 'Next »';
    next.classList.add('next');
    next.addEventListener('click', () => {
      currentPage++;
      showPage(currentPage);
    });
    paginationContainer.appendChild(next);
  }
}

// Initialize first page
showPage(currentPage);

