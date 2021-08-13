$(function () {


    // ページが読み込まれた際に時間を設定
    setTime();


    setInterval(function () {

    // 1秒ごとに時間を設定
        setTime();
    }, 1000);

    // 時間を更新する関数
    function setTime() {


        const now = new Date();

        // 年
        const year = now.getFullYear();

        // 月 (数字の場合☟)
        const month = (now.getMonth() + 1).toString().padStart(2, '0');

        // 月を文字にする場合(英語☟)
        const monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        const monthStr = monthList[now.getMonth()];

        // 日
        const date = now.getDate().toString().padStart(2, '0');

        // 時
        const hour = now.getHours().toString().padStart(2, '0');

        // 分
        const minute = now.getMinutes().toString().padStart(2, '0');

        // 秒
        const second = now.getSeconds().toString().padStart(2, '0');

        // 週
        const weekList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRY', 'SAT'];

        // ampm (制御関数)
        let ampm = 'AM';

        if (now.getHours() >= 12) {
            ampm = 'PM';
        }

        // ampm hour
        const ampmHour = (now.getHours() % 12).toString().padStart(2, '0');

        const weekStr = weekList[now.getDay()];


        // 時間の置き換え
        $("#seconds").text(second);
        $("#year").text(year);
        $("#month").text(monthStr);
        $("#date").text(date);
        $("#hour").text(ampmHour);
        $("#minute").text(minute);
        $("#ampm").text(ampm);

        // 条件による置き換え

        if (now.getMinutes() % 2 === 0) {

            // $("body").getSeconds("background-image", "url(../images/oo.jpg)");偶数の場合はこの画像が表示される

            // console.log('偶数です');

        } else {

            // $("body").getSeconds("background-image", "url(../images/oo.jpg)");奇数の場合はこの画像が表示される


            // console.log('奇数です');

        }


    }








});