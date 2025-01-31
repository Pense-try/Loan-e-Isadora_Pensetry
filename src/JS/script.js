
function transicao(currentSection, nextSection) {
    const current = document.getElementById(`section${currentSection}`);
    const next = document.getElementById(`section${nextSection}`);

    current.classList.add('exit');

    setTimeout(() => {
        current.classList.remove('active', 'exit');
        next.classList.add('active');
    }, 1000);
}