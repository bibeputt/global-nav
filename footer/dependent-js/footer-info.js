/* Global Footer: Tooling
/* ========================================================================== */

import { $assign as $ } from 'esri-global-shared';

/* Global Footer
/* ========================================================================== */

export default (data, prefix) => {
	return $('nav', { class: `${prefix}-info`, aria: { label: data.label } },
		$('ul', { class: `${prefix}-info-list`, role: 'presentation' },
			...data.menu.map(
				(item, index) => $('li', { class: `${prefix}-info-item`, id: `${prefix}-info-link--${index}` },
					$('a', { class: `${prefix}-info-link`, href: item.href },
						item.label
					)
				)
			)
		)
	);
};
