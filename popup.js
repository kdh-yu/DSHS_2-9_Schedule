const attributeContainer = document.querySelector(".js-time");
const timeTitle = attributeContainer.querySelector("h1");
    subjectTitle = attributeContainer.querySelector("h2");
    joinTitle = attributeContainer.querySelector("h3");
    aClass = attributeContainer.querySelector("a");

Monday = {
    first: "화학 I",
    second: "영어 I",
    third: "지구과학 I",
    fourth: "수학 I",
    fifth: "문학",
    other: "인문학, 지구과학 I"
}
Tuesday = {
    first: "수학 I",
    second: "화학 I",
    thrid: "문학",
    fourth: "운동과 건강",
    fifth: "영어 I",
    other: "화학 I, 중국어 I / 일본어 I"
}

Wednesday = {
    first: "중국어 I / 일본어 I",
    second: "영어 I",
    third: "문학",
    fourth: "영어 I",
    fifth: "수학 II",
    other: "운동과 건강, 영어 I"
}

Thursday = {
    first: "자율",
    second: "자율",
    third: "창체",
    fourth: "창체",
    fifth: "지구과학 I",
    other: "공학 일반, 문학"
}

Friday = {
    first: "수학 II",
    second: "화학실험 I",
    third: "지구과학실험 I",
    fourth: "문학",
    fifth: "수학 I",
    other: "수학 I, 미술"
}

function joinlink(day) {
    if (day == "화학 I") {
        aClass.setAttribute('href', 'https://us02web.zoom.us/j/7174968710?pwd=UXlVYWd1TzFQUkJENDdmVDhUMWVmQT09');
    } else {
        aClass.setAttribute('href', 'https://meet.google.com/lookup/gejj65nsqc?authuser=0&hs=179');
    }
}

function whatisday() {
    var todays = new Date();
    if (todays.getDay() == 1) {
        return Monday;
    }
    else if (todays.getDay() == 2) {
        return Tuesday;
    }
    else if (todays.getDay() == 3) {
        return Wednesday;
    }
    else if (todays.getDay() == 4) {
        return Thursady;
    }
    else if (todays.getDay() == 5) {
        return Friday;
    }
}

function setSubject() {
    var today = new Date();  // today's date
    var now = new Date(today.getYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes());
    var morning = new Date(today.getYear(), today.getMonth(), today.getDate(), 8, 30);
    var morning_rest = new Date(today.getYear(), today.getMonth(), today.getDate(), 8, 50);
    var first_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 9, 00);
    var first_rest_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 9, 45);
    var second_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 9, 55);
    var second_rest_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 10, 40);
    var third_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 10, 50);
    var third_rest_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 11, 35);
    var fourth_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 11, 45);
    var lunch_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 12, 30);
    var fifth_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 13, 30);
    var end_time = new Date(today.getYear(), today.getMonth(), today.getDate(), 14, 15);
    var tday = today.getDay();

    if (tday == 0 || tday == 6) {
        timeTitle.innerText = "주말";
        subjectTitle.innerText = "수업 X";
        aClass.setAttribute('href', 'https://youtube.com/');
        aClass.innerText = "유튜브";
    }
    else {
        if (now < morning) {
            timeTitle.innerText = "수업 시작 전";
            subjectTitle.innerText = "등교";
            document.getElementById('Link').setAttribute('href', 'https://meet.google.com/lookup/gejj65nsqc?authuser=0&hs=179');
        }
        else if (now >= morning && now < morning_rest) {
            timeTitle.innerText = "수업 시작 전";
            subjectTitle.innerText = "아침조회";
            document.getElementById('Link').setAttribute('href', 'https://meet.google.com/lookup/gejj65nsqc?authuser=0&hs=179');
        }
        else if (now >= morning_rest && now < first_time) {
            timeTitle.innerText = "1교시 시작 전";
            subjectTitle.innerText = whatisday().first;
             joinlink(whatisday().first);
        }
        else if (now >= first_time && now < first_rest_time) {
            timeTitle.innerText = "1교시";
            subjectTitle.innerText = whatisday().first;
             joinlink(whatisday().first);
        }
        else if (now >= first_rest_time && now < second_time) {
            timeTitle.innerText = "2교시 시작 전";
            subjectTitle.innerText = whatisday().second;
            joinlink(whatisday().second);
        }
        else if (now >= second_time && now < second_rest_time) {
            timeTitle.innerText = "2교시";
            subjectTitle.innerText = whatisday().second;
            joinlink(whatisday().second);
        }
        else if (now >= second_rest_time && now < third_time) {
            timeTitle.innerText = "3교시 시작 전";
            subjectTitle.innerText = whatisday().third;
            joinlink(whatisday().third);
        }
        else if (now >= third_time && now < third_rest_time) {
            timeTitle.innerText = "3교시";
            subjectTitle.innerText = whatisday().third;
            joinlink(whatisday().third);
        }
        else if (now >= third_rest_time && now < fourth_time) {
            timeTitle.innerText = "4교시 시작 전";
            subjectTitle.innerText = whatisday().fourth;
            joinlink(whatisday().fourth);
        }
        else if (now >= fourth_time && now < lunch_time) {
            timeTitle.innerText = "4교시";
            subjectTitle.innerText = whatisday().fourth;
            joinlink(whatisday().fourth);
        }
        else if (now >= lunch_time && now < fifth_time) {
            timeTitle.innerText = "점심시간, 5교시 시작 전";
            subjectTitle.innerText = whatisday().fifth;
            joinlink(whatisday().fifth);
        }
        else if (now >= fifth_time && now < end_time) {
            timeTitle.innerText = "5교시";
            subjectTitle.innerText = whatisday().fifth;
            joinlink(whatisday().fifth);
        }
        else if (now >= end_time) {
            timeTitle.innerText = "과제형 6, 7교시";
            subjectTitle.innerText = whatisday().other;
            joinlink(whatisday().other);
        }
    }
}

window.onload = setSubject;