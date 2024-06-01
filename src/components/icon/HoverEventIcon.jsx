import React, {useState} from 'react';

const HoverEventIcon = ({src, alt}) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver = () => {
        setIsHover(true);
    }

    const handlerMouseOut = () => {
        setIsHover(false);
    }

    return (
        <div
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '24px',
                height: '24px',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handlerMouseOut}
        >
            {isHover && <span
                style={{
                    position: 'absolute',
                    background: 'rgba(0, 0, 0, 0.4)',
                    color: 'white',
                    borderRadius: '20px',
                    padding: '5px 10px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    zIndex: 1,
                    boxSizing: 'border-box',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                }}
            >
                {alt}
            </span>}
            <img
                style={{ display: 'block' }}
                width="22px"
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default HoverEventIcon;