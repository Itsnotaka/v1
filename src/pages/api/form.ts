import {api} from '../../server/api';
import {z} from 'zod';
import {DISCORD_WEBHOOK} from '../../server/constants';
import {NextkitException} from 'nextkit';

const schema = z.object({
	email: z.string().email(),
	comment: z.string().max(500).min(3),
});

export default api({
	async POST({req}) {
		const body = schema.parse(req.body);

		const result = await fetch(DISCORD_WEBHOOK, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				content: null,
				embeds: [
					{
						title: 'You Got A New Message!',
						url: 'https://www.kakaka.dev/',
						description: `From ${body.email}`,
						color: 11631615,
						fields: [
							{
								name: 'Message',
								value: body.comment,
							},
						],
					},
				],
			}),
		});

		if (result.status >= 400) {
			throw new NextkitException(result.status, 'Error sending notification');
		}

		if (req.headers['content-type'] === 'application/json') {
			return {
				sent: true,
			};
		}

		return {
			submitted: true,
		};
	},
});
