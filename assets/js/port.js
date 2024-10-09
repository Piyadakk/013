window.onload = function() {
    pageLoad();
};

window.addEventListener('scroll', function() {
    const img = document.querySelector('.logo-img');
    const text = document.querySelector('.brand-txt');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) { 
        img.style.opacity = '0'; // ซ่อนโลโก้เมื่อเลื่อนลง
        text.style.opacity = '1'; // แสดงข้อความเมื่อเลื่อนลง
    } else {
        img.style.opacity = '1'; // แสดงโลโก้เมื่ออยู่ที่ด้านบน
        text.style.opacity = '0'; // ซ่อนข้อความเมื่ออยู่ที่ด้านบน
    }
});


