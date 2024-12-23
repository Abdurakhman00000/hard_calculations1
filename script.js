document.getElementById('calculate').addEventListener('click', () => {
    const gearRatio = parseFloat(document.getElementById('gearRatio').value);
    const pinionTeeth = parseInt(document.getElementById('pinionTeeth').value, 10);
    const wheelTeeth = parseInt(document.getElementById('wheelTeeth').value, 10);
    const power = parseFloat(document.getElementById('power').value);
    const speed = parseFloat(document.getElementById('speed').value);

    if (isNaN(gearRatio) || isNaN(pinionTeeth) || isNaN(wheelTeeth) || isNaN(power) || isNaN(speed)) {
        alert('Пожалуйста, заполните все поля корректными данными!');
        return;
    }

    const torque = (9550 * power) / speed; // Н·м
    const wheelTorque = torque * gearRatio;

    document.getElementById('torque').querySelector('span').textContent = torque.toFixed(2);
    document.getElementById('wheelTorque').querySelector('span').textContent = wheelTorque.toFixed(2);
});
