export const buildPopup = (
  { title, chapter, date, description, id },
  coords,
) => `
  <div class="popup">
    ${title ? `<h3 class="popup-title">${title}</h3>` : ''}
    ${chapter ? `<h4 class="popup-chapter">Ch. ${chapter}</h3>` : ''}
    ${id ? `<code class="popup-id">#${id}</code>` : ''}
    ${date ? `<div class="popup-date">${date.map(d => d)}</div>` : ''}
    ${
      description
        ? `<div class="popup-description">
      ${description.replace(/\n/g, '<br>')}
    </div>`
        : ''
    }
    ${
      coords
        ? `<div class="popup-coords">
            ${coords[0]},
            ${coords[1]}
          </div>`
        : ''
    }
</div>`;
