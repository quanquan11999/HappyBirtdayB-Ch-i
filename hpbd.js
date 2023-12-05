body {
    background-color: #fce6c5;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.container {
    text-align: center;
}

h1 {
    font-family: 'Arial', sans-serif;
    color: #ff69b4;
}

.fireworks {
    width: 200px;
    height: 200px;
    background-image: url('fireworks.gif');
    background-size: cover;
    animation: explode 5s infinite;
}

@keyframes explode {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.5;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
