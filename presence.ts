var presence = new Presence({
  clientId: "813419172549230592"
});

  if (document.location.hostname == "sahibinden.com") {
    presenceData.details = "Ana Sayfada";
      presenceData.state = AppName.innerText;

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/acil-acil")) {
      presenceData.state = "Acil Ýlan'lara Bakýyor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/emlak")) {
      presenceData.state = "Emlak Bakýyor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/vasita")) {
      presenceData.state = "Vasita Bakýyor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/ikinci-el-ve-sifir-alisveris)) {
      presenceData.state = "Eþya'lara Bakýyor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/is-ilanlari)) {
      presenceData.state = "Ýþ Ýlan'larýna Bakýyor";

      presenceData.startTimestamp = browsingStamp;
    } else if (document.location.pathname.includes("/kategori/hayvanlar-alemi")) {
      presenceData.state = "Hayvan Alemi'ne Bakýyor";
    }
  }

  presence.setActivity(presenceData);
});