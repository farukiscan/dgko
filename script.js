document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-background");
  var playPrompt = document.getElementById("play-prompt");
  var catImage = document.getElementById("cat-image");
  var candleImage = document.getElementById("candle-image");
  var candleLit = true;

  document.addEventListener(
    "click",
    function () {
      video.play();
      playPrompt.style.display = "none";
    },
    { once: true }
  );

  var catImages = [
    "https://i.redd.it/xt9fc1xbdfld1.jpeg",
    "https://i.redd.it/9xpdutetmwkd1.png",
    "https://i.redd.it/5j1rgl2ps9ld1.jpeg",
    "files/YiB0qoj.jpeg",
    "files/ppilgin.jpg",
  ];
  var currentCatIndex = 0;

  catImage.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering the document click event
    currentCatIndex = (currentCatIndex + 1) % catImages.length;
    catImage.src = catImages[currentCatIndex];
  });

  // Ensure the first cat image is loaded
  catImage.src = catImages[currentCatIndex];

  var newTextTitle = document.getElementById("new-text-title");
  var newText = document.getElementById("new-text");
  var textToggle = false;

  function toggleText(event) {
    event.stopPropagation();
    textToggle = !textToggle;
    if (textToggle) {
      newTextTitle.textContent = "Ilgın Kelimesinin Diğer Anlamı";
      newText.innerHTML =
        "<strong>SEVGİLİM, CANIM SEVGİLİM\nBİTANEM AŞŞKIM BENİM\nATEŞ BÖCEĞİM</strong>";
    } else {
      newTextTitle.textContent = "Ilgın kelimesinin anlamı";
      newText.innerHTML = `
                <strong>Köken</strong><br>
                Yeni Türk kadın ve erkek adı: Türkçe ılgım/ılgın "serap; bir tür ağaç"<br><br>
                Genel kullanımda ılgım "çölde beliren görüntü, serap", ılgın "tuzlu su kenarında yetişen bir ağaç, tamarisk" demektir. İkisinin aynı sözcük olması mümkündür; ancak kişi adlarında genellikle "serap" kastedilir. Bazı kaynaklarda gösterilen "hafif esinti" anlamının dayanağı anlaşılamadı.
            `;
    }
  }

  newTextTitle.addEventListener("click", toggleText);
  newText.addEventListener("click", toggleText);

  function blowOutCandle() {
    if (candleLit) {
      candleImage.src = "files/2.png";
      candleLit = false;

      // Trigger confetti
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }

  candleImage.addEventListener("click", blowOutCandle);
});
