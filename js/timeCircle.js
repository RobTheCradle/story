const WIDTH = 600
const HEIGHT = 600
const R = WIDTH >= HEIGHT ? WIDTH / 2 : HEIGHT / 2
const WEEKS = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
const COUNTDAYS = getCountDays()
const YEAR = new Date().getFullYear()
var canvas = document.getElementById('timeCircle')
canvas.width = WIDTH
canvas.height = HEIGHT
var cxt = canvas.getContext('2d')
var date = {
    s: new Date().getSeconds(),
    m: new Date().getMinutes(),
    h: new Date().getHours(),
    w: new Date().getDay(),
    D: new Date().getDate(),
    M: new Date().getMonth() + 1
}
var jdate = {
    s: date.s,
    m: date.m,
    h: date.h,
    w: date.w,
    D: date.D,
    M: date.M
}
var radian = {
    s: 0,
    m: 0,
    h: 0,
    w: 0,
    D: 0,
    M: 0
}
var index = {
    s: -1,
    m: -1,
    h: -1,
    w: -1,
    D: -1,
    M: -1
}
run()

function run() {
    cxt.clearRect(0, 0, WIDTH, HEIGHT);
    draw()
    motion(R * 0.8, 60, 30, new Date().getSeconds(), 's')
    motion(R * 0.7, 60, 30, new Date().getMinutes(), 'm')
    motion(R * 0.6, 24, 12, new Date().getHours(), 'h')
    motion(R * 0.4, 7, 3.5, new Date().getDay(), 'w')
    motion(R * 0.2, COUNTDAYS, COUNTDAYS / 2, new Date().getDate(), 'D')
    motion(R * 0.1, 12, 6, new Date().getMonth() + 1, 'M')
    window.requestAnimationFrame(run);
}

function draw() {
    // 背景色
    cxt.fillStyle = 'rgba(230,97,163,.1)';
    cxt.fillRect(0, 0, WIDTH, HEIGHT)
    cxt.restore();
    cxt.save();
    // 标度
    cxt.fillStyle = 'rgba(0,0,0,.72)';
    cxt.fillRect(WIDTH / 2, HEIGHT / 2, WIDTH / 2, 1)
    cxt.restore();
    cxt.save();
    // 年
    cxt.fillStyle = '#000';
    cxt.fillText(YEAR, WIDTH / 2, HEIGHT / 2)
    cxt.restore();
    cxt.save();
}

function motion(r, n, b, newT, type) {
    var count = n - 1
    var pi = 6 * (count + 1)
    if (newT == jdate[type]) {
        index[type]++
    }
    if (newT != jdate[type]) {
        jdate[type]++
            if (jdate[type] > count) {
                jdate[type] = 0
            }
        if (index[type] < 12) {
            radian[type] += (12 - index[type]) * Math.PI / pi
        }
        index[type] = 0
    }
    if (index[type] < 12) {
        radian[type] += Math.PI / pi
    } else {
        index[type] = 12
    }
    drawNum(r, n, b, date[type], radian[type], type)
}

function drawNum(r, n, b, t, radian, type) {
    var val = null
    for (var i = 0; i < n; i++) {
        cxt.save();
        var rad = Math.PI / b * (i + 1 - t) - radian;
        var x = Math.cos(rad) * r + WIDTH / 2;
        var y = Math.sin(rad) * r + HEIGHT / 2;
        rotateContext(cxt, x, y, rad)
        cxt.fillStyle = '#000';
        if (i < 10) {
            val = '0' + i
        } else {
            val = i
        }
        if (type === 'w') {
            for (var j = 0; j < WEEKS.length; j++) {
                val = WEEKS[i]
            }
        } else if (type === 'D' || type === 'M') {
            for (var j = 0; j < n; j++) {
                if (i === 0) {
                    val = n
                }
            }
        }
        cxt.fillText(val, x, y)
        cxt.restore();
    }
}

function rotateContext(cxt, x, y, degree) {
    cxt.translate(x, y);
    cxt.rotate(degree);
    cxt.translate(-x, -y);
}

// 获取当前月份的总天数
function getCountDays() {
    var curDate = new Date();
    /* 获取当前月份 */
    var curMonth = curDate.getMonth();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
    curDate.setDate(0);
    /* 返回当月的天数 */
    return curDate.getDate();
}