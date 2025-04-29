import { createApp } from 'vue';
import router from './router.js';
import vuetify from './vuetify.js';
import i18n from './i18n.js';
import app from './app.vue';
import dialog from './plugins/dialog.js';
import snackbar from './plugins/snackbar.js';

// 移除与代码高亮和 Markdown 渲染相关的导入
// import { marked } from 'marked';
// import { markedHighlight } from 'marked-highlight';
// import prism from 'prismjs';
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-c.js';
// import 'prismjs/components/prism-cpp.js';
// import 'prismjs/components/prism-csharp.js';
// import 'prismjs/components/prism-go.js';
// import 'prismjs/components/prism-go-module.js';
// import 'prismjs/components/prism-java.js';
// import 'prismjs/components/prism-javascript.js';
// import 'prismjs/components/prism-jsx.js';
// import 'prismjs/components/prism-typescript.js';
// import 'prismjs/components/prism-tsx.js';
// import 'prismjs/components/prism-php.js';
// import 'prismjs/components/prism-php-extras.js';
// import 'prismjs/components/prism-python.js';
// import 'prismjs/components/prism-markup.js';
// import 'prismjs/components/prism-css.js';
// import 'prismjs/components/prism-css-extras.js';
// import 'prismjs/components/prism-lua.js';
// import 'prismjs/components/prism-rust.js';
// import 'prismjs/components/prism-kotlin.js';
// import 'prismjs/components/prism-docker.js';
// import 'prismjs/components/prism-powershell.js';
// import 'prismjs/components/prism-json.js';
// import 'prismjs/components/prism-batch.js';
// import 'prismjs/components/prism-shell-session.js';
// import 'prismjs/components/prism-bash.js';
// import 'prismjs/components/prism-markup-templating.js';
// import 'prismjs/components/prism-yaml.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

// 移除 Markdown 样式导入
// import './markdown-style.css';

// 移除 marked 相关配置
// marked.use(markedHighlight({
//     highlight(code, lang) {
//         if (prism.languages[lang]) {
//             setTimeout(prism.highlightAll);
//             return prism.highlight(code, prism.languages[lang], lang);
//         } else {
//             return code;
//         }
//     },
// }));
// marked.use({
//     useNewRenderer: true,
//     renderer,
// });

createApp(app)
    .use(router)
    .use(vuetify)
    .use(dialog, { vuetify })
    .use(snackbar, { vuetify })
    .use(i18n)
    .mount('#app');

/**
 * @param {String} label
 * @param {String} content
 * @param {String} color
 */
const consoleBadge = (label, content, color) => console.log(
    `%c ${label} %c ${content} `,
    'color:#fff;background-color:#555;border-radius:3px 0 0 3px',
    `color:#fff;background-color:${color};border-radius:0 3px 3px 0`
);

consoleBadge('Project', 'dufs-material-assets', '#07c');
consoleBadge('Author', 'TransparentLC', '#f84');
consoleBadge('Build Time', __BUILD_TIME__, '#f48');
consoleBadge('Build With', `${__VUE_VERSION__} + ${__VITE_VERSION__}`, '#4b8');
consoleBadge('Build With', __VUETIFY_VERSION__, '#16b');
