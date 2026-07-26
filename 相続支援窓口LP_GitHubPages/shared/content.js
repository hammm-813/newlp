(function () {
  const variant = document.body.classList.contains("premium") ? "premium"
    : document.body.classList.contains("warm-family") ? "warm"
    : document.body.classList.contains("editorial") ? "editorial" : "modern";
  const heroCopy = {
    modern: {
      eyebrow: "相続のことを、最初から最後まで。",
      title: "家族のこれからを、<br><em>ひとつの相談先</em>で支える。",
      lead: "相続・登記・税務・不動産。分野をまたぐ複雑な手続きを、4人の専門家が同じ方向を向いて支えます。",
      note: "相談先を探し回らなくていい。それが、相続支援窓口です。"
    },
    premium: {
      eyebrow: "PRIVATE INHERITANCE CONCIERGE",
      title: "大切な資産と想いを、<br><em>丁寧に、次の世代へ。</em>",
      lead: "それぞれのご家族にふさわしい相続のかたちを。各分野の専門家が連携し、手続きから不動産まで一貫して伴走します。",
      note: "窓口は、ひとつ。対応は、専門家チームで。"
    },
    warm: {
      eyebrow: "ご家族だけで、抱え込まなくて大丈夫です。",
      title: "相続の不安に、<br><em>安心できる道すじ</em>を。",
      lead: "「何から始めればいい？」という段階からお話しください。状況を一緒に整理し、必要な専門家へ丁寧につなぎます。",
      note: "話すことから、気持ちも手続きも少しずつ整っていきます。"
    },
    editorial: {
      eyebrow: "ONE DESK. FOUR PROFESSIONALS.",
      title: "相続を、<br><em>迷わないプロセス</em>へ。",
      lead: "法律、登記、税務、不動産。専門領域の境目をなくし、相談から解決までをひとつの流れとして設計します。",
      note: "複雑なことほど、相談先はシンプルに。"
    }
  }[variant];
  const problems = [
    ["？", "何から始めればよいか分からない"],
    ["¥", "相続税がかかるか不安"],
    ["⌂", "不動産の名義変更が必要"],
    ["家族", "家族間トラブルが心配"],
    ["家", "実家・空き家をどうするか悩む"],
    ["相談", "誰に相談すればよいか分からない"],
  ];
  const services = [
    ["相続相談", ["相続人確認", "財産整理", "遺産分割の進め方"]],
    ["登記・名義変更", ["相続登記", "戸籍収集", "各種手続き"]],
    ["税務相談", ["相続税の確認", "申告相談", "財産評価"]],
    ["相続放棄の相談", ["借金の不安", "放棄の検討"]],
    ["空き家・不動産相談", ["売却", "管理", "活用"]],
    ["生前対策・終活相談", ["遺言", "贈与", "将来の備え"]],
  ];
  const reasons = [
    ["ひとつの窓口で相談できる", "複数の専門分野をまとめて、ワンストップでご相談いただけます。"],
    ["各分野の専門家が連携", "弁護士・司法書士・税理士・不動産の専門家が連携して対応。"],
    ["状況に合わせて整理できる", "ヒアリングをもとに、現状を整理し、最適な解決策をご提案します。"],
    ["難しい内容もわかりやすく説明", "専門用語を使わず、丁寧でわかりやすい説明を心がけています。"],
    ["相続後の不動産相談まで対応", "相続後の不動産売却・管理・活用まで、トータルでサポートします。"],
  ];
  const steps = [
    ["お問い合わせ", "電話・メールでご連絡"],
    ["ヒアリング", "状況やご希望を確認"],
    ["状況整理", "必要な手続きや方針を整理"],
    ["専門家連携", "最適な専門家と連携"],
    ["手続き開始", "各種手続きのサポート開始"],
    ["アフターフォロー", "完了後も継続してサポート"],
  ];
  const faqs = [
    ["相続が発生していなくても相談できますか？", "はい。生前対策や終活相談にも対応しています。"],
    ["何から相談すればよいか分からなくても大丈夫ですか？", "大丈夫です。状況をお聞きして必要な対応を整理します。"],
    ["不動産の相談もできますか？", "はい。売却・管理・活用までご相談いただけます。"],
    ["家族間トラブルが心配です。", "内容に応じて弁護士など適切な専門家と連携します。"],
    ["相談だけでも大丈夫ですか？", "はい。まずはお気軽にご相談ください。"],
    ["費用はいつ分かりますか？", "費用が発生する前に、内容とお見積もりをご説明します。"],
  ];
  const card = (items, cls, render) => `<div class="${cls}">${items.map(render).join("")}</div>`;
  const staffPortraits = `
    <div class="staff-portraits">
      <figure class="staff-card staff-card--yanagida"><div class="staff-card__media"><img src="../shared/staff/yanagida.png" alt="弁護士 柳田駿" loading="lazy"></div><figcaption><span>弁護士</span><strong>柳田 駿</strong><small>弁護士法人レクシード</small></figcaption></figure>
      <figure class="staff-card staff-card--maruyama"><div class="staff-card__media"><img src="../shared/staff/maruyama.png" alt="司法書士 丸山信幸" loading="lazy"></div><figcaption><span>司法書士</span><strong>丸山 信幸</strong><small>丸山法務総合事務所</small></figcaption></figure>
      <figure class="staff-card staff-card--ikeda"><div class="staff-card__media"><img src="../shared/staff/ikeda.png" alt="税理士 池田健司" loading="lazy"></div><figcaption><span>税理士</span><strong>池田 健司</strong><small>池田健司税理士事務所</small></figcaption></figure>
      <figure class="staff-card staff-card--matsumoto"><div class="staff-card__media"><img src="../shared/staff/matsumoto.png" alt="不動産専門家 松本兼典" loading="lazy"></div><figcaption><span>不動産専門家</span><strong>松本 兼典</strong><small>株式会社マルエステート</small></figcaption></figure>
    </div>`;
  document.getElementById("app").innerHTML = `
    <a class="skip" href="#main">本文へ移動</a>
    <header class="site-header"><div><div class="brand">相続支援窓口</div><p>相続・登記・税務・不動産のご相談はお任せください</p></div><a class="header-call" href="tel:08081627977">080-8162-7977</a></header>
    <main id="main">
      <section class="hero">
        <div class="hero__photo" aria-hidden="true"></div>
        <div class="hero__copy">
          <p class="kicker">${heroCopy.eyebrow}</p>
          <h1>${heroCopy.title}</h1>
          <p class="lead">${heroCopy.lead}</p>
          <p class="hero__note">${heroCopy.note}</p>
          <div class="free-badge"><span>初回相談</span><strong>無料</strong><span>お気軽にご相談ください</span></div>
          <div class="cta-set">
            <a class="cta cta--line" href="https://line.me/" target="_blank" rel="noreferrer">LINEで相談する<small>24時間受付中</small></a>
            <a class="cta cta--phone" href="tel:08081627977">電話で相談する<small>受付時間 9:00〜18:00（平日）</small></a>
            <a class="cta cta--mail" href="mailto:matsumoto@marue-state.com">メールで相談する<small>24時間受付中</small></a>
          </div>
        </div>
        <div class="hero__team"><div class="hero__team-label"><span>TEAM</span><strong>4 PROFESSIONALS</strong></div>${staffPortraits}<p class="team-caption">法律・登記・税務・不動産の専門家が連携</p></div>
      </section>
      <div class="trust-bar"><div><span>01</span>初回相談無料</div><div><span>02</span>秘密厳守</div><div><span>03</span>無理な営業は一切いたしません</div></div>

      <section class="section section--problems section--wash">
        <div class="section__inner"><div class="section__head"><h2>こんなお悩みは<br>ありませんか？</h2></div>
        ${card(problems, "problem-grid", ([icon,title]) => `<article class="card"><div class="card__icon">${icon}</div><h3>${title}</h3></article>`)}
        <div class="emphasis">相続は、早めの整理と相談が大切です</div><p class="section__intro">ひとつでも当てはまる方は、お早めにご相談ください。</p>
        <div class="soft-cta"><div><span>まずは、状況を聞かせてください。</span><strong>何を相談すればよいか分からない段階でも大丈夫です。</strong></div><a href="#contact">無料相談を予約する <b>→</b></a></div></div>
      </section>

      <section class="section section--story"><div class="section__inner story">
        <div class="story__visual"><p>相続の悩みは、<br>ご家族だけで<br>抱え込まなくて大丈夫です</p></div>
        <div class="story__text"><p>大切な方を見送った後は、手続き・税務・名義変更・不動産など、初めての対応が重なり不安になりやすいものです。</p><p>そんな時こそ、順番に整理していくことが大切です。</p><div class="emphasis">不安な今こそ、整理して一歩ずつ</div></div>
      </section></div>

      <section class="section section--solution section--wash"><div class="section__inner"><div class="section__head"><h2>相続支援窓口なら、必要な専門家につながる流れが明確です</h2></div>
        <div class="flow"><div class="flow__box"><strong>ご相談者様</strong><span>相続に関するお悩み・ご不安をご相談ください</span></div><div class="flow__arrow">→</div><div class="flow__box flow__box--main"><strong>相続支援窓口</strong><span>ご相談内容を整理し、最適な専門家チームをご提案します</span></div><div class="flow__arrow">→</div><div class="flow__box"><strong>解決</strong><span>各専門家が連携し、ワンストップで問題を解決します</span></div></div>
        <div class="experts"><div class="expert"><strong>弁護士</strong><small>法律問題を専門的にサポート</small></div><div class="expert"><strong>司法書士</strong><small>登記・相続手続きをサポート</small></div><div class="expert"><strong>税理士</strong><small>税務対策・申告をサポート</small></div><div class="expert"><strong>不動産専門家</strong><small>売却・管理・活用をサポート</small></div></div>
        <div class="emphasis">窓口一本化で、相談先に迷わない</div>
      </div></section>

      <section class="section section--services"><div class="section__inner"><div class="section__head"><h2>相続に関する<br>幅広いお悩みに対応します</h2></div>
        ${card(services, "service-grid", ([title,list],i) => `<article class="card"><div class="card__icon">0${i+1}</div><h3>${title}</h3><ul>${list.map(x=>`<li>${x}</li>`).join("")}</ul></article>`)}
        <div class="emphasis">相続・登記・税務・不動産までワンストップ</div><p class="section__intro">専門家が連携し、最適な解決策をご提案します。</p><div class="soft-cta"><div><span>相談内容が複数分野にまたがっても大丈夫です。</span><strong>窓口で整理し、必要な専門家が連携します。</strong></div><a href="tel:08081627977">電話で相談する <b>→</b></a></div></div>
      </section>

      <section class="section section--reasons section--wash"><div class="section__inner"><div class="section__head"><h2>相続支援窓口が<br>選ばれる理由</h2></div>
        ${card(reasons, "reason-grid", ([title,text],i)=>`<article class="card"><div class="card__icon">0${i+1}</div><h3>${title}</h3><p>${text}</p></article>`)}
        <div class="team-strip"><div><h3>ご家族に寄り添う、丁寧なサポート体制</h3><p>各分野の専門家が、あなたをしっかりサポートします。</p></div>${staffPortraits}</div>
      </div></section>

      <section class="section section--cases"><div class="section__inner"><div class="section__head"><h2>ご相談事例とお客様の声</h2></div>
        <div class="cases"><div><h3>ご相談事例</h3><div class="case-list"><div class="case"><strong>相続の進め方が分からない</strong><span>結果　手順を整理できて安心</span></div><div class="case"><strong>実家の名義変更と売却相談</strong><span>結果　名義変更から売却までスムーズ</span></div><div class="case"><strong>相続税がかかるか事前確認</strong><span>結果　税額の目安が分かり、早めに準備</span></div></div></div>
        <div><h3>お客様の声（匿名）</h3><div class="voice-list"><div class="voice"><span class="voice__avatar">01</span><p>何から始めるべきか整理できて安心しました。</p></div><div class="voice"><span class="voice__avatar">02</span><p>複数の専門家につないでもらえて助かりました。</p></div><div class="voice"><span class="voice__avatar">03</span><p>不動産の悩みまで一緒に相談できて心強かったです。</p></div></div></div></div>
        <div class="emphasis">実際の相談イメージが分かるから安心</div><p class="section__intro">一人ひとりの状況に合わせて、専門家が丁寧にサポートします。</p>
      </div></section>

      <section class="section section--plans section--wash"><div class="section__inner"><div class="section__head"><h2>ご相談内容に合わせた<br>料金プラン</h2></div>
        <div class="plans"><article class="plan"><span class="plan__name">初回相談プラン</span><strong>初回相談<br>無料</strong><p>状況ヒアリング・必要な手続きの整理</p></article><article class="plan"><span class="plan__name">相続手続きサポート</span><strong>個別<br>見積もり</strong><p>書類整理・専門家連携・進行サポート</p></article><article class="plan"><span class="plan__name">不動産・生前対策相談</span><strong>個別<br>見積もり</strong><p>空き家・売却・活用・生前対策</p></article></div><p class="estimate">安心の事前見積もり<br>費用が発生する場合は事前にご説明します</p>
      </div></section>

      <section class="section section--steps"><div class="section__inner"><div class="section__head"><h2>ご相談から<br>サポート開始までの流れ</h2></div>
        ${card(steps,"steps",([title,text])=>`<article class="step"><strong>${title}</strong><span>${text}</span></article>`)}
        <div class="emphasis">最短ルートで、安心して進められる流れ</div>
      </div></section>

      <section class="section section--faq section--wash"><div class="section__inner"><div class="section__head"><h2>よくある質問</h2><p class="section__intro">不安や疑問は、事前にしっかり解消</p></div>
        ${card(faqs,"faq",([q,a],i)=>`<details ${i===0?"open":""}><summary>Q${i+1}　${q}</summary><p>A　${a}</p></details>`)}
      </div></section>

      <section class="section contact" id="contact"><div class="section__inner"><div class="section__head"><h2>まずはお気軽に<br>ご相談ください</h2><p class="section__intro">相続の不安やお悩みを整理し、必要な専門家につなぎます。ご相談だけでもお気軽にどうぞ。</p></div>
        <div class="contact-grid"><div class="contact-info"><h3>お電話・メールでのお問い合わせ</h3><a class="contact-info__phone" href="tel:08081627977">080-8162-7977</a><a href="mailto:matsumoto@marue-state.com">matsumoto@marue-state.com</a><ul><li>福岡県福岡市中央区大名1-1-1</li><li>受付時間　9:00〜18:00（平日）</li><li>無理な営業はいたしません</li><li>個人情報は適切に管理します</li><li>初回相談しやすい</li></ul><div class="cta-set"><a class="cta cta--line" href="https://line.me/">無料相談を申し込む</a><a class="cta cta--phone" href="tel:08081627977">電話で相談する</a><a class="cta cta--mail" href="mailto:matsumoto@marue-state.com">メールで問い合わせる</a></div></div>
        <form class="form" id="inquiry-form"><h3>お問い合わせフォーム</h3><p>下記フォームにご入力のうえ、送信してください。担当者より折り返しご連絡いたします。</p><label>お名前（必須）<input name="name" required placeholder="例）松本 太郎"></label><label>電話番号（必須）<input name="tel" required inputmode="tel" placeholder="例）080-1234-5678"></label><label>メールアドレス（必須）<input name="email" required type="email" placeholder="例）sample@example.com"></label><label>ご相談内容（必須）<textarea name="message" required placeholder="例）相続手続きについて相談したい&#10;不動産の名義変更をお願いしたい など"></textarea></label><button type="submit">送信する</button><small>送信内容はSSL暗号化により保護されます。</small></form></div>
        <div class="staff-footer"><div><h3>各分野の専門家が連携してサポートします</h3><p>弁護士　柳田 駿<br>司法書士　丸山 信幸<br>税理士　池田 健司<br>不動産専門家　松本 兼典</p></div>${staffPortraits}</div>
      </div></section>
      <div class="closing">相談先をひとつに、安心を次の一歩へ<br><small>ワンストップで、最適な解決へと導きます。</small></div>
    </main>
    <nav class="mobile-cta" aria-label="お問い合わせ"><a href="https://line.me/">LINE</a><a href="tel:08081627977">電話</a><a href="mailto:matsumoto@marue-state.com">メール</a></nav>
    <a class="back-link" href="../preview.html">← 4案比較へ戻る</a>`;
  const form = document.getElementById("inquiry-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const button = form.querySelector("button");
    button.textContent = "送信内容を確認しました";
    button.setAttribute("aria-live", "polite");
  });
})();
