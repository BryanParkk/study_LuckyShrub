document.querySelectorAll('.collections, .large, .medium, .small, .huge').forEach(img => {
    img.computedStyleMap.display = 'block';
});

function togglePlants(classification) {
    document.querySelectorAll('.' + classification).forEach(img => {
        img.computedStyleMap.display = 'block';       
    });
}
