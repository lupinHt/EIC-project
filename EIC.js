const searchForm = document.getElementById('search-form');

if (searchForm) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = document.getElementById('rech').value.trim().toLowerCase();
        const routes = [
            { terms: ['passeport', 'passport'], url: 'passeport.html' },
            { terms: ['cin', 'carte d\'identification', "carte d'identification", 'identification nationale'], url: 'CIN.html' },
            { terms: ['extrait', 'archive', 'archives', 'acte de naissance'], url: 'extrait.html' }
        ];
        const result = routes.find(({ terms }) => terms.some((term) => query.includes(term)));
        if (result) window.location.href = result.url;
        else alert(query ? "Aucune démarche correspondante. Essayez : passeport, CIN ou extrait d'archives." : 'Saisissez une démarche à rechercher.');
    });
}
