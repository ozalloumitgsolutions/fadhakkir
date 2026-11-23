// ملاءمة إطار التطبيق (402×874) لأي شاشة دون تغيير تخطيطه الداخلي:
// • الجوال (عرض ≤ 600): يملأ الشاشة بالكامل — يُحجَّم على العرض ويمتدّ ارتفاعه ليطابق الشاشة، فلا هوامش جانبية
// • الأجهزة الأكبر: يظهر الإطار في الوسط بحجمه الطبيعي أو أصغر ليتّسع
(function () {
  var W = 402, H = 874, root = document.documentElement;
  function fit() {
    var vw = window.innerWidth, vh = window.innerHeight;
    var phone = vw <= 600;
    var s = phone ? vw / W : Math.min(vw / W, vh / H, 1);
    root.style.setProperty("--fd-scale", String(s));
    root.style.setProperty("--fd-h", (phone ? vh / s : H) + "px");
    root.classList.toggle("fd-phone", phone);
  }
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", function () { setTimeout(fit, 150); });
  if (window.visualViewport) window.visualViewport.addEventListener("resize", fit);
  fit();
  document.addEventListener("DOMContentLoaded", fit);
})();
