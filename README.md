# Ricardo Andrade Advocacia — site institucional

Site institucional para advogado, feito em **React + Vite + TypeScript**,
100% responsivo, com banner em vídeo no topo e botão flutuante de WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## O que personalizar antes de publicar

1. **Vídeo do banner** — coloque `hero.mp4` (e opcionalmente `hero.webm`)
   dentro de `public/video/`. Instruções detalhadas em
   `public/video/LEIA-ME.txt`. Enquanto o arquivo não existir, a página usa
   automaticamente a imagem de fallback (`poster.svg`) e nada quebra.
2. **WhatsApp** — troque o número `5511999999999` (formato DDI+DDD+número,
   sem espaços ou símbolos) nos arquivos:
   - `src/components/Header.tsx`
   - `src/components/Hero.tsx`
   - `src/components/PracticeAreas.tsx`
   - `src/components/Contact.tsx`
   - `src/components/WhatsAppButton.tsx`
3. **Textos e nome do advogado** — todo o conteúdo (nome, OAB, áreas de
   atuação, depoimentos, endereço) está direto nos componentes dentro de
   `src/components/`, em português, fácil de editar.
4. **Foto "Sobre"** — troque a URL de imagem em `src/components/About.tsx`
   por uma foto real do advogado (coloque o arquivo em `public/img/` e
   aponte o `src` para `/img/seu-arquivo.jpg`).
5. **Cores e tipografia** — tudo centralizado em `src/styles/tokens.css`
   (paleta ink/brass e as fontes Fraunces/Inter/IBM Plex Mono).

## Estrutura

```
src/
  components/       componentes de cada seção (Header, Hero, About, ...)
  styles/           tokens.css (design tokens) + global.css (reset e base)
  App.tsx           monta todas as seções da página
public/
  video/            vídeo do banner + imagem de fallback
  img/              favicon e imagens estáticas
```

## Responsividade

Layout mobile-first, com pontos de quebra em `640px`, `768px`, `900px` e
`1024px`. O menu vira um menu hambúrguer abaixo de `1024px`, os grids de
cartões colapsam para 1–2 colunas em telas pequenas, e o botão de WhatsApp
permanece fixo em qualquer tamanho de tela.
