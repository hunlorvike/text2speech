import { createAudioFileFromText } from "./elevenlabs";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the text: ', (text) => {
    rl.question('Please enter the filename: ', (filename) => {
        createAudioFileFromText(text, filename);
        rl.close();
    });
});
