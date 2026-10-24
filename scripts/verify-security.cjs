const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

function reader(decodedText) {
  const context = {
    document: {
      addEventListener() {},
      createElement() { return {innerHTML: '', textContent: decodedText}; }
    },
    I18n: {t: () => '<svg onload="alert(1)"> & year'}
  };
  context.window = context;
  vm.createContext(context);
  vm.runInContext(read('edu/js/app.js'), context);
  vm.runInContext(read('edu/js/router.js') + ';this.reader = Router;', context);
  return context.reader;
}

for (const method of ['renderHistoryTimelineInline', 'renderApplicationsInline']) {
  test(method + ' escapes decoded DOM text and headings before HTML rendering', () => {
    const decoded = '<img src=x onerror="alert(1)"> & <script>alert(2)</script>';
    const title = '<b>Unsafe heading</b>';
    const router = reader(title + decoded);
    const html = router[method]({items: [{id: 'health', title, content: '&lt;img src=x onerror="alert(1)"&gt;'}]});
    assert.ok(html.includes('&lt;img src=x onerror=&quot;alert(1)&quot;&gt; &amp; &lt;script&gt;alert(2)&lt;/script&gt;'));
    assert.ok(html.includes('&lt;b&gt;Unsafe heading&lt;/b&gt;'));
    assert.doesNotMatch(html, /<img\b|<script\b|<b>Unsafe heading/);
    if (method === 'renderHistoryTimelineInline') {
      assert.ok(html.includes('&lt;svg onload=&quot;alert(1)&quot;&gt; &amp; year'));
      assert.doesNotMatch(html, /<svg onload=/);
    }
  });
}

test('Business entry pages leave console warnings intact and load local Tailwind', () => {
  for (const name of ['index', 'agents', 'builder', 'playbooks']) {
    const html = read('biz/' + name + '.html');
    assert.doesNotMatch(html, /console\.warn\s*=/);
    assert.match(html, /src="libs\/tailwindcss\.js\?v=95"/);
  }
});
