import { Component, h } from 'preact';
import Terminal from '../../components/terminal';
import Typewriter from '../../components/terminal/typewriter';
import style from './style.scss';

class Home extends Component<
	{},
	{
		showAfter: boolean;
	}
> {
	render() {
		if (typeof document !== 'undefined') document.title = 'Home - 3qmk.xyz';
		return (
			<div class={style.home}>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/website</span>$ git pull &gt; /dev/null
				</span>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/website</span>$ tsc
				</span>
				<br />
				<span class="line">
					<span class={style.userhost}>aga@ngc</span>
					<span class={style.colon}>:</span>
					<span class={style.path}>~/website</span>$ node out/index.js
				</span>
				<Terminal
					text={[
						{
							type: 'text',
							text: "Hi, I'm aga, a Lua, JavaScript and TypeScript Developer!",
						},
						{
							type: 'newline',
						},
						{
							type: 'newline',
						},
						{ type: 'text', text: 'My github can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://github.com/acrossthesolarsystem',
						},
						{ type: 'text', text: ', my twitch can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://www.twitch.tv/playquavergame',
						},
						{ type: 'text', text: ', and my twitter ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://twitter.com/ihateosumania',
						},
						{ type: 'text', text: '.' },
						{ type: 'newline' },
						{ type: 'text', text: 'The source for this website can be found ' },
						{
							type: 'link',
							text: 'here',
							url: 'https://github.com/ilovehutao/site',
						},
						{ type: 'text', text: '.' },
					]}
					defaultInterval={35}
					done={() => {
						if (this.state.showAfter !== false)
							setTimeout(() => {
								this.setState({
									showAfter: true,
								});
							}, 500);
					}}
				/>
				{this.state.showAfter ? (
					<>
						<span class={style.userhost}>aga@ngc</span>
						<span class={style.colon}>:</span>
						<span class={style.path}>~/website</span>$
						<Typewriter text=" " interval={50} cursorFlashes={Infinity} />
					</>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default Home;
