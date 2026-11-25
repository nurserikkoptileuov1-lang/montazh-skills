// ===== Настройки магазина =====
// whatsapp: номер только цифрами, например 77001234567. kaspi: ссылка на оплату Kaspi.
var SHOP = { whatsapp: '77080070726', kaspi: '' };

// ===== Товары =====
var PRODUCTS = [
  { id: 'deepal', name: 'Deepal Power Boost', base: 'H4', price: 15000, imgs: ['g-deepal-1.jpg', 'g-deepal-2.jpg'],
    badge: { kk: 'Ең қуатты', ru: 'Самая мощная' },
    meta: { kk: 'H4 · 150 Вт · сары / ақ', ru: 'H4 · 150 Вт · жёлтый / белый' },
    text: { kk: 'Мұндай қуатты шам сирек кездеседі: жарығы күшті әрі алысқа түседі. Жақын жарығы сары (3800K) — жаңбыр мен тұманда жолды жақсы көрсетеді, алыс жарығы ақ (6000K). Жинақта сыртқы блок бар.',
            ru: 'Лампы такой мощности встречаются редко: свет сильный и бьёт далеко. Ближний свет жёлтый (3800K) — лучше видно в дождь и туман, дальний белый (6000K). В комплекте выносной блок.' },
    specs: [['base', 'H4'], ['power', '150 Вт'], ['low', { kk: 'сары, 3800K', ru: 'жёлтый, 3800K' }], ['high', { kk: 'ақ, 6000K', ru: 'белый, 6000K' }], ['block', { kk: 'бар', ru: 'есть' }], ['set', { kk: '2 шам', ru: '2 лампы' }]] },
  { id: 'viluch', name: 'Вілуч N2 PRO', base: 'H4', price: 12000, imgs: ['g-viluch-1.jpg', 'g-viluch-2.jpg'],
    badge: { kk: 'Тиімді баға', ru: 'Выгодная цена' },
    meta: { kk: 'H4 · 50 Вт · сары / ақ', ru: 'H4 · 50 Вт · жёлтый / белый' },
    text: { kk: 'Ықшам шам, блогы жоқ — тар фараға да сыяды. Жақын жарығы сары, алыс жарығы ақ. 12–48 В кернеуде жұмыс істейді, сондықтан жүк көліктеріне де жарайды. Қызмет мерзімі 30 000 сағаттан асады.',
            ru: 'Компактная лампа без блока — встаёт даже в тесную фару. Ближний свет жёлтый, дальний белый. Работает от 12 до 48 В, поэтому подходит и грузовикам. Ресурс больше 30 000 часов.' },
    specs: [['base', 'H4'], ['power', '50 Вт'], ['low', { kk: 'сары', ru: 'жёлтый' }], ['high', { kk: 'ақ, 6000K', ru: 'белый, 6000K' }], ['volt', '12–48 В'], ['life', { kk: '30 000 сағ. астам', ru: 'больше 30 000 ч' }], ['block', { kk: 'жоқ', ru: 'нет' }]] },
  { id: 'vantra-h4', name: 'Vantra VT F1', base: 'H4', price: 15000, imgs: ['g-vantra-1.jpg'],
    meta: { kk: 'H4 · 150 Вт · ақ / ақ', ru: 'H4 · 150 Вт · белый / белый' },
    text: { kk: 'Екі режимде де таза ақ жарық, 6000K-ге дейін — жол мен белгілер күндізгідей көрінеді. Қуаты 150 Вт, 12–24 В. Қорапта екі шам.',
            ru: 'Чистый белый свет в обоих режимах, до 6000K — дорога и разметка видны как днём. Мощность 150 Вт, 12–24 В. В коробке две лампы.' },
    specs: [['base', 'H4'], ['power', '150 Вт'], ['low', { kk: 'ақ', ru: 'белый' }], ['high', { kk: 'ақ, 6000K', ru: 'белый, 6000K' }], ['volt', '12–24 В'], ['block', { kk: 'бар', ru: 'есть' }], ['set', { kk: '2 шам', ru: '2 лампы' }]] },
  { id: 'vantra-9006', name: 'Vantra VT F1', base: '9006', price: 14000, imgs: ['g-v9006-1.jpg', 'g-v9006-2.jpg'],
    meta: { kk: '9006 · 100 Вт · ақ', ru: '9006 · 100 Вт · белый' },
    text: { kk: 'Сол Vantra сериясы, 9006 (HB4) цокольге арналған. Бұл бір режимді шам: көбіне бөлек фаралардағы жақын жарыққа немесе тұман шамына қойылады. Қуаты 100 Вт, ақ жарық.',
            ru: 'Та же серия Vantra под цоколь 9006 (HB4). Это однорежимная лампа: обычно её ставят на ближний свет в раздельных фарах или в противотуманки. Мощность 100 Вт, белый свет.' },
    specs: [['base', '9006 (HB4)'], ['power', '100 Вт'], ['mode', { kk: 'бір режим, ақ', ru: 'один режим, белый' }], ['volt', '12–24 В'], ['block', { kk: 'бар', ru: 'есть' }]] }
];
var SPEC_NAMES = {
  base: { kk: 'Цоколь', ru: 'Цоколь' }, power: { kk: 'Қуаты', ru: 'Мощность' }, low: { kk: 'Жақын жарық', ru: 'Ближний свет' },
  high: { kk: 'Алыс жарық', ru: 'Дальний свет' }, volt: { kk: 'Кернеу', ru: 'Напряжение' }, life: { kk: 'Қызмет мерзімі', ru: 'Ресурс' },
  block: { kk: 'Сыртқы блок', ru: 'Выносной блок' }, set: { kk: 'Жинақта', ru: 'В комплекте' }, mode: { kk: 'Жарық', ru: 'Свет' }
};

