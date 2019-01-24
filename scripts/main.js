const PluginMoveBox = function() {
	this.init = (param) => {
		const el = document.querySelector( param );

		el.addEventListener('click', (ev) => {
			const elEvent = ev.target;
			if (!elEvent.classList.contains('live-block')) {
				return
			}

			let elEventClassL = elEvent.classList;
			
			if (elEventClassL.contains('right')) {
				if ( document.querySelector('.left')) {
					elEventClassL.add('left2');
					elEventClassL.remove('right');
				} else {
					elEventClassL.add('left');
					elEventClassL.remove('right');

					let elSibling = document.querySelector('.right2');
					elSibling.classList.add('right');
					elSibling.classList.remove('right2');
				}
			} else if ( elEventClassL.contains('left')) {
				if ( document.querySelector('.right')) {
					elEventClassL.add('right2');
					elEventClassL.remove('left');
				} else {
					elEventClassL.add('right');
					elEventClassL.remove('left');

					let elSibling = document.querySelector('.left2');
					elSibling.classList.add('left');
					elSibling.classList.remove('left2');
				}
			} else if (elEventClassL.contains('right2')) {
				elEventClassL.add('left');
				elEventClassL.remove('right2');
			} else {
				elEventClassL.add('right');
				elEventClassL.remove('left2');
			}
		});
	}
}

const plugin = new PluginMoveBox();
plugin.init('.wrapper')

