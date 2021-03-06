import Command from '../../structures/Command';
import Mees from '../../structures/Client';
import { Message } from 'discord.js';

export default class Resume extends Command {
    constructor(client: Mees) {
        super(client, {
            name: 'resume',
            description: 'Resume the music',
            group: 'Music',
            examples: ['resume']
        });
    }

    async run(message: Message) {
        if (!message.member?.voice.channel) {
            message.channel.send(`You're not in voice channel!`);
        };

        const player = this.client.manager?.players.get(message.guildId as string);
        if (!player) return message.channel.send(`There is no music play at this server!`);
        if (!player?.paused) return message.channel.send(`Music already resumed!`);

        player?.pause(!player?.paused);
        return message.channel.send(`Resume the music!`);
    }
}