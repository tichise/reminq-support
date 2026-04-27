// 言語データ
const translations = {
	en: {
		nav: {
			features: 'Features',
			about: 'About',
			future: 'Future Updates'
		},
		hero: {
			subtitle: 'A task management app that turns Apple Reminders\non iPhone, iPad, and Mac into a Kanban board',
			download: 'Coming soon to the App Store'
		},
		about: {
			title: 'About',
			content1: 'Reminq is a task management app that displays your iPhone, iPad, and Mac standard Reminders as a Kanban board. View your Reminder lists as boards and switch task states with drag and drop.',
			content2: 'The name "Reminq" combines "Reminders" with "q" for uniqueness. It reflects our intent to reinvent the standard Reminders experience into something more intuitive and enjoyable.',
			content3: 'From meeting prep, document creation, and deadline tracking to running multiple projects in parallel — Reminq lets you see "TODO," "In Progress," and "Done" at a glance, all from your standard Reminders. Data is stored locally in Reminders and syncs across devices via iCloud.'
		},
		features: {
			title: 'Main Features',
			board: {
				title: 'Kanban Board View',
				desc: 'Display your Reminder lists as a Kanban board and visualize progress across "TODO," "In Progress," and "Done."'
			},
			sync: {
				title: 'Full Reminders Sync',
				desc: 'Automatically syncs with iPhone, iPad, and Mac standard Reminders via EventKit. Data is stored safely on device.'
			},
			dragdrop: {
				title: 'Drag & Drop',
				desc: 'Move tasks between columns by drag and drop. Smooth, stress-free task management.'
			},
			ai: {
				title: 'AI Task Breakdown (Optional)',
				desc: 'AI breaks large tasks into right-sized pieces. Available when you set your own OpenAI API key.'
			},
			camera: {
				title: 'Sticky Note Camera Import',
				desc: 'Capture handwritten memos and paper sticky notes with the camera and turn them into digital tasks.'
			},
			analytics: {
				title: 'Activity Analytics',
				desc: 'Visualize activity by week and month. Reflect on completion trends and plan ahead.'
			}
		},
		future: {
			title: 'Future Updates',
			extract: {
				title: 'Automatic Task Extraction',
				desc: 'Generate task lists automatically by analyzing text and images.'
			},
			theme: {
				title: 'Custom Themes',
				desc: 'Customize board colors and sticky note styles with a flexible theme system.'
			},
			deps: {
				title: 'Task Dependencies',
				desc: 'Link related tasks and visualize dependencies across an entire project.'
			}
		},
		footer: {
			support: {
				title: 'Support',
				page: 'Support Page',
				bug: 'Report Bug',
				feature: 'Feature Request'
			},
			legal: {
				title: 'Legal',
				terms: 'Terms of Service',
				privacy: 'Privacy Policy'
			},
			links: {
				title: 'Links',
				features: 'Features',
				future: 'Future Updates'
			}
		}
	},
	ja: {
		nav: {
			features: '機能',
			about: 'アプリについて',
			future: '機能追加予定'
		},
		hero: {
			subtitle: 'iPhone・iPad・Macの標準リマインダーを\nカンバンボードで管理するタスク管理アプリ',
			download: 'App Storeで近日公開'
		},
		about: {
			title: 'アプリについて',
			content1: 'Reminqは、iPhone・iPad・Macの標準リマインダーをカンバンボード形式で管理できるタスク管理アプリです。リマインダーのリストをそのままボードとして表示し、ドラッグ＆ドロップでタスクの状態を切り替えられます。',
			content2: '「Reminq」という名前は「Reminders」と独自性を表す「q」を組み合わせた造語で、iOS標準のリマインダーを再発明し、もっと直感的で楽しい使い心地に変えるという思いを込めています。',
			content3: '会議の準備、資料作成、締め切り管理、複数プロジェクトの並行進行など、リスト表示だけでは把握しづらいタスクも、カンバンボードなら「TODO」「進行中」「完了」を一目で見渡せます。データはすべて端末内のリマインダーに保存され、iCloud経由でデバイス間と同期します。'
		},
		features: {
			title: '主な特徴',
			board: {
				title: 'カンバンボード表示',
				desc: 'リマインダーのリストをカンバンボード形式で表示。「TODO」「進行中」「完了」の3段階で進捗を可視化します。'
			},
			sync: {
				title: '標準リマインダーと完全同期',
				desc: 'iPhone・iPad・Macの標準リマインダーアプリとEventKit経由で自動同期。データは端末に安全に保存されます。'
			},
			dragdrop: {
				title: 'ドラッグ＆ドロップ',
				desc: 'タスクの進行状況をドラッグ＆ドロップで簡単に変更。スムーズな操作性で、ストレスフリーな管理を実現します。'
			},
			ai: {
				title: 'AIタスク分解（オプション）',
				desc: '大きなタスクをAIが適切なサイズに分解。ご自身のOpenAI APIキーを設定するとご利用いただけます。'
			},
			camera: {
				title: '付箋カメラ取り込み',
				desc: '手書きメモや紙の付箋を撮影してデジタルタスクに変換。アナログとデジタルの境界を取り払います。'
			},
			analytics: {
				title: 'アクティビティ解析',
				desc: '週・月単位のグラフ表示で活動量を可視化。完了傾向を振り返り、次の計画に活かせます。'
			}
		},
		future: {
			title: '機能追加予定',
			extract: {
				title: '自動タスク抽出',
				desc: 'テキストや画像を分析してタスクリストを自動生成する機能を準備中です。'
			},
			theme: {
				title: 'カスタムテーマ',
				desc: 'ボードの色や付箋スタイルを自由にカスタマイズできるテーマ機能を予定しています。'
			},
			deps: {
				title: 'タスクの依存関係管理',
				desc: '関連するタスクを紐づけて並べ替え、プロジェクト全体の依存関係を可視化する機能を検討中です。'
			}
		},
		footer: {
			support: {
				title: 'サポート',
				page: 'サポートページ',
				bug: 'バグ報告',
				feature: '機能リクエスト'
			},
			legal: {
				title: '法的情報',
				terms: '利用規約',
				privacy: 'プライバシーポリシー'
			},
			links: {
				title: 'リンク',
				features: '機能紹介',
				future: '機能追加予定'
			}
		}
	}
};

