document.addEventListener('DOMContentLoaded', () => {
    const waxSeal = document.getElementById('wax-seal');
    const envelope = document.getElementById('envelope');

    // Apertura busta al click sul sigillo
    if (waxSeal && envelope) {
        waxSeal.addEventListener('click', () => {
            envelope.classList.add('open');
            document.body.classList.add('opened-bg'); // Cambia la luce dello sfondo
        });
    }

    // Data target dell'evento: 3 Ottobre 2026, ore 20:30
    // (In JS i mesi vanno da 0 a 11, quindi 9 = Ottobre)
    const targetDate = new Date(2026, 9, 3, 20, 30, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const countdownElement = document.getElementById('countdown');

        // Se la data è superata
        if (difference <= 0) {
            if (countdownElement) {
                countdownElement.innerHTML = "<p style='color: var(--marrone-scuro); font-weight: 600;'>È ora di festeggiare!</p>";
            }
            return;
        }

        // Calcolo giorni, ore, minuti e secondi
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Elementi DOM
        const elDays = document.getElementById('cd-days');
        const elHours = document.getElementById('cd-hours');
        const elMinutes = document.getElementById('cd-minutes');
        const elSeconds = document.getElementById('cd-seconds');

        // Formattazione con zero iniziale
        if (elDays) elDays.textContent = String(days).padStart(2, '0');
        if (elHours) elHours.textContent = String(hours).padStart(2, '0');
        if (elMinutes) elMinutes.textContent = String(minutes).padStart(2, '0');
        if (elSeconds) elSeconds.textContent = String(seconds).padStart(2, '0');
    }

    // Avvio immediato e intervallo di 1 secondo
    updateCountdown();
    setInterval(updateCountdown, 1000);
});