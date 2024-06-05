import React, {useState} from 'react';
import {CodeBlock, hybrid} from "react-code-blocks";

const texts = {
    'Python' : '',
    'JAVA' : 'FROM openjdk:17-alpine\n' +
        '\n' +
        'WORKDIR /app\n' +
        '\n' +
        'ARG JAR_PATH=./build/libs\n' +
        '\n' +
        'COPY ${JAR_PATH}/<프로젝트 명>-0.0.1-SNAPSHOT.jar ./app.jar\n' +
        '\n' +
        'ENV LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib\n' +
        '\n' +
        'CMD ["java", "-jar", "./app.jar", "--spring.profiles.active=dev"]\n',
    "JS" : ''
}

const colors = {
    'Python' : '#F5347F',
    'JAVA' : '#ffd05c',
    "JS" : '#52c4e1'
}
const languages = Object.keys(texts);
const baseColor = '#767c88'

const DockerFile = () => {
    const [language , setLanguage] = useState(languages[0]);

    return (
        <div
            style={{
                width: "1000px",
                color: 'white',
            }}
        >
            <div className="box-header"
                style={{
                    display: 'flex',
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            padding: '10px 30px',
                            borderRadius: "10px 10px 0 0",
                            background: baseColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span>Docker File Example</span>
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            fontSize: "0.8em",
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                            color: '#fc4538'
                        }}
                    >
                        <span>* Docker File은 아래를 참고해주세요.</span>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        width: "fit-content",
                        alignItems: "end"
                    }}
                >
                    {
                        languages.map((lang, idx) => {
                            return (
                                <div
                                    style={{
                                        boxSizing: 'border-box',
                                        width: "100px",
                                        height: lang === language ? "50px" : "30px",
                                        textAlign: 'center',
                                        background: colors[lang],
                                        color: 'white',
                                        padding: '10px',
                                        fontSize: lang === language ? "inherit" : "0.7em",
                                        borderRadius: "10px 10px 0 0",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bolder',
                                        transition: 'height 0.2s '
                                    }}
                                    key={idx}
                                    onClick={() => {setLanguage(lang)}}
                                >
                                    {lang}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                style={{
                    background: baseColor,
                    boxSizing: 'border-box',
                    padding: '5px',
                    borderRadius: "0 0 5px 5px",
                }}
            >
                <CodeBlock
                    language="yaml"
                    text={texts[language]}
                    wrapLines={true}
                    showLineNumbers={false}
                    theme={hybrid}
                    codeBlock
                />
            </div>
        </div>
    );
};

export default DockerFile;