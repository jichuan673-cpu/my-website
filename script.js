/**
 * Intersection Observer API を使用したスクロールアニメーション
 * 要素がビューポートに入った際に、特定のアニメーションクラスを付与します。
 */
document.addEventListener("DOMContentLoaded", () => {
    // アニメーション対象の要素を取得
    const fadeElements = document.querySelectorAll(".fade-in");

    // Intersection Observer の設定
    const observerOptions = {
        root: null,         // ビューポートをルートとする
        rootMargin: "0px",  // マージンなし
        threshold: 0.15     // 要素の15%が画面に入ったら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が画面に入ったら 'visible' クラスを付与してアニメーションを開始
                entry.target.classList.add("visible");
                
                // 一度アニメーションが実行されたら、監視対象から外す
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 取得した要素を監視対象に追加
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
