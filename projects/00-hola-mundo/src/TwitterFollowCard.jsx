import { useState } from 'react';

export function TwitterFollowCard({usernName, name, initialIsFollowing = false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const imageSrc = `https://unavatar.io/${usernName}`;

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className="tw-follow-card">
        <header className="tw-follow-card-header">
            <img className="tw-follow-card-avatar" 
            alt="El avatar de nestorsan77" 
            src={imageSrc}/>
            <div className="tw-follow-card-info">
                <strong className="tw-follow-card-infoUserName">{name}</strong>
                <span>@{usernName}</span>
            </div>
        </header>
        <aside>
            <button className="tw-follow-card-button" onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}