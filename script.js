const btn = document.querySelector(".button-calculate");
btn.addEventListener("click", () => {
  // Mengambil elemnt Input
  const bb = document.getElementById("berat-badan").value;
  const tb = document.getElementById("tinggi-badan").value;
  const resultCalculate = calculate(bb, tb); //menghitung Bmi & menyimpan hasil di dalam variabel
  const description = category(resultCalculate);

  //  menampilkan Nilai BMI
  setTimeout(() => {
    return (document.getElementById("result").innerHTML = resultCalculate);
  }, 2000);
  //   menampilkan description BMI
  setTimeout(() => {
    return (document.getElementById("description").innerHTML = description);
  }, 2700);
});

function calculate(bb, tb) {
  const tbCm = tb / 100;
  const result = bb / (tbCm * tbCm);

  return result.toFixed(1);
}

function category(hasil) {
  if (hasil < 17.0) {
    return "<h3>Kurus<h3/><br /> Kekurangan berat badan berat";
  }
  if (hasil >= 17.0 && hasil <= 18.4) {
    return "<h3>Kurus<h3/><br /> Kekurangan berat badan ringan";
  }
  if (hasil >= 18.5 && hasil <= 25.0) {
    return "<h3>Normal<h3/><br /> Berat badan Ideal";
  }
  if (hasil >= 25.1 && hasil <= 27.0) {
    return "<h3>Gemuk<h3/><br /> Kelabihan berat badan ringan";
  }
  if (hasil > 27.0) {
    return "<h3>Gemuk<h3/><br /> Berpotensi obesitas";
  }
}
