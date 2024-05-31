import React from 'react';
import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ICON from './system-solid-22-build.json'

const BuildingIcon = () => {
    const playerRef = useRef(null);

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, []);

    return (
        <div style={{
            flex: 1,
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            <Player
                ref={playerRef}
                size={24}
                icon={ICON}
                colorize="#ffcc00"
                onComplete={() => playerRef.current?.playFromBeginning()}
            />
        </div>
    );
};

export default BuildingIcon;