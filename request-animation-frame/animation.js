// 动画控制变量
let rafId = null;
let timeoutId = null;
let intervalId = null;
let started = false;
// requestAnimationFrame 动画
function animateRAF() {
    if (rafId) {
        return;
    }
    const box = document.getElementById('rafBox');
    let position = 0;
    let direction = 1;

    function update() {
        position += direction * 2;
        if (position >= 200 || position <= 0) {
            direction *= -1;
        }
        box.style.transform = `translateX(${position}px)`;
        rafId = requestAnimationFrame(update);
        console.log('requestAnimationFrame', rafId);
    }

    rafId = requestAnimationFrame(update);
}

// setTimeout 动画
function animateTimeout() {
    const box = document.getElementById('timeoutBox');
    let position = 0;
    let direction = 1;

    function update() {
        position += direction * 2;
        if (position >= 200 || position <= 0) {
            direction *= -1;
        }
        box.style.transform = `translateX(${position}px)`;
        timeoutId = setTimeout(update, 16); // 约60fps
        console.log('setTimeout', timeoutId);
    }
    timeoutId = setTimeout(update, 16);
}

// setInterval 动画
function animateInterval() {
    if (intervalId) {
        return;
    }
    const box = document.getElementById('intervalBox');
    let position = 0;
    let direction = 1;

    function update() {
        position += direction * 2;
        if (position >= 200 || position <= 0) {
            direction *= -1;
        }
        box.style.transform = `translateX(${position}px)`;
    }

    intervalId = setInterval(update, 16); // 约60fps
}

// 开始所有动画
function startAll() {
    if (started) {
        return;
    }
    started = true;
    animateRAF();
    animateTimeout();
    animateInterval();
}

// 停止所有动画
function stopAll() {
    if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
    }
    if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    started = false;
} 