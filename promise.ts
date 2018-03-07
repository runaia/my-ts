function printLater(number) {
    console.log("hello");
    
    return new Promise( // 새 Promise 를 만들어서 리턴함
        resolve => {
            setTimeout( // 1초뒤 실행하도록 설정
                () => {
                    console.log(number);
                    resolve(); // promise 가 끝났음을 알림
                },
                1000
            )
        }
    )
}

printLater(1)