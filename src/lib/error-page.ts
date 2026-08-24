export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <title>تعذر تحميل الصفحة | Nux Growth</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.6 system-ui, -apple-system, sans-serif; background: #0c1410; color: #f4fbf7; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; text-align: center; }
      .card { max-width: 28rem; width: 100%; padding: 2rem; background: #13221b; border: 1px solid #1f3a2e; border-radius: 1rem; }
      h1 { font-size: 1.35rem; margin: 0 0 0.75rem; color: #4ade80; }
      p { color: #9eb8ac; margin: 0 0 1.5rem; font-size: 0.95rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.2rem; border-radius: 0.5rem; font: inherit; font-weight: 700; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #10b981; color: #042f1f; }
      .secondary { background: transparent; color: #f4fbf7; border-color: #274839; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>تعذر تحميل الصفحة</h1>
      <p>حدث خطأ أثناء تحميل محتوى الصفحة. يمكنك إعادة المحاولة أو العودة للصفحة الرئيسية.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">إعادة المحاولة</button>
        <a class="secondary" href="/">الصفحة الرئيسية</a>
      </div>
    </div>
  </body>
</html>`;
}
