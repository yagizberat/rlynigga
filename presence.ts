var presence = new Presence({
  clientId: "813419172549230592"
});

  if (document.location.hostname == "sahibinden.com") {
    presenceData.details = "Ana Sayfada";
      presenceData.state = AppName.innerText;

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/acil-acil")) {
      presenceData.state = "Acil �lan'lara Bak�yor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/emlak")) {
      presenceData.state = "Emlak Bak�yor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/vasita")) {
      presenceData.state = "Vasita Bak�yor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/ikinci-el-ve-sifir-alisveris)) {
      presenceData.state = "E�ya'lara Bak�yor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/is-ilanlari)) {
      presenceData.state = "�� �lan'lar�na Bak�yor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/hayvanlar-alemi")) {
      presenceData.state = "Hayvan Alemi'ne Bak�yor";
    }
  }

  presence.setActivity(presenceData);
});