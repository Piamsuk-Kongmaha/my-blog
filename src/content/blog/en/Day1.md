---
title: 'ทดลองเขียนดูครั้งแรก'
description: 'เห้ยพี่ผมพึ่งลองอ่ะ'
pubDate: '2026-10-14'
tags: ['บล็อกทั่วไป']
---

cattakung meow

---

## 📂 การเขียน Blog เนี่ยเป็นเรื่องที่น่าปวดหัวจริงๆนะ

คือตอนนี้ผมกำลังทดลองกับหลายๆอย่างดูว่าต้องทำประมาณไหน `Cattakung` 

- `src/content/blog/en/` — ชีวิตผมอยู่ในนี้


---

## 📋 วิธีโพสต์เพื่อลืมนะเปี่ยมสุข

Every markdown post must contain a metadata block at the very top, enclosed by triple dashes `---`. Zahit's content collection schema enforces the following fields:

```markdown
---
title: 'Your Article Title'
description: 'A brief description of your article.'
pubDate: '2026-05-17'
tags: ['tag1', 'tag2']
translationKey: 'unique-post-identifier'
---
```

### Explaining the Fields:
- **`title` & `description`:** Essential fields rendered at the top of the article and dynamically injected into the HTML `<head>` tag for optimal SEO indexation.
- **`pubDate`:** The publication date. Zahit uses this date to sort posts chronologically and group them dynamically by year inside the `/archive/` page.
- **`tags`:** An array of tags. Make sure to include `zahit-guide` if you want them grouped under the theme guide archive.
- **`translationKey`:** A custom unique text key linking the English and Turkish translations of the post together.

---
