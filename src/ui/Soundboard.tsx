import { useState } from 'react'
import bruh from './../assets/sounds/bruh.mp3'
import after from './../assets/sounds/after.wav'
import better from './../assets/sounds/better.wav'
import do_it from './../assets/sounds/do_it.wav'
import ever from './../assets/sounds/ever.wav'
import faster from './../assets/sounds/faster.wav'
import harder from './../assets/sounds/harder.wav'

import './Soundboard.css'

interface Sound {
    label: string,
    sound: string,
    background: string,
}
export const Soundboard = () => {
    const [image, setImage] = useState('')
    const sounds: Sound[] = [
        {
            label: 'After',
            sound: after,
            background: "https://resource.flexclip.com/pages/learn-center-old/make-before-and-after-meme/before-and-after-meme-engineering-school.webp"
        },
        {
            label: 'Better',
            sound: better,
            background: "https://carminemastropierro.com/wp-content/uploads/2019/11/Frodo-brain-meme.jpg.webp"
        },
        {
            label: 'Do it',
            sound: do_it,
            background: "https://i.pinimg.com/474x/47/95/38/4795386f38b5d384544ac95acc5cedad.jpg"
        },
        {
            label: 'Ever',
            sound: ever,
            background: "https://i0.wp.com/startgoingplaces.com/wp-content/uploads/2017/09/worst-meme-ever-comic-book-guy.jpeg?fit=300%2C222&ssl=1"
        },
        {
            label: 'Faster',
            sound: faster,
            background: "https://www.alphapaw.com/wp-content/uploads/2021/01/photo_2021-01-16_17-08-00.jpg"
        },
        {
            label: 'Harder',
            sound: harder,
            background: "https://blog.xoxoday.com/content/images/2024/04/working-hard-meme-3.webp"
        },
        {
            label: 'Bruh',
            sound: bruh,
            background: "https://a.pinatafarm.com/1280x720/c4501f5320/bruh-21312533edad132bf036faff5425fd55-meme.jpeg"
        },

    ]

    const playSound = (soundId: string) => {
        const audio = document.getElementById(soundId) as HTMLAudioElement;
        const soundObj = sounds.find(s => s.label === soundId);

        if (soundObj?.background && audio) {
            setImage(soundObj.background)
            audio.play();
        }
    }

    return (
        <>
            <section className='soundboard-section'>
                <img src={`${image}`} alt="" />
                <div className='sounds-container'>
                    {sounds.map((s, idx) => {
                        return (
                            <>
                                <div key={idx}>
                                    <button className='button' data-id={s.label} onClick={() => playSound(s.label)}>{s.label}</button>
                                    <audio id={s.label} src={s.sound}></audio>
                                </div>
                            </>
                        )
                    })}
                </div>
            </section>
        </>
    )

}