// 現在の言語を取得（デフォルトは英語）
let currentLang = 'en';

// ブラウザの言語設定を確認
const browserLang = navigator.language.split('-')[0];
if (translations[browserLang]) {
	currentLang = browserLang;
}

// テキストを更新する関数
function updateTexts() {
	const t = translations[currentLang];

	// ナビゲーション
	const navFeatures = document.querySelector('a[href="#features"]');
	const navAbout = document.querySelector('a[href="#about"]');
	const navFuture = document.querySelector('a[href="#future"]');
	if (navFeatures) navFeatures.textContent = t.nav.features;
	if (navAbout) navAbout.textContent = t.nav.about;
	if (navFuture) navFuture.textContent = t.nav.future;

	// ヒーローセクション
	const heroSub = document.querySelector('.hero p');
	if (heroSub) heroSub.innerHTML = t.hero.subtitle.replace(/\n/g, '<br>');
	const ctaButton = document.querySelector('.cta-button');
	if (ctaButton) ctaButton.textContent = t.hero.download;

	// アプリについて
	const aboutTitle = document.querySelector('#about .section-title');
	if (aboutTitle) aboutTitle.innerHTML = `<i class="fas fa-info-circle"></i> ${t.about.title}`;
	const aboutContent = document.querySelector('.about-content');
	if (aboutContent) {
		aboutContent.innerHTML = `
			<p>${t.about.content1}</p>
			<p>${t.about.content2}</p>
			<p>${t.about.content3}</p>
		`;
	}

	// 機能
	const featuresTitle = document.querySelector('#features .section-title');
	if (featuresTitle) featuresTitle.innerHTML = `<i class="fas fa-star"></i> ${t.features.title}`;
	const featureCards = document.querySelectorAll('#features .feature-card');
	const features = [t.features.board, t.features.sync, t.features.dragdrop, t.features.ai, t.features.camera, t.features.analytics];
	featureCards.forEach((card, index) => {
		if (features[index]) {
			card.querySelector('h3').textContent = features[index].title;
			card.querySelector('p').textContent = features[index].desc;
		}
	});

	// 今後の機能
	const futureTitle = document.querySelector('#future .section-title');
	if (futureTitle) futureTitle.innerHTML = `<i class="fas fa-rocket"></i> ${t.future.title}`;
	const futureCards = document.querySelectorAll('#future .feature-card');
	const futures = [t.future.extract, t.future.theme, t.future.deps];
	futureCards.forEach((card, index) => {
		if (futures[index]) {
			card.querySelector('h3').textContent = futures[index].title;
			card.querySelector('p').textContent = futures[index].desc;
		}
	});

	// フッター
	const footerSections = document.querySelectorAll('.footer-section');
	if (footerSections.length >= 3) {
		// サポート
		footerSections[0].querySelector('h3').textContent = t.footer.support.title;
		const supportLinks = footerSections[0].querySelectorAll('a');
		if (supportLinks[0]) supportLinks[0].innerHTML = `<i class="fas fa-life-ring"></i>${t.footer.support.page}`;
		if (supportLinks[1]) supportLinks[1].innerHTML = `<i class="fas fa-bug"></i>${t.footer.support.bug}`;
		if (supportLinks[2]) supportLinks[2].innerHTML = `<i class="fas fa-lightbulb"></i>${t.footer.support.feature}`;
		// 法的情報
		footerSections[1].querySelector('h3').textContent = t.footer.legal.title;
		const legalLinks = footerSections[1].querySelectorAll('a');
		if (legalLinks[0]) legalLinks[0].innerHTML = `<i class="fas fa-file-contract"></i>${t.footer.legal.terms}`;
		if (legalLinks[1]) legalLinks[1].innerHTML = `<i class="fas fa-shield-alt"></i>${t.footer.legal.privacy}`;
		// リンク
		footerSections[2].querySelector('h3').textContent = t.footer.links.title;
		const navLinks = footerSections[2].querySelectorAll('a');
		if (navLinks[0]) navLinks[0].innerHTML = `<i class="fas fa-star"></i>${t.footer.links.features}`;
		if (navLinks[1]) navLinks[1].innerHTML = `<i class="fas fa-rocket"></i>${t.footer.links.future}`;
	}
}

