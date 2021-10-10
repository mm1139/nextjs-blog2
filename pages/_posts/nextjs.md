---
title: nextjs
data: 2021/09/16
description: メモ
---

## Nextjs のいいところ

レンダリングをページ単位で変えられる様です

### レンダリング？方法

Server Side Rendering(SSR)
いつも最新 HTML を作成作成

Static Side Generation(SSG)
ビルド時に HTML 作成　変更がない HTML
→ Incremental Static Refeneration(ISR)
変更があった場合に再レンダリング

Client Side Renderring(CSR)

### nextjs のメソッド

getStaticProps
静的生成時に取得にデータ取得と出力
fallback:false
ページを生成しない（ビルド時のみ）
fallback:true
ISG
ビルドが無かったら、ページを生成する
revalidate:1
1 秒後再取得
ISR

getStaticPaths
動的な ID などのページを作成する

getServersSideProps(context)
context の中身で代表出来なもの
params
req
res
query
