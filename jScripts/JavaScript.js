function toggleExplanation(card) {
    const explanation = card.querySelector('.explanation');
    explanation.style.display = (explanation.style.display === 'block') ? 'none' : 'block';
}