// ページ読み込み時にテキストを更新
document.addEventListener('DOMContentLoaded', updateTexts);

// Intersection Observer for animations
const sections = document.querySelectorAll('.section');
const aboutContent = document.querySelector('.about-content');
const aboutImage = document.querySelector('.about-image');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		}
	});
}, {
	threshold: 0.1
});

sections.forEach(section => observer.observe(section));
if (aboutContent) observer.observe(aboutContent);
if (aboutImage) observer.observe(aboutImage);

// 付箋アニメーション
function startStickyNotesAnimation(containerId) {
	const container = document.getElementById(containerId);
	if (!container) return;
	const maxParticles = 25;
	const interval = 800;

	// 初期パーティクルを生成（画面中央から）
	const centerX = window.innerWidth / 2;
	const centerY = window.innerHeight / 2;

	for (let i = 0; i < 10; i++) {
		const note = createStickyNote(container, true, centerX, centerY);
		const progress = Math.random() * 100;
		note.style.animationDelay = `-${progress}%`;
	}

	let lastTime = 0;

	function animate(currentTime) {
		if (!lastTime) lastTime = currentTime;
		const deltaTime = currentTime - lastTime;

		if (deltaTime > interval && container.children.length < maxParticles) {
			createStickyNote(container, false);
			lastTime = currentTime;
		}

		requestAnimationFrame(animate);
	}

	requestAnimationFrame(animate);
}

function createStickyNote(container, isInitial, centerX, centerY) {
	const note = document.createElement('div');
	note.className = 'sticky-note';

	const colors = [
		'rgba(0, 222, 255, 0.3)',   // 青
		'rgba(255, 102, 153, 0.3)',  // ピンク
		'rgba(255, 217, 51, 0.3)',   // 黄色
		'rgba(153, 204, 255, 0.3)',  // 薄青
		'rgba(128, 230, 128, 0.3)'   // 緑
	];
	note.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);

	let startX, startY;
	if (isInitial) {
		// 初期パーティクルは画面中央から
		startX = centerX + (Math.random() - 0.5) * 200; // 中央から±100px
		startY = centerY + (Math.random() - 0.5) * 200;
	} else {
		// 通常のパーティクルは下から
		startX = Math.random() * window.innerWidth;
		startY = window.innerHeight + 50;
	}

	const endX = Math.random() * window.innerWidth;
	const endY = -50;

	note.style.setProperty('--startX', startX);
	note.style.setProperty('--startY', startY);
	note.style.setProperty('--endX', endX);
	note.style.setProperty('--endY', endY);

	const clipValue = 45 + Math.random() * 10;
	note.style.setProperty('--clip1', `${clipValue}% 0`);
	note.style.setProperty('--clip2', `100% ${clipValue}%`);
	note.style.setProperty('--clip3', `${clipValue}% 100%`);
	note.style.setProperty('--clip4', `0 ${clipValue}%`);

	const size = 40 + Math.random() * 40;
	note.style.width = `${size}px`;
	note.style.height = `${size}px`;

	note.style.animationDuration = `${8 + Math.random() * 7}s`;

	container.appendChild(note);

	note.addEventListener('mousemove', (e) => {
		const rect = note.getBoundingClientRect();
		const x = (e.clientX - rect.left - rect.width / 2) / rect.width * 20;
		const y = (e.clientY - rect.top - rect.height / 2) / rect.height * 20;
		note.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.2)`;
	}, { passive: true });

	note.addEventListener('mouseleave', () => {
		note.style.transform = '';
	}, { passive: true });

	note.addEventListener('click', () => {
		note.remove();
	}, { passive: true });

	note.addEventListener('animationend', () => {
		note.remove();
	}, { passive: true });

	return note;
}

// アニメーションを開始
startStickyNotesAnimation('heroNotes');
