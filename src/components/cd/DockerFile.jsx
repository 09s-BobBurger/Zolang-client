import React, {useState} from 'react';
import {CodeBlock, hybrid} from "react-code-blocks";

const texts = {
    'Python' : '# requirements.txt 에 포함된 패키지들과 호환되는 이미지 사용\n' +
        'FROM python:3.11.6\n' +
        '\n' +
        'COPY requirements.txt /usr/src/app/\n' +
        '\n' +
        'RUN pip3 install -r /usr/src/app/requirements.txt\n' +
        '\n' +
        'WORKDIR /usr/src/app\n' +
        '\n' +
        'COPY . .\n' +
        '\n' +
        '# 컨테이너 내부에서 작업할 디렉토리\n' +
        'WORKDIR ./<프로젝트명>\n' +
        '\n' +
        '# 컨테이너 실행 시 실행할 명령어\n' +
        'CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]\n' +
        '\n' +
        '# 컨테이너가 실행되는 포트\n' +
        'EXPOSE 8000',
    'JAVA' : 'FROM ubuntu:20.04\n' +
        '\n' +
        'WORKDIR /app\n' +
        '\n' +
        '# DEBIAN_FRONTEND 설정을 통해 tzdata 설정 비활성화\n' +
        'ENV DEBIAN_FRONTEND=noninteractive\n' +
        '\n' +
        '# 필수 패키지 설치\n' +
        'RUN apt-get update && \\\n' +
        '    apt-get install -y openjdk-17-jdk wget unzip libstdc++6 zlib1g docker.io curl git bash zip\n' +
        '\n' +
        '# gradle로 빌드했을 경우\n' +
        'ARG JAR_PATH=./build/libs\n' +
        '\n' +
        '# maven으로 빌드했을 경우\n' +
        '# ARG JAR_PATH=./target\n' +
        '\n' +
        'COPY ${JAR_PATH}/<프로젝트명>-0.0.1-SNAPSHOT.jar ./app.jar\n' +
        '\n' +
        'ENV LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib\n' +
        '\n' +
        'CMD ["java", "-jar", "./app.jar"]',
    "JS" : '# 베이스 이미지로 node:14 사용 (필요에 따라 버전 변경 가능)\n' +
        'FROM node:14\n' +
        '\n' +
        'WORKDIR /app\n' +
        '\n' +
        '# 패키지 설치 및 빌드\n' +
        '# npm으로 빌드했을 경우\n' +
        'COPY package.json package-lock.json ./\n' +
        'RUN npm install && npm run build\n' +
        '\n' +
        '# yarn으로 빌드했을 경우\n' +
        '# COPY package.json yarn.lock ./\n' +
        '# RUN yarn install && yarn build\n' +
        '\n' +
        '# 빌드된 파일을 /app/build로 복사\n' +
        'COPY . .\n' +
        '\n' +
        '# 포트 설정 (필요에 따라 변경 가능)\n' +
        'EXPOSE 3000\n' +
        '\n' +
        '# 애플리케이션 실행\n' +
        '# npm으로 빌드했을 경우\n' +
        'CMD ["npm", "start"]\n' +
        '\n' +
        '# yarn으로 빌드했을 경우\n' +
        '# [“yarn”, “start”]'
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
                    fontSize:'1rem'
                }}
            >
                <CodeBlock
                    language="dockerfile"
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