// ===== Тексты на русском (казахские стоят в странице) =====
var RU = {
  'nav.catalog': 'Каталог', 'nav.guide': 'Как выбрать', 'nav.compare': 'Сравнение', 'nav.cart': 'Корзина',
  'hero.h1': 'лампы', 'hero.lead': 'Deepal, Вілуч и Vantra. Ближний и дальний свет в одной лампе, мощность до 150 Вт.',
  'hero.cta': 'Выбрать лампы', 'hero.cta2': 'Корзина',
  'stat.power': 'максимальная мощность', 'stat.price': 'цена от', 'stat.kaspi': 'оплата онлайн',
  'cat.h2': 'Каталог', 'cat.p': 'Цена за комплект (2 лампы). Нажмите на лампу, чтобы открыть фото и характеристики.',
  'guide.h2': 'Как выбрать', 'guide.p': 'Перед покупкой проверьте четыре вещи. Если сомневаетесь, напишите в WhatsApp марку машины.',
  'g1.h': 'Цоколь', 'g1.p': 'Цоколь — это часть лампы, которой она вставляется в фару. Его видно на старой лампе или в инструкции к машине. В H4 ближний и дальний свет в одной лампе, 9006 — отдельная лампа одного режима.',
  'g2.h': 'Цвет света', 'g2.p': '3500–3800K — тёплый жёлтый свет, меньше отражается от дождя, снега и тумана. 6000K — белый, как днём, разметка видна чётче.',
  'g3.h': 'Мощность', 'g3.p': '150 Вт светят дальше и ярче, такие лампы встречаются редко. 50 Вт экономнее и меньше греются.',
  'g4.h': 'После установки', 'g4.p': 'Проверьте регулировку фар: светодиодная лампа ярче галогенной и без настройки слепит встречных водителей.',
  'cmp.h2': 'Сравнение', 'cmp.p': 'Deepal и Vantra мощнее, Вілуч дешевле и без блока.',
  'cmp.model': 'Модель', 'cmp.base': 'Цоколь', 'cmp.power': 'Мощность', 'cmp.low': 'Ближний свет', 'cmp.high': 'Дальний свет',
  'cmp.volt': 'Напряжение', 'cmp.block': 'Выносной блок', 'cmp.price': 'Цена',
  'c.y3800': 'жёлтый, 3800K', 'c.y': 'жёлтый', 'c.w': 'белый', 'c.w1': 'белый, один режим', 'c.w6000': 'белый, 6000K', 'c.yes': 'есть', 'c.no': 'нет',
  'cart.h2': 'Корзина', 'cart.p': 'Список и сумма заказа отправятся в WhatsApp. Оплатить можно сразу через Kaspi.',
  'cart.empty': 'Корзина пуста. Выберите лампы в каталоге.', 'cart.total': 'Итого',
  'cart.wa': 'Заказать через WhatsApp', 'cart.kaspi': 'Оплатить через Kaspi',
  'cart.note': 'Получив заказ, мы свяжемся с вами и договоримся о доставке.',
  'foot.h2': 'Подберём лампы под вашу машину', 'foot.cta': 'Написать в WhatsApp',
  'foot.tm': 'Названия Deepal, Вілуч и Vantra принадлежат их владельцам', 'foot.photo': 'Фото на фоне',
  'btn.add': 'В корзину', 'btn.added': 'В корзине', 'sheet.buy': 'Купить сейчас', 'sheet.close': 'Закрыть', 'set': 'комплект',
  'msg.hello': 'Здравствуйте! Хочу купить лампочки:', 'msg.total': 'Итого', 'msg.ask': 'Здравствуйте! Хочу купить лампочки.',
  'qty.minus': 'Убрать одну', 'qty.plus': 'Добавить ещё', 'open': 'Открыть'
};
var KK_EXTRA = {
  'btn.added': 'Себетте', 'sheet.close': 'Жабу', 'set': 'жинақ', 'open': 'Ашу',
  'msg.hello': 'Сәлеметсіз бе! Лампочка алғым келеді:', 'msg.total': 'Барлығы',
  'msg.ask': 'Сәлеметсіз бе! Лампочка алғым келеді.', 'qty.minus': 'Біреуін алып тастау', 'qty.plus': 'Тағы біреу қосу'
};

var KK = {}, lang = 'kk';
function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
function t(k) { return (lang === 'ru' ? RU[k] : (KK[k] || KK_EXTRA[k])) || KK[k] || KK_EXTRA[k] || k; }
function L(v) { return typeof v === 'string' ? v : v[lang]; }
function money(n) { return n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₸'; }
function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; }
function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
function title(p) { return p.name + ' · ' + p.base; }
function pic(p, i) {
  if (p.imgs[i || 0]) { var im = el('img'); im.src = p.imgs[i || 0]; im.alt = title(p); im.loading = 'lazy'; return im; }
  var d = el('div', 'prod__type'); d.setAttribute('role', 'img'); d.setAttribute('aria-label', title(p)); d.appendChild(el('b', '', p.base)); return d;
}

document.querySelectorAll('[data-t]').forEach(function (e) { KK[e.getAttribute('data-t')] = e.textContent; });

// ===== Каталог =====
var catalog = document.querySelector('[data-catalog]');
function renderCatalog() {
  catalog.textContent = '';
  PRODUCTS.forEach(function (p, i) {
    var a = el('article', 'prod');
    var open = el('button', 'prod__open'); open.type = 'button'; open.setAttribute('aria-label', t('open') + ': ' + title(p));
    open.onclick = function () { openSheet(p.id, open); };
    var img = el('div', 'prod__img'); img.appendChild(pic(p)); img.appendChild(el('span', 'prod__num', '0' + (i + 1)));
    if (p.badge) img.appendChild(el('span', 'prod__badge', L(p.badge)));
    var body = el('div', 'prod__body');
    body.appendChild(el('h3', '', title(p)));
    body.appendChild(el('p', 'prod__meta', L(p.meta)));
    var foot = el('div', 'prod__foot');
    foot.appendChild(el('div', 'price', money(p.price)));
    var add = el('button', 'btn btn--red', t('btn.add')); add.type = 'button'; add.onclick = function () { addToCart(p.id, add); };
    foot.appendChild(add); body.appendChild(foot);
    a.append(open, img, body); catalog.appendChild(a);
  });
}

// ===== Страница товара =====
var sheet = document.querySelector('[data-sheet]'), gal = sheet.querySelector('[data-gal]'), dots = sheet.querySelector('[data-dots]');
var current = null, lastFocus = null;
function fillSheet() {
  var p = byId(current); if (!p) return;
  gal.textContent = ''; dots.textContent = '';
  var n = Math.max(p.imgs.length, 1);
  for (var i = 0; i < n; i++) { var f = el('figure'); f.style.margin = 0; f.appendChild(pic(p, i)); gal.appendChild(f); if (n > 1) dots.appendChild(el('i', i === 0 ? 'on' : '')); }
  sheet.querySelector('[data-s-kicker]').textContent = p.base + ' · ' + t('set');
  sheet.querySelector('[data-s-name]').textContent = p.name;
  sheet.querySelector('[data-s-price]').textContent = money(p.price);
  sheet.querySelector('[data-s-text]').textContent = L(p.text);
  var ul = sheet.querySelector('[data-s-specs]'); ul.textContent = '';
  p.specs.forEach(function (s) { var li = el('li'); li.append(el('span', '', L(SPEC_NAMES[s[0]])), el('span', '', L(s[1]))); ul.appendChild(li); });
}
gal.addEventListener('scroll', function () {
  var i = Math.round(gal.scrollLeft / gal.clientWidth);
  dots.querySelectorAll('i').forEach(function (d, j) { d.className = j === i ? 'on' : ''; });
}, { passive: true });
function openSheet(id, from) {
  current = id; lastFocus = from || document.activeElement; fillSheet(); gal.scrollLeft = 0;
  sheet.classList.add('open'); sheet.setAttribute('aria-hidden', 'false'); document.body.classList.add('locked');
  setTimeout(function () { sheet.querySelector('.sheet__close').focus({ preventScroll: true }); }, 50);
}
function closeSheet() {
  sheet.classList.remove('open'); sheet.setAttribute('aria-hidden', 'true'); document.body.classList.remove('locked');
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
sheet.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', closeSheet); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sheet.classList.contains('open')) closeSheet(); });
sheet.querySelector('[data-s-add]').addEventListener('click', function (e) { addToCart(current, e.currentTarget); });
sheet.querySelector('[data-s-buy]').addEventListener('click', function () {
  if (!cart[current]) addToCart(current);
  closeSheet(); setTimeout(function () { document.getElementById('cart').scrollIntoView({ behavior: 'smooth' }); }, 120);
});

// ===== Корзина =====
var cart = {};
try { cart = JSON.parse(store('sevenparts-cart') || '{}') || {}; } catch (e) { cart = {}; }
var list = document.querySelector('[data-cart-list]'), emptyEl = document.querySelector('[data-cart-empty]');
var totalRow = document.querySelector('[data-cart-totalrow]'), totalEl = document.querySelector('[data-cart-total]');
var waBtn = document.querySelector('[data-cart-wa]'), kaspiBtn = document.querySelector('[data-cart-kaspi]');
var countEl = document.querySelector('[data-cart-count]'), cartBtn = document.querySelector('[data-cart-btn]');
function save() { store('sevenparts-cart', JSON.stringify(cart)); }
function addToCart(id, btn) {
  cart[id] = (cart[id] || 0) + 1; save(); renderCart();
  cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump');
  if (btn) { btn.textContent = t('btn.added') + ' · ' + cart[id]; clearTimeout(btn._t); btn._t = setTimeout(function () { btn.textContent = t('btn.add'); }, 1400); }
}
function renderCart() {
  list.textContent = '';
  var sum = 0, count = 0, lines = [];
  Object.keys(cart).forEach(function (id) {
    var p = byId(id), q = cart[id];
    if (!p || !(q > 0)) { delete cart[id]; return; }
    sum += p.price * q; count += q; lines.push(title(p) + ' × ' + q + ' — ' + money(p.price * q));
    var li = el('li'); var th = pic(p); if (th.tagName !== 'IMG') { th = el('div', 'prod__type'); th.style.cssText = 'grid-row:span 2;width:64px;height:64px;border-radius:10px;font-size:9px'; th.appendChild(el('b', '', p.base)); th.firstChild.style.fontSize = '16px'; }
    var minus = el('button', '', '−'); minus.type = 'button'; minus.setAttribute('aria-label', t('qty.minus')); minus.onclick = function () { cart[id]--; save(); renderCart(); };
    var plus = el('button', '', '+'); plus.type = 'button'; plus.setAttribute('aria-label', t('qty.plus')); plus.onclick = function () { cart[id]++; save(); renderCart(); };
    var qty = el('div', 'qty'); qty.append(minus, el('span', '', q), plus);
    li.append(th, el('b', '', title(p)), el('span', 'sum', money(p.price * q)), el('span', 'each', money(p.price) + ' × ' + q), qty);
    list.appendChild(li);
  });
  save();
  var has = count > 0;
  emptyEl.hidden = has; totalRow.hidden = !has; totalEl.textContent = money(sum); countEl.textContent = count;
  var text = has ? t('msg.hello') + '\n' + lines.join('\n') + '\n' + t('msg.total') + ': ' + money(sum) : t('msg.ask');
  waBtn.href = 'https://wa.me/' + SHOP.whatsapp + '?text=' + encodeURIComponent(text);
  document.querySelectorAll('[data-wa-plain]').forEach(function (a) { a.href = 'https://wa.me/' + SHOP.whatsapp + '?text=' + encodeURIComponent(t('msg.ask')); });
  if (SHOP.kaspi) { kaspiBtn.href = SHOP.kaspi; kaspiBtn.hidden = !has; }
}

// ===== Язык =====
function setLang(l) {
  lang = l === 'ru' ? 'ru' : 'kk';
  document.documentElement.lang = lang; document.documentElement.dataset.lang = lang;
  document.querySelectorAll('[data-t]').forEach(function (e) { e.textContent = t(e.getAttribute('data-t')); });
  document.querySelectorAll('[data-t-label]').forEach(function (e) { e.setAttribute('aria-label', t(e.getAttribute('data-t-label'))); });
  document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  document.title = lang === 'ru' ? 'Seven Parts LED лампы' : 'Seven Parts LED шамдар';
  store('sevenparts-lang', lang);
  renderCatalog(); renderCart(); if (current && sheet.classList.contains('open')) fillSheet();
}
document.querySelectorAll('.lang button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });
setLang(store('sevenparts-lang') || 'kk');
