# 相続支援窓口 LP（クライアント確認用）

静的サイトです。ビルド不要。GitHub Pages にそのまま公開できます。

## 公開URLの構成
- トップ（4案比較）: `/`（`index.html` = `preview.html`）
- 案1 モダン: `/pattern-01-modern-trust/`
- 案2 プレミアム: `/pattern-02-premium/`
- 案3 温かい: `/pattern-03-warm-family/`
- 案4 雑誌風: `/pattern-04-editorial/`

## GitHub Pages で公開する手順（CLI不要）
1. GitHub で新しいリポジトリを作成（例: `souzoku-lp`）。Public。
2. このフォルダ内の**全ファイル**（`.nojekyll` 含む）をアップロード（Add file → Upload files → まとめてドラッグ）。
3. リポジトリの Settings → Pages。
4. Build and deployment → Source =「Deploy from a branch」、Branch =「main」/「（root）」→ Save。
5. 数十秒後、`https://<ユーザー名>.github.io/souzoku-lp/` が発行されます。これがクライアントに渡す恒久URLです。

## CLI で公開する場合（git 設定済みなら）
```bash
cd client-site
git init && git add -A && git commit -m "相続支援窓口 LP"
git branch -M main
git remote add origin https://github.com/<ユーザー名>/souzoku-lp.git
git push -u origin main
# → GitHub の Settings → Pages で main / (root) を選択
```

修正が出たら、ファイルを差し替えて再アップロード（またはgit push）するだけで同じURLに反映されます。
