// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/api/v1/cluster', () => {
        return HttpResponse.json({
            "success": true,
            "data": [
                {
                    "clusterId" : 1,
                    "clusterName": "default",
                    "domainUrl": "https://127.0.0.1:6443",
                    "version": "1.29.1"
                },
                {
                    "clusterId" : 2,
                    "clusterName": "test1",
                    "domainUrl": "https://127.0.0.:6443",
                    "version": "1.29.0"
                },
                {
                    "clusterId" : 3,
                    "clusterName": "test2",
                    "domainUrl": "https://127.0.0.1:6443",
                    "version": "1.29.3"
                }
            ],
            "error": null
        })
    }),

    http.get('/api/v1/cluster/:clusterId/status', ({params}) => {
        const { clusterId } = params;
        return HttpResponse.json({
            "success": true,
            "data": clusterId % 2 === 0,
            "error": null
        })
    }),

    // load repositories
    http.get('/api/v1/users/github', () => {
        return HttpResponse.json({
            "success": true,
            "data": [
                {
                    "name": "2022-1-OSSP2-turning-7",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/2022-1-OSSP2-turning-7/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/2022-1-OSSP2-turning-7/commits{/sha}"
                },
                {
                    "name": "2023-1-CECD3-24-5",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/2023-1-CECD3-24-5/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/2023-1-CECD3-24-5/commits{/sha}"
                },
                {
                    "name": "2024_BEOTKKOTTHON_TEAM_23_BE",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/2024_BEOTKKOTTHON_TEAM_23_BE/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/2024_BEOTKKOTTHON_TEAM_23_BE/commits{/sha}"
                },
                {
                    "name": "2024_BEOTKKOTTHON_TEAM_23_FE",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/2024_BEOTKKOTTHON_TEAM_23_FE/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/2024_BEOTKKOTTHON_TEAM_23_FE/commits{/sha}"
                },
                {
                    "name": "ASCP",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/ASCP/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/ASCP/commits{/sha}"
                },
                {
                    "name": "djangoStudy",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/djangoStudy/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/djangoStudy/commits{/sha}"
                },
                {
                    "name": "dongkyeomjang",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/dongkyeomjang/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/dongkyeomjang/commits{/sha}"
                },
                {
                    "name": "DragonFly-Server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/DragonFly-Server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/DragonFly-Server/commits{/sha}"
                },
                {
                    "name": "github-stats-box",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/github-stats-box/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/github-stats-box/commits{/sha}"
                },
                {
                    "name": "heart-signal-server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/heart-signal-server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/heart-signal-server/commits{/sha}"
                },
                {
                    "name": "InGlo-Server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/InGlo-Server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/InGlo-Server/commits{/sha}"
                },
                {
                    "name": "Nightary-team12-AI",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/Nightary-team12-AI/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Nightary-team12-AI/commits{/sha}"
                },
                {
                    "name": "Nightary-team12-mobile",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/Nightary-team12-mobile/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Nightary-team12-mobile/commits{/sha}"
                },
                {
                    "name": "PlanIt",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/PlanIt/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/PlanIt/commits{/sha}"
                },
                {
                    "name": "productive-box",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/productive-box/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/productive-box/commits{/sha}"
                },
                {
                    "name": "StepStory-Client",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/StepStory-Client/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/StepStory-Client/commits{/sha}"
                },
                {
                    "name": "StepStory-Server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/StepStory-Server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/StepStory-Server/commits{/sha}"
                },
                {
                    "name": "teamTamagochi",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/teamTamagochi/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/teamTamagochi/commits{/sha}"
                },
                {
                    "name": "webp11",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/webp11/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/webp11/commits{/sha}"
                },
                {
                    "name": "your-beat-server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/your-beat-server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/your-beat-server/commits{/sha}"
                },
                {
                    "name": "Zolang-server",
                    "branchesUrl": "https://api.github.com/repos/dongkyeomjang/Zolang-server/branches{/branch}",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Zolang-server/commits{/sha}"
                }
            ],
            "error": null
        })
    }),

    // load branches
    http.get('/api/v1/users/github/branches', ({request}) => {
        const url = new URL(request.url);
        const repoName = url.searchParams.get('repoName');
        return HttpResponse.json({
            "success": true,
            "data": [
                {
                    "name": "dev",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Zolang-server/commits/c4dac212c2f5b7275f759321df0ce44366c81fea",
                    "commitSha": "c4dac212c2f5b7275f759321df0ce44366c81fea",
                    "isProtected": "false"
                },
                {
                    "name": "feature/BBB-41-Cluster-Nodes-api",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Zolang-server/commits/60f44a1cc9b2b9c236d1e2ce7a7c67d96d390e39",
                    "commitSha": "60f44a1cc9b2b9c236d1e2ce7a7c67d96d390e39",
                    "isProtected": "false"
                },
                {
                    "name": "feature/BBB-53-Github-Repository-Push-api",
                    "commitsUrl": "https://api.github.com/repos/dongkyeomjang/Zolang-server/commits/89d120c8844b3210415cbd61c12a442f1598a8a6",
                    "commitSha": "89d120c8844b3210415cbd61c12a442f1598a8a6",
                    "isProtected": "false"
                }
            ],
            "error": null
        })
    }),

    // push
    http.put('/api/v1/users/github/commits', async ({request}) => {
        const url = new URL(request.url);
        const repoName = url.searchParams.get('repoName');
        const branchName = url.searchParams.get('branchName');
        const data = await request.json();
        // 실패 데이터
        if (repoName.length > 15) {
            return HttpResponse.json({
                "message" : "서버 내부 오류"
            })
        } else {
            return HttpResponse.json({
                "message" : "성공"
            })
        }
    }),

    // enroll cluster
    http.post('/api/v1/cluster', async ({request}) => {
        const data = await request.json();
        console.log(data);
        return HttpResponse.json({
            "success": true,
            "data": 1,
            "error": null
        })
    }),
]