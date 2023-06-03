document.getElementById('calculator').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルトの送信を防止

  // 入力値を取得
  let totalAmount = parseInt(document.getElementById('totalAmount').value);
  let splitAmount1 = 0;
  let splitAmount2 = 0;
  let splitAmount3 = 0;
  let splitAmount4 = 0;
  let numberOfPeople = 0;

  console.log('2人：' + document.getElementById('numberOfPeople2').checked);
  console.log('3人：' + document.getElementById('numberOfPeople3').checked);
  console.log('4人：' + document.getElementById('numberOfPeople4').checked);

  // 2人で割り勘する場合
  if (document.getElementById('numberOfPeople2').checked) {
    numberOfPeople = parseInt(document.getElementById('numberOfPeople2').value);

    if (totalAmount % numberOfPeople === 0) {
      splitAmount1 = totalAmount / numberOfPeople;
      splitAmount2 = totalAmount / numberOfPeople;
    } else {
      splitAmount1 = Math.ceil(totalAmount / numberOfPeople);
      splitAmount2 = totalAmount / numberOfPeople;
    }

    // 3人で割り勘する場合
  } else if (document.getElementById('numberOfPeople3').checked) {
    numberOfPeople = parseInt(document.getElementById('numberOfPeople3').value);

    // 多めに金額を払う人がいる場合
    if (totalAmount % numberOfPeople === 0) {
      splitAmount1 = totalAmount / numberOfPeople;
      splitAmount2 = totalAmount / numberOfPeople
      splitAmount3 = totalAmount / numberOfPeople;
    } else {
      // 要検討
      splitAmount1 = Math.ceil(totalAmount / numberOfPeople);
      splitAmount2 = Math.ceil(totalAmount / numberOfPeople);
      splitAmount3 = Math.ceil(totalAmount / numberOfPeople);
    }
    // 4人で割り勘する場合
  } else if (document.getElementById('numberOfPeople4').checked) {
    numberOfPeople = parseInt(document.getElementById('numberOfPeople4').value);

    if (totalAmount % numberOfPeople === 0) {
      splitAmount1 = totalAmount / numberOfPeople;
      splitAmount2 = totalAmount / numberOfPeople;
      splitAmount3 = totalAmount / numberOfPeople;
      splitAmount4 = totalAmount / numberOfPeople;
    } else {
      // 要検討
      splitAmount1 = totalAmount / numberOfPeople;
      splitAmount2 = totalAmount / numberOfPeople;
      splitAmount3 = totalAmount / numberOfPeople;
      splitAmount4 = totalAmount / numberOfPeople;
    }
  } else {
    console.log('人数のところでエラーが発生しました。');
  }

  // 結果を表示
  document.getElementById('splitAmount1').textContent = splitAmount1.toFixed(0);
  document.getElementById('splitAmount2').textContent = splitAmount2.toFixed(0);
  document.getElementById('splitAmount3').textContent = splitAmount3.toFixed(0);
  document.getElementById('splitAmount4').textContent = splitAmount4.toFixed(0);
  document.getElementById('result').style.display = 'block';
});
