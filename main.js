// 現在時刻を取得して表示する関数
function showGreeting() {
    const now = new Date();
    const hours = now.getHours();
    
    let message = "";
    if (hours < 12) {
        message = "おはようございます！";
    } else if (hours < 18) {
        message = "こんにちは！";
    } else {
        message = "こんばんは！";
    }
    
    console.log(`[${now.toLocaleTimeString()}] ${message}`);
    return message;
}

// 簡単な計算関数
const addNumbers = (a, b) => a + b;

// 実行
console.log("--- 実行開始 ---");
showGreeting();
console.log("計算結果:", addNumbers(10, 25));
console.log("--- 実行終了 ---");
