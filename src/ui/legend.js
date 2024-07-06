export const legend = L.control({ position: 'bottomright' });
legend.onAdd = () => {
  const div = L.DomUtil.create('details', 'legend');

  div.innerHTML += `
    <summary>Toggle legend</summary>
    <div class="legend-container">
      <div class="legend-markers">
        <div>
          <img src="yacht.svg" alt="yacht icon"/><span>Nautical point</span>
        </div>
        <div>
          <img src="anchor.svg" alt="anchor icon"/><span>Stopping point</span>
        </div>
        <div>
          <img src="sight.svg" alt="anchor icon"/><span>Sight point</span>
        </div>
      </div>

      <hr />

      <div class="legend-colors">
        <div>
          <div class="legend-colors-journey"></div>
          <div>Journey</div>
        </div>
        <div>
          <div class="legend-colors-prejourney"></div><div>Pre-Journey</div>
        </div>
        <div>
          <div class="legend-colors-sight"></div><div>Sight</div>
        </div>
      </div>
    </div>
  `;

  return div;
};
