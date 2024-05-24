// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

const baseURL =  'https://kcs.zolang.site';

export const handlers = [
    http.get(`${baseURL}/api/v1/cluster`, () => {
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

    http.get(`${baseURL}/api/v1/cluster/:clusterId/status`, ({params}) => {
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

    // get pods of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/pods`, async ({params}) => {
        const { clusterId } = params;
        return HttpResponse.json({
            "success": true,
            "data": {
                "totalUsage": [
                    {
                        "time": "3:58",
                        "cpuUsage": 0.592,
                        "memoryUsage": 2044420096
                    },
                    {
                        "time": "3:59",
                        "cpuUsage": 0.586,
                        "memoryUsage": 1844912128
                    },
                    {
                        "time": "4:00",
                        "cpuUsage": 0.726,
                        "memoryUsage": 2045956096
                    },
                    {
                        "time": "4:01",
                        "cpuUsage": 0.558,
                        "memoryUsage": 2053005312
                    },
                    {
                        "time": "4:02",
                        "cpuUsage": 0.523,
                        "memoryUsage": 1850400768
                    },
                    {
                        "time": "4:03",
                        "cpuUsage": 0.532,
                        "memoryUsage": 2035978240
                    },
                    {
                        "time": "4:04",
                        "cpuUsage": 0.687,
                        "memoryUsage": 2144362496
                    },
                    {
                        "time": "4:05",
                        "cpuUsage": 0.595,
                        "memoryUsage": 2039218176
                    },
                    {
                        "time": "4:06",
                        "cpuUsage": 0.717,
                        "memoryUsage": 2032902144
                    },
                    {
                        "time": "4:07",
                        "cpuUsage": 0.62,
                        "memoryUsage": 2042241024
                    },
                    {
                        "time": "4:08",
                        "cpuUsage": 0.618,
                        "memoryUsage": 2033393664
                    },
                    {
                        "time": "4:09",
                        "cpuUsage": 0.532,
                        "memoryUsage": 2038845440
                    },
                    {
                        "time": "4:10",
                        "cpuUsage": 0.665,
                        "memoryUsage": 2063880192
                    }
                ],
                "pods": [
                    {
                        "name": "nginx-ingress-microk8s-controller-4n4rq",
                        "namespace": "ingress",
                        "images": [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                        ],
                        "labels": {
                            "controller-revision-hash": "7466d5f4cb",
                            "name": "nginx-ingress-microk8s",
                            "pod-template-generation": "10"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            21
                        ],
                        "usage": {
                            "time": "4:11",
                            "cpuUsage": 0.002,
                            "memoryUsage": 86224896
                        },
                        "metrics": [
                            {
                                "time": "3:58",
                                "cpuUsage": 0.002,
                                "memoryUsage": 82481152
                            },
                            {
                                "time": "3:59",
                                "cpuUsage": 0.002,
                                "memoryUsage": 82137088
                            },
                            {
                                "time": "4:00",
                                "cpuUsage": 0.001,
                                "memoryUsage": 82149376
                            },
                            {
                                "time": "4:01",
                                "cpuUsage": 0.002,
                                "memoryUsage": 86355968
                            },
                            {
                                "time": "4:02",
                                "cpuUsage": 0.003,
                                "memoryUsage": 86466560
                            },
                            {
                                "time": "4:03",
                                "cpuUsage": 0.003,
                                "memoryUsage": 86458368
                            },
                            {
                                "time": "4:04",
                                "cpuUsage": 0.003,
                                "memoryUsage": 86507520
                            },
                            {
                                "time": "4:05",
                                "cpuUsage": 0.002,
                                "memoryUsage": 86614016
                            },
                            {
                                "time": "4:06",
                                "cpuUsage": 0.001,
                                "memoryUsage": 84226048
                            },
                            {
                                "time": "4:07",
                                "cpuUsage": 0.002,
                                "memoryUsage": 86355968
                            },
                            {
                                "time": "4:08",
                                "cpuUsage": 0.001,
                                "memoryUsage": 84217856
                            },
                            {
                                "time": "4:09",
                                "cpuUsage": 0.002,
                                "memoryUsage": 86224896
                            },
                            {
                                "time": "4:10",
                                "cpuUsage": 0.002,
                                "memoryUsage": 84217856
                            }
                        ],
                        "age": "22 day",
                        "creationDateTime": "2024. 04. 26. 오후 15:53:49"
                    }
                ],
                "error": null
            }
        })
    }),

    // get pods of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/pods/namespace`, async ({params, request}) => {
        const { clusterId } = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json({
            "success": true,
            "data": {
                "totalUsage": [
                    {
                        "time": "3:59",
                        "cpuUsage": 0.004,
                        "memoryUsage": 141967360
                    },
                    {
                        "time": "4:00",
                        "cpuUsage": 0.002,
                        "memoryUsage": 141967360
                    },
                    {
                        "time": "4:01",
                        "cpuUsage": 0.002,
                        "memoryUsage": 141967360
                    },
                    {
                        "time": "4:02",
                        "cpuUsage": 0.002,
                        "memoryUsage": 141967360
                    },
                    {
                        "time": "4:03",
                        "cpuUsage": 0.002,
                        "memoryUsage": 124542976
                    },
                    {
                        "time": "4:04",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:05",
                        "cpuUsage": 0.004,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:06",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127156224
                    },
                    {
                        "time": "4:07",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:08",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:09",
                        "cpuUsage": 0.004,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:10",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127148032
                    },
                    {
                        "time": "4:11",
                        "cpuUsage": 0.002,
                        "memoryUsage": 127148032
                    }
                ],
                "pods": [
                    {
                        "name": "grafana-657c7689bd-hxq6d",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "node": "instance-20230123-2111",
                        "status": "Running",
                        "restartCount": [
                            3
                        ],
                        "usage": {
                            "time": "4:12",
                            "cpuUsage": 0.002,
                            "memoryUsage": 63627264
                        },
                        "metrics": [
                            {
                                "time": "3:59",
                                "cpuUsage": 0.002,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:00",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:01",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:02",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:03",
                                "cpuUsage": 0.001,
                                "memoryUsage": 62271488
                            },
                            {
                                "time": "4:04",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:05",
                                "cpuUsage": 0.002,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:06",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63578112
                            },
                            {
                                "time": "4:07",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:08",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:09",
                                "cpuUsage": 0.002,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:10",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:11",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            }
                        ],
                        "age": "2 day",
                        "creationDateTime": "2024. 05. 16. 오전 06:51:25"
                    },
                    {
                        "name": "prometheus-server-0",
                        "namespace": "monitoring",
                        "images": [
                            "prom/prometheus:latest"
                        ],
                        "labels": {
                            "app": "prometheus",
                            "apps.kubernetes.io/pod-index": "0",
                            "controller-revision-hash": "prometheus-server-566fc6784b",
                            "statefulset.kubernetes.io/pod-name": "prometheus-server-0"
                        },
                        "node": "instance-20230502-0040",
                        "status": "Running",
                        "restartCount": [
                            0
                        ],
                        "usage": {
                            "time": "4:12",
                            "cpuUsage": 0.001,
                            "memoryUsage": 36753408
                        },
                        "metrics": [
                            {
                                "time": "3:59",
                                "cpuUsage": 0.002,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:00",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:01",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:02",
                                "cpuUsage": 0.001,
                                "memoryUsage": 70983680
                            },
                            {
                                "time": "4:03",
                                "cpuUsage": 0.001,
                                "memoryUsage": 62271488
                            },
                            {
                                "time": "4:04",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:05",
                                "cpuUsage": 0.002,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:06",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63578112
                            },
                            {
                                "time": "4:07",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:08",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:09",
                                "cpuUsage": 0.002,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:10",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            },
                            {
                                "time": "4:11",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63574016
                            }
                        ],
                        "age": "2 day",
                        "creationDateTime": "2024. 05. 16. 오후 13:40:06"
                    }
                ]
            },
            "error": null
        })
    }),

    // get pods of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/pods/:podName`, async ({params, request}) => {
        const { clusterId, podName } = params;
        return HttpResponse.json({
            "success": true,
            "data": {
                "metrics": [
                    {
                        "time": "21:21",
                        "cpuUsage": 0.002,
                        "memoryUsage": 87199744
                    },
                    {
                        "time": "21:22",
                        "cpuUsage": 0.002,
                        "memoryUsage": 87212032
                    },
                    {
                        "time": "21:23",
                        "cpuUsage": 0.003,
                        "memoryUsage": 87187456
                    },
                    {
                        "time": "21:24",
                        "cpuUsage": 0.002,
                        "memoryUsage": 87187456
                    },
                    {
                        "time": "21:25",
                        "cpuUsage": 0.002,
                        "memoryUsage": 87179264
                    },
                    {
                        "time": "21:26",
                        "cpuUsage": 0.002,
                        "memoryUsage": 86937600
                    },
                    {
                        "time": "21:27",
                        "cpuUsage": 0.002,
                        "memoryUsage": 76734464
                    },
                    {
                        "time": "21:28",
                        "cpuUsage": 0.002,
                        "memoryUsage": 76693504
                    },
                    {
                        "time": "21:29",
                        "cpuUsage": 0.001,
                        "memoryUsage": 76566528
                    },
                    {
                        "time": "21:30",
                        "cpuUsage": 0.002,
                        "memoryUsage": 77930496
                    },
                    {
                        "time": "21:31",
                        "cpuUsage": 0.001,
                        "memoryUsage": 77881344
                    },
                    {
                        "time": "21:32",
                        "cpuUsage": 0.002,
                        "memoryUsage": 77893632
                    },
                    {
                        "time": "21:33",
                        "cpuUsage": 0.003,
                        "memoryUsage": 79167488
                    }
                ],
                "metadata": {
                    "name": "nginx-ingress-microk8s-controller-4n4rq",
                    "namespace": "ingress",
                    "creationDate": "2024 .04 .26 .",
                    "creationTime": "오후 03:53:49",
                    "age": "24 day",
                    "uid": "f7971391-2a65-4b5b-9b77-62983090a475",
                    "labels": {
                        "controller-revision-hash": "7466d5f4cb",
                        "name": "nginx-ingress-microk8s",
                        "pod-template-generation": "10"
                    },
                    "annotations": {
                        "cni.projectcalico.org/containerID": "e351b19c3edcaabc448f1c0c734b112b307f8239b15570ea9ac2946cc2011afc",
                        "cni.projectcalico.org/podIP": "10.1.49.138/32",
                        "cni.projectcalico.org/podIPs": "10.1.49.138/32"
                    }
                },
                "resource": {
                    "node": "instance-20230502-0040",
                    "status": "Running",
                    "ip": "10.1.49.138",
                    "priorityClass": "Guaranteed",
                    "restartCount": 21,
                    "serviceAccount": "nginx-ingress-microk8s-serviceaccount",
                    "imagePullSecret": null
                },
                "conditions": [
                    {
                        "type": "PodReadyToStartContainers",
                        "status": "True",
                        "lastProbeTime": null,
                        "lastTransitionTime": "4 day",
                        "reason": null,
                        "message": null
                    },
                    {
                        "type": "Initialized",
                        "status": "True",
                        "lastProbeTime": null,
                        "lastTransitionTime": "24 day",
                        "reason": null,
                        "message": null
                    },
                    {
                        "type": "Ready",
                        "status": "True",
                        "lastProbeTime": null,
                        "lastTransitionTime": "3 day",
                        "reason": null,
                        "message": null
                    },
                    {
                        "type": "ContainersReady",
                        "status": "True",
                        "lastProbeTime": null,
                        "lastTransitionTime": "3 day",
                        "reason": null,
                        "message": null
                    },
                    {
                        "type": "PodScheduled",
                        "status": "True",
                        "lastProbeTime": null,
                        "lastTransitionTime": "24 day",
                        "reason": null,
                        "message": null
                    }
                ],
                "controlled": {
                    "name": "nginx-ingress-microk8s-controller",
                    "kind": "DaemonSet",
                    "replicas": 2,
                    "readyReplicas": 2,
                    "age": "1 year",
                    "labels": {
                        "microk8s-application": "nginx-ingress-microk8s"
                    },
                    "images": [
                        "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                    ]
                },
                "persistentVolumeClaims": [],
                "container": {
                    "isRunning": true,
                    "name": "nginx-ingress-microk8s",
                    "image": "registry.k8s.io/ingress-nginx/controller:v1.5.1",
                    "ready": true,
                    "started": true,
                    "startedAt": "2024. 05. 16. 오후 13:43:57",
                    "env": [
                        {
                            "name": "POD_NAME",
                            "value": null
                        },
                        {
                            "name": "POD_NAMESPACE",
                            "value": null
                        }
                    ],
                    "factor": [
                        "/nginx-ingress-controller",
                        "--configmap=$(POD_NAMESPACE)/nginx-load-balancer-microk8s-conf",
                        "--tcp-services-configmap=$(POD_NAMESPACE)/nginx-ingress-tcp-microk8s-conf",
                        "--udp-services-configmap=$(POD_NAMESPACE)/nginx-ingress-udp-microk8s-conf",
                        "--ingress-class=public",
                        " ",
                        "--publish-status-address=127.0.0.1",
                        "--default-ssl-certificate=kube-system/star-jayden-bin-kro-kr"
                    ],
                    "mount": [
                        {
                            "name": "kube-api-access-pd6sp",
                            "readOnly": true,
                            "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
                            "subPath": null,
                            "sourceType": "Projected",
                            "sourceName": null
                        }
                    ],
                    "securityContext": {
                        "runAsUser": 101,
                        "addedCapabilities": [
                            "NET_BIND_SERVICE"
                        ],
                        "dropCapabilities": [
                            "ALL"
                        ],
                        "allowPrivilegeEscalation": null,
                        "privileged": null,
                        "procMount": null,
                        "readOnlyRootFilesystem": null,
                        "runAsGroup": null,
                        "runAsNonRoot": null,
                        "seccompProfile": null,
                        "windowsOptions": null
                    }
                }
            },
            "error": null
        })
    }),

    // get services of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/service`, ({params}) => {
        const {clusterId} = params
        return HttpResponse.json({
                "success": true,
                "data": [
                    {
                        "serviceName": "cert-manager",
                        "serviceNamespace": "cert-manager",
                        "serviceLabels": {
                            "app": "cert-manager",
                            "app.kubernetes.io/component": "controller",
                            "app.kubernetes.io/instance": "cert-manager",
                            "app.kubernetes.io/name": "cert-manager",
                            "app.kubernetes.io/version": "v1.9.1"
                        },
                        "serviceClusterIP": "10.100.158.205",
                        "serviceExternalIP": null,
                        "servicePort": [
                            9402
                        ],
                        "serviceAge": "5 day"
                    },
                    {
                        "serviceName": "cert-manager-webhook",
                        "serviceNamespace": "cert-manager",
                        "serviceLabels": {
                            "app": "webhook",
                            "app.kubernetes.io/component": "webhook",
                            "app.kubernetes.io/instance": "cert-manager",
                            "app.kubernetes.io/name": "webhook",
                            "app.kubernetes.io/version": "v1.9.1"
                        },
                        "serviceClusterIP": "10.100.248.108",
                        "serviceExternalIP": null,
                        "servicePort": [
                            443
                        ],
                        "serviceAge": "5 day"
                    },
                    {
                        "serviceName": "kubernetes",
                        "serviceNamespace": "default",
                        "serviceLabels": {
                            "component": "apiserver",
                            "provider": "kubernetes"
                        },
                        "serviceClusterIP": "10.100.0.1",
                        "serviceExternalIP": null,
                        "servicePort": [
                            443
                        ],
                        "serviceAge": "11 day"
                    },
                    {
                        "serviceName": "my-ingress-ingress-nginx-controller",
                        "serviceNamespace": "default",
                        "serviceLabels": {
                            "app.kubernetes.io/component": "controller",
                            "app.kubernetes.io/instance": "my-ingress",
                            "app.kubernetes.io/managed-by": "Helm",
                            "app.kubernetes.io/name": "ingress-nginx",
                            "app.kubernetes.io/part-of": "ingress-nginx",
                            "app.kubernetes.io/version": "1.10.1",
                            "helm.sh/chart": "ingress-nginx-4.10.1"
                        },
                        "serviceClusterIP": "10.100.157.138",
                        "serviceExternalIP": null,
                        "servicePort": [
                            80,
                            443
                        ],
                        "serviceAge": "5 day"
                    },
                    {
                        "serviceName": "my-ingress-ingress-nginx-controller-admission",
                        "serviceNamespace": "default",
                        "serviceLabels": {
                            "app.kubernetes.io/component": "controller",
                            "app.kubernetes.io/instance": "my-ingress",
                            "app.kubernetes.io/managed-by": "Helm",
                            "app.kubernetes.io/name": "ingress-nginx",
                            "app.kubernetes.io/part-of": "ingress-nginx",
                            "app.kubernetes.io/version": "1.10.1",
                            "helm.sh/chart": "ingress-nginx-4.10.1"
                        },
                        "serviceClusterIP": "10.100.227.108",
                        "serviceExternalIP": null,
                        "servicePort": [
                            443
                        ],
                        "serviceAge": "5 day"
                    },
                    {
                        "serviceName": "redis",
                        "serviceNamespace": "default",
                        "serviceLabels": {},
                        "serviceClusterIP": "10.100.231.130",
                        "serviceExternalIP": null,
                        "servicePort": [
                            6379
                        ],
                        "serviceAge": "4 day"
                    },
                    {
                        "serviceName": "zolang-service",
                        "serviceNamespace": "default",
                        "serviceLabels": {},
                        "serviceClusterIP": "10.100.223.86",
                        "serviceExternalIP": null,
                        "servicePort": [
                            80
                        ],
                        "serviceAge": "5 day"
                    },
                    {
                        "serviceName": "kube-dns",
                        "serviceNamespace": "kube-system",
                        "serviceLabels": {
                            "eks.amazonaws.com/component": "kube-dns",
                            "k8s-app": "kube-dns",
                            "kubernetes.io/cluster-service": "true",
                            "kubernetes.io/name": "CoreDNS"
                        },
                        "serviceClusterIP": "10.100.0.10",
                        "serviceExternalIP": null,
                        "servicePort": [
                            53,
                            53,
                            9153
                        ],
                        "serviceAge": "11 day"
                    },
                    {
                        "serviceName": "dashboard-metrics-scraper",
                        "serviceNamespace": "kubernetes-dashboard",
                        "serviceLabels": {
                            "k8s-app": "dashboard-metrics-scraper"
                        },
                        "serviceClusterIP": "10.100.49.90",
                        "serviceExternalIP": null,
                        "servicePort": [
                            8000
                        ],
                        "serviceAge": "4 day"
                    },
                    {
                        "serviceName": "kubernetes-dashboard",
                        "serviceNamespace": "kubernetes-dashboard",
                        "serviceLabels": {
                            "k8s-app": "kubernetes-dashboard"
                        },
                        "serviceClusterIP": "10.100.68.37",
                        "serviceExternalIP": null,
                        "servicePort": [
                            443
                        ],
                        "serviceAge": "4 day"
                    }
                ],
                "error": null
            }
        )
    }),

    // get service detail of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/service/:serviceName`, ({params}) => {
        const {clusterId, serviceName} = params;
        return HttpResponse.json({
                "success": true,
                "data": [
                    {
                        "metaData": {
                            "serviceTimeStamp": "2024-05-16 06:58:22",
                            "serviceAge": "5 day",
                            "serviceName": "cert-manager",
                            "serviceNamespace": "cert-manager",
                            "serviceLabels": {
                                "app": "cert-manager",
                                "app.kubernetes.io/component": "controller",
                                "app.kubernetes.io/instance": "cert-manager",
                                "app.kubernetes.io/name": "cert-manager",
                                "app.kubernetes.io/version": "v1.9.1"
                            },
                            "serviceAnnotations": {
                                "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"labels\":{\"app\":\"cert-manager\",\"app.kubernetes.io/component\":\"controller\",\"app.kubernetes.io/instance\":\"cert-manager\",\"app.kubernetes.io/name\":\"cert-manager\",\"app.kubernetes.io/version\":\"v1.9.1\"},\"name\":\"cert-manager\",\"namespace\":\"cert-manager\"},\"spec\":{\"ports\":[{\"name\":\"tcp-prometheus-servicemonitor\",\"port\":9402,\"protocol\":\"TCP\",\"targetPort\":9402}],\"selector\":{\"app.kubernetes.io/component\":\"controller\",\"app.kubernetes.io/instance\":\"cert-manager\",\"app.kubernetes.io/name\":\"cert-manager\"},\"type\":\"ClusterIP\"}}\n"
                            }
                        },
                        "spec": {
                            "servicePort": [
                                9402
                            ],
                            "serviceSelector": {
                                "app.kubernetes.io/component": "controller",
                                "app.kubernetes.io/instance": "cert-manager",
                                "app.kubernetes.io/name": "cert-manager"
                            },
                            "serviceType": "ClusterIP",
                            "serviceClusterIp": "10.100.158.205",
                            "serviceIpFamiles": [
                                "IPv4"
                            ],
                            "serviceIpFamilyPolicy": "SingleStack"
                        },
                        "status": {
                            "serviceStatusLoad": null,
                            "serviceStatus": null
                        }
                    }
                ],
                "error": null
            }
        )
    }),

    // get deployments of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/deployments`, ({params}) => {
        const {clusterId} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "jenkins",
                        "namespace": "jenkins",
                        "images": [
                            "ghcr.io/konempty/jenkins-docker-image:latest"
                        ],
                        "labels": {},
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 01. 28. 오후 12:57:35",
                        "age": "3 month"
                    },
                    {
                        "name": "calico-kube-controllers",
                        "namespace": "kube-system",
                        "images": [
                            "docker.io/calico/kube-controllers:v3.23.5"
                        ],
                        "labels": {
                            "k8s-app": "calico-kube-controllers"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 01. 오후 14:09:50",
                        "age": "1 year"
                    },
                    {
                        "name": "coredns",
                        "namespace": "kube-system",
                        "images": [
                            "coredns/coredns:1.9.3"
                        ],
                        "labels": {
                            "addonmanager.kubernetes.io/mode": "Reconcile",
                            "k8s-app": "kube-dns",
                            "kubernetes.io/cluster-service": "true",
                            "kubernetes.io/name": "CoreDNS"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 02. 오전 11:27:43",
                        "age": "1 year"
                    },
                    {
                        "name": "dashboard-metrics-scraper",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/metrics-scraper:v1.0.8"
                        ],
                        "labels": {
                            "k8s-app": "dashboard-metrics-scraper"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 06. 오전 06:04:58",
                        "age": "1 year"
                    },
                    {
                        "name": "kubernetes-dashboard",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 06. 오전 06:04:58",
                        "age": "1 year"
                    },
                    {
                        "name": "metrics-server",
                        "namespace": "kube-system",
                        "images": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 03. 오전 07:21:30",
                        "age": "1 year"
                    },
                    {
                        "name": "grafana",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 02. 25. 오후 13:45:53",
                        "age": "2 month"
                    }
                ],
                "error": null
            }
        )
    }),

    // get deployments of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/deployments/namespace`, ({params, request}) => {
        const {clusterId} = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "calico-kube-controllers",
                        "namespace": "kube-system",
                        "images": [
                            "docker.io/calico/kube-controllers:v3.23.5"
                        ],
                        "labels": {
                            "k8s-app": "calico-kube-controllers"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 01. 오후 14:09:50",
                        "age": "1 year"
                    },
                    {
                        "name": "coredns",
                        "namespace": "kube-system",
                        "images": [
                            "coredns/coredns:1.9.3"
                        ],
                        "labels": {
                            "addonmanager.kubernetes.io/mode": "Reconcile",
                            "k8s-app": "kube-dns",
                            "kubernetes.io/cluster-service": "true",
                            "kubernetes.io/name": "CoreDNS"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 02. 오전 11:27:43",
                        "age": "1 year"
                    },
                    {
                        "name": "dashboard-metrics-scraper",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/metrics-scraper:v1.0.8"
                        ],
                        "labels": {
                            "k8s-app": "dashboard-metrics-scraper"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 06. 오전 06:04:58",
                        "age": "1 year"
                    },
                    {
                        "name": "kubernetes-dashboard",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 06. 오전 06:04:58",
                        "age": "1 year"
                    },
                    {
                        "name": "metrics-server",
                        "namespace": "kube-system",
                        "images": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 03. 오전 07:21:30",
                        "age": "1 year"
                    }
                ],
                "error": null
            }
        )
    }),

    // get deployment Detail of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/deployments/:deploymentName`, ({params}) => {
        const {clusterId, deploymentName} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": {
                    "metadata": {
                        "name": "jenkins",
                        "namespace": "jenkins",
                        "creationDate": "2024 .01 .28 .",
                        "creationTime": "오후 12:57:35",
                        "age": "3 month",
                        "uid": "e1ba3755-d1fb-4a42-8a9d-5af0cbebdbd9",
                        "labels": {},
                        "annotations": {
                            "deployment.kubernetes.io/revision": "13",
                            "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"apps/v1\",\"kind\":\"Deployment\",\"metadata\":{\"annotations\":{},\"name\":\"jenkins\",\"namespace\":\"jenkins\"},\"spec\":{\"replicas\":1,\"selector\":{\"matchLabels\":{\"app\":\"jenkins\"}},\"template\":{\"metadata\":{\"labels\":{\"app\":\"jenkins\"}},\"spec\":{\"containers\":[{\"image\":\"ghcr.io/konempty/jenkins-docker-image:latest\",\"name\":\"jenkins\",\"ports\":[{\"containerPort\":8080,\"name\":\"http-port\"}],\"volumeMounts\":[{\"mountPath\":\"/var/jenkins_home\",\"name\":\"jenkins-vol\"},{\"mountPath\":\"/var/run/docker.sock\",\"name\":\"docker-socket\"}]}],\"imagePullSecrets\":[{\"name\":\"ghcr-login-secret\"}],\"nodeSelector\":{\"kubernetes.io/hostname\":\"instance-20230426-2354\"},\"volumes\":[{\"hostPath\":{\"path\":\"/var/jenkins_volume\",\"type\":\"DirectoryOrCreate\"},\"name\":\"jenkins-vol\"},{\"hostPath\":{\"path\":\"/var/run/docker.sock\"},\"name\":\"docker-socket\"}]}}}}\n"
                        }
                    },
                    "resource": {
                        "strategy": "RollingUpdate",
                        "minimumPreparationTime": 0,
                        "revisionHistoryLimit": 10,
                        "selector": {
                            "app": "jenkins"
                        }
                    },
                    "rollingUpdateStrategy": {
                        "maxSurge": "25%",
                        "maxUnavailable": "25%"
                    },
                    "podConditions": {
                        "updatedReplicas": 1,
                        "totalReplicas": 1,
                        "availableReplicas": 1
                    },
                    "condition": [
                        {
                            "type": "Available",
                            "status": "True",
                            "lastUpdateTime": "2024. 05. 19. 오후 13:14:14",
                            "lastUpdateAge": "3 day",
                            "lastTransitionTime": "2024. 05. 19. 오후 13:14:14",
                            "lastTransitionAge": "3 day",
                            "reason": "MinimumReplicasAvailable",
                            "message": "Deployment has minimum availability."
                        },
                        {
                            "type": "Progressing",
                            "status": "True",
                            "lastUpdateTime": "2024. 05. 19. 오후 13:30:43",
                            "lastUpdateAge": "3 day",
                            "lastTransitionTime": "2024. 01. 28. 오후 12:57:35",
                            "lastTransitionAge": "3 month",
                            "reason": "NewReplicaSetAvailable",
                            "message": "ReplicaSet \"jenkins-696ccd6ffc\" has successfully progressed."
                        }
                    ]
                },
                "error": null
            }
        )
    }),

    // get daemons of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/daemons`, ({params}) => {
        const {clusterId} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "nginx-ingress-microk8s-controller",
                        "namespace": "ingress",
                        "images": [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                        ],
                        "labels": {
                            "microk8s-application": "nginx-ingress-microk8s"
                        },
                        "replicas": 2,
                        "readyReplicas": 2,
                        "creationDateTime": "2023. 05. 03. 오전 08:35:01",
                        "age": "1 year"
                    },
                    {
                        "name": "calico-node",
                        "namespace": "kube-system",
                        "images": [
                            "docker.io/calico/node:v3.23.5"
                        ],
                        "labels": {
                            "k8s-app": "calico-node"
                        },
                        "replicas": 4,
                        "readyReplicas": 4,
                        "creationDateTime": "2023. 05. 01. 오후 14:09:48",
                        "age": "1 year"
                    }
                ],
                "error": null
            }
        )
    }),

    // get daemons of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/daemons/namespace`, ({params, request}) => {
        const {clusterId} = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "nginx-ingress-microk8s-controller",
                        "namespace": "ingress",
                        "images": [
                            "registry.k8s.io/ingress-nginx/controller:v1.5.1"
                        ],
                        "labels": {
                            "microk8s-application": "nginx-ingress-microk8s"
                        },
                        "replicas": 2,
                        "readyReplicas": 2,
                        "creationDateTime": "2023. 05. 03. 오전 08:35:01",
                        "age": "1 year"
                    }
                ],
                "error": null
            }
        )
    }),

    // get daemon Detail of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/daemons/:daemonsSetName`, ({params}) => {
        const {clusterId, deploymentName} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": {
                    "metadata": {
                        "name": "calico-node",
                        "namespace": "kube-system",
                        "creationDate": "2023 .05 .01 .",
                        "creationTime": "오후 02:09:48",
                        "age": "1 year",
                        "uid": "9ecda8ca-ac53-4946-8a5b-49812d293b15",
                        "labels": {
                            "k8s-app": "calico-node"
                        },
                        "annotations": {
                            "deprecated.daemonset.template.generation": "25",
                            "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"apps/v1\",\"kind\":\"DaemonSet\",\"metadata\":{\"annotations\":{},\"labels\":{\"k8s-app\":\"calico-node\"},\"name\":\"calico-node\",\"namespace\":\"kube-system\"},\"spec\":{\"selector\":{\"matchLabels\":{\"k8s-app\":\"calico-node\"}},\"template\":{\"metadata\":{\"labels\":{\"k8s-app\":\"calico-node\"}},\"spec\":{\"containers\":[{\"env\":[{\"name\":\"DATASTORE_TYPE\",\"value\":\"kubernetes\"},{\"name\":\"WAIT_FOR_DATASTORE\",\"value\":\"true\"},{\"name\":\"NODENAME\",\"valueFrom\":{\"fieldRef\":{\"fieldPath\":\"spec.nodeName\"}}},{\"name\":\"CALICO_NETWORKING_BACKEND\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"calico_backend\",\"name\":\"calico-config\"}}},{\"name\":\"CLUSTER_TYPE\",\"value\":\"k8s,bgp\"},{\"name\":\"IP\",\"value\":\"autodetect\"},{\"name\":\"IP_AUTODETECTION_METHOD\",\"value\":\"can-reach=10.0.0.221\"},{\"name\":\"CALICO_IPV4POOL_VXLAN\",\"value\":\"Always\"},{\"name\":\"CALICO_IPV6POOL_VXLAN\",\"value\":\"Never\"},{\"name\":\"FELIX_IPINIPMTU\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"veth_mtu\",\"name\":\"calico-config\"}}},{\"name\":\"FELIX_VXLANMTU\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"veth_mtu\",\"name\":\"calico-config\"}}},{\"name\":\"FELIX_WIREGUARDMTU\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"veth_mtu\",\"name\":\"calico-config\"}}},{\"name\":\"CALICO_IPV4POOL_CIDR\",\"value\":\"10.1.0.0/16\"},{\"name\":\"CALICO_DISABLE_FILE_LOGGING\",\"value\":\"true\"},{\"name\":\"FELIX_DEFAULTENDPOINTTOHOSTACTION\",\"value\":\"ACCEPT\"},{\"name\":\"FELIX_IPV6SUPPORT\",\"value\":\"false\"},{\"name\":\"FELIX_HEALTHENABLED\",\"value\":\"true\"},{\"name\":\"FELIX_FEATUREDETECTOVERRIDE\",\"value\":\"ChecksumOffloadBroken=true\"}],\"envFrom\":[{\"configMapRef\":{\"name\":\"kubernetes-services-endpoint\",\"optional\":true}}],\"image\":\"docker.io/calico/node:v3.23.5\",\"lifecycle\":{\"preStop\":{\"exec\":{\"command\":[\"/bin/calico-node\",\"-shutdown\"]}}},\"livenessProbe\":{\"exec\":{\"command\":[\"/bin/calico-node\",\"-felix-live\"]},\"failureThreshold\":6,\"initialDelaySeconds\":10,\"periodSeconds\":10,\"timeoutSeconds\":10},\"name\":\"calico-node\",\"readinessProbe\":{\"exec\":{\"command\":[\"/bin/calico-node\",\"-felix-ready\"]},\"periodSeconds\":10,\"timeoutSeconds\":10},\"resources\":{\"requests\":{\"cpu\":\"250m\"}},\"securityContext\":{\"privileged\":true},\"volumeMounts\":[{\"mountPath\":\"/host/etc/cni/net.d\",\"name\":\"cni-net-dir\",\"readOnly\":false},{\"mountPath\":\"/lib/modules\",\"name\":\"lib-modules\",\"readOnly\":true},{\"mountPath\":\"/run/xtables.lock\",\"name\":\"xtables-lock\",\"readOnly\":false},{\"mountPath\":\"/var/run/calico\",\"name\":\"var-run-calico\",\"readOnly\":false},{\"mountPath\":\"/var/lib/calico\",\"name\":\"var-lib-calico\",\"readOnly\":false},{\"mountPath\":\"/var/run/nodeagent\",\"name\":\"policysync\"},{\"mountPath\":\"/var/log/calico/cni\",\"name\":\"cni-log-dir\",\"readOnly\":true}]}],\"hostNetwork\":true,\"initContainers\":[{\"command\":[\"/opt/cni/bin/calico-ipam\",\"-upgrade\"],\"env\":[{\"name\":\"KUBERNETES_NODE_NAME\",\"valueFrom\":{\"fieldRef\":{\"fieldPath\":\"spec.nodeName\"}}},{\"name\":\"CALICO_NETWORKING_BACKEND\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"calico_backend\",\"name\":\"calico-config\"}}}],\"envFrom\":[{\"configMapRef\":{\"name\":\"kubernetes-services-endpoint\",\"optional\":true}}],\"image\":\"docker.io/calico/cni:v3.23.5\",\"name\":\"upgrade-ipam\",\"securityContext\":{\"privileged\":true},\"volumeMounts\":[{\"mountPath\":\"/var/lib/cni/networks\",\"name\":\"host-local-net-dir\"},{\"mountPath\":\"/host/opt/cni/bin\",\"name\":\"cni-bin-dir\"}]},{\"command\":[\"/opt/cni/bin/install\"],\"env\":[{\"name\":\"CNI_CONF_NAME\",\"value\":\"10-calico.conflist\"},{\"name\":\"CNI_NETWORK_CONFIG\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"cni_network_config\",\"name\":\"calico-config\"}}},{\"name\":\"KUBERNETES_NODE_NAME\",\"valueFrom\":{\"fieldRef\":{\"fieldPath\":\"spec.nodeName\"}}},{\"name\":\"CNI_MTU\",\"valueFrom\":{\"configMapKeyRef\":{\"key\":\"veth_mtu\",\"name\":\"calico-config\"}}},{\"name\":\"SLEEP\",\"value\":\"false\"},{\"name\":\"CNI_NET_DIR\",\"value\":\"/var/snap/microk8s/current/args/cni-network\"}],\"envFrom\":[{\"configMapRef\":{\"name\":\"kubernetes-services-endpoint\",\"optional\":true}}],\"image\":\"docker.io/calico/cni:v3.23.5\",\"name\":\"install-cni\",\"securityContext\":{\"privileged\":true},\"volumeMounts\":[{\"mountPath\":\"/host/opt/cni/bin\",\"name\":\"cni-bin-dir\"},{\"mountPath\":\"/host/etc/cni/net.d\",\"name\":\"cni-net-dir\"}]}],\"nodeSelector\":{\"kubernetes.io/os\":\"linux\"},\"priorityClassName\":\"system-node-critical\",\"serviceAccountName\":\"calico-node\",\"terminationGracePeriodSeconds\":0,\"tolerations\":[{\"effect\":\"NoSchedule\",\"operator\":\"Exists\"},{\"key\":\"CriticalAddonsOnly\",\"operator\":\"Exists\"},{\"effect\":\"NoExecute\",\"operator\":\"Exists\"}],\"volumes\":[{\"hostPath\":{\"path\":\"/lib/modules\"},\"name\":\"lib-modules\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/var/run/calico\"},\"name\":\"var-run-calico\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/var/lib/calico\"},\"name\":\"var-lib-calico\"},{\"hostPath\":{\"path\":\"/run/xtables.lock\",\"type\":\"FileOrCreate\"},\"name\":\"xtables-lock\"},{\"hostPath\":{\"path\":\"/sys/fs/\",\"type\":\"DirectoryOrCreate\"},\"name\":\"sys-fs\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/opt/cni/bin\"},\"name\":\"cni-bin-dir\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/args/cni-network\"},\"name\":\"cni-net-dir\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/common/var/log/calico/cni\"},\"name\":\"cni-log-dir\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/var/lib/cni/networks\"},\"name\":\"host-local-net-dir\"},{\"hostPath\":{\"path\":\"/var/snap/microk8s/current/var/run/nodeagent\",\"type\":\"DirectoryOrCreate\"},\"name\":\"policysync\"}]}},\"updateStrategy\":{\"rollingUpdate\":{\"maxUnavailable\":1},\"type\":\"RollingUpdate\"}}}\n"
                        }
                    },
                    "resource": {
                        "selector": {
                            "k8s-app": "calico-node"
                        },
                        "image": "docker.io/calico/node:v3.23.5"
                    },
                    "podConditions": {
                        "runningPods": 4,
                        "desiredPods": 4
                    },
                    "pods": [
                        {
                            "name": "calico-node-6752t",
                            "namespace": "kube-system",
                            "images": [
                                "docker.io/calico/node:v3.23.5"
                            ],
                            "labels": {
                                "controller-revision-hash": "776859db77",
                                "k8s-app": "calico-node",
                                "pod-template-generation": "25"
                            },
                            "node": "instance-20230426-2354",
                            "status": "Running",
                            "restartCount": 1,
                            "usage": null,
                            "metrics": [
                                {
                                    "time": "12:52",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98803712
                                },
                                {
                                    "time": "12:53",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98402304
                                },
                                {
                                    "time": "12:54",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 91852800
                                },
                                {
                                    "time": "12:55",
                                    "cpuUsage": 0.06,
                                    "memoryUsage": 109920256
                                },
                                {
                                    "time": "12:56",
                                    "cpuUsage": 0.066,
                                    "memoryUsage": 123932672
                                },
                                {
                                    "time": "12:57",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 123428864
                                },
                                {
                                    "time": "12:58",
                                    "cpuUsage": 0.056,
                                    "memoryUsage": 124796928
                                },
                                {
                                    "time": "12:59",
                                    "cpuUsage": 0.075,
                                    "memoryUsage": 107069440
                                },
                                {
                                    "time": "13:00",
                                    "cpuUsage": 0.081,
                                    "memoryUsage": 120406016
                                },
                                {
                                    "time": "13:01",
                                    "cpuUsage": 0.057,
                                    "memoryUsage": 121118720
                                },
                                {
                                    "time": "13:02",
                                    "cpuUsage": 0.07,
                                    "memoryUsage": 121589760
                                },
                                {
                                    "time": "13:03",
                                    "cpuUsage": 0.059,
                                    "memoryUsage": 79851520
                                },
                                null
                            ],
                            "age": "23 day",
                            "creationDateTime": "2024. 04. 30. 오전 11:07:36"
                        },
                        {
                            "name": "calico-node-mlsvm",
                            "namespace": "kube-system",
                            "images": [
                                "docker.io/calico/node:v3.23.5"
                            ],
                            "labels": {
                                "controller-revision-hash": "776859db77",
                                "k8s-app": "calico-node",
                                "pod-template-generation": "25"
                            },
                            "node": "instance-20230502-0040",
                            "status": "Running",
                            "restartCount": 1,
                            "usage": null,
                            "metrics": [
                                {
                                    "time": "12:52",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98803712
                                },
                                {
                                    "time": "12:53",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98402304
                                },
                                {
                                    "time": "12:54",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 91852800
                                },
                                {
                                    "time": "12:55",
                                    "cpuUsage": 0.06,
                                    "memoryUsage": 109920256
                                },
                                {
                                    "time": "12:56",
                                    "cpuUsage": 0.066,
                                    "memoryUsage": 123932672
                                },
                                {
                                    "time": "12:57",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 123428864
                                },
                                {
                                    "time": "12:58",
                                    "cpuUsage": 0.056,
                                    "memoryUsage": 124796928
                                },
                                {
                                    "time": "12:59",
                                    "cpuUsage": 0.075,
                                    "memoryUsage": 107069440
                                },
                                {
                                    "time": "13:00",
                                    "cpuUsage": 0.081,
                                    "memoryUsage": 120406016
                                },
                                {
                                    "time": "13:01",
                                    "cpuUsage": 0.057,
                                    "memoryUsage": 121118720
                                },
                                {
                                    "time": "13:02",
                                    "cpuUsage": 0.07,
                                    "memoryUsage": 121589760
                                },
                                {
                                    "time": "13:03",
                                    "cpuUsage": 0.059,
                                    "memoryUsage": 79851520
                                },
                                null
                            ],
                            "age": "26 day",
                            "creationDateTime": "2024. 04. 26. 오후 15:51:40"
                        },
                        {
                            "name": "calico-node-xmjcx",
                            "namespace": "kube-system",
                            "images": [
                                "docker.io/calico/node:v3.23.5"
                            ],
                            "labels": {
                                "controller-revision-hash": "776859db77",
                                "k8s-app": "calico-node",
                                "pod-template-generation": "25"
                            },
                            "node": "instance-20230203-2114",
                            "status": "Running",
                            "restartCount": 1,
                            "usage": null,
                            "metrics": [
                                {
                                    "time": "12:52",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98803712
                                },
                                {
                                    "time": "12:53",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98402304
                                },
                                {
                                    "time": "12:54",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 91852800
                                },
                                {
                                    "time": "12:55",
                                    "cpuUsage": 0.06,
                                    "memoryUsage": 109920256
                                },
                                {
                                    "time": "12:56",
                                    "cpuUsage": 0.066,
                                    "memoryUsage": 123932672
                                },
                                {
                                    "time": "12:57",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 123428864
                                },
                                {
                                    "time": "12:58",
                                    "cpuUsage": 0.056,
                                    "memoryUsage": 124796928
                                },
                                {
                                    "time": "12:59",
                                    "cpuUsage": 0.075,
                                    "memoryUsage": 107069440
                                },
                                {
                                    "time": "13:00",
                                    "cpuUsage": 0.081,
                                    "memoryUsage": 120406016
                                },
                                {
                                    "time": "13:01",
                                    "cpuUsage": 0.057,
                                    "memoryUsage": 121118720
                                },
                                {
                                    "time": "13:02",
                                    "cpuUsage": 0.07,
                                    "memoryUsage": 121589760
                                },
                                {
                                    "time": "13:03",
                                    "cpuUsage": 0.059,
                                    "memoryUsage": 79851520
                                },
                                null
                            ],
                            "age": "22 day",
                            "creationDateTime": "2024. 04. 30. 오후 15:23:50"
                        },
                        {
                            "name": "calico-node-zkbfk",
                            "namespace": "kube-system",
                            "images": [
                                "docker.io/calico/node:v3.23.5"
                            ],
                            "labels": {
                                "controller-revision-hash": "776859db77",
                                "k8s-app": "calico-node",
                                "pod-template-generation": "25"
                            },
                            "node": "instance-20230123-2111",
                            "status": "Running",
                            "restartCount": 1,
                            "usage": null,
                            "metrics": [
                                {
                                    "time": "12:52",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98803712
                                },
                                {
                                    "time": "12:53",
                                    "cpuUsage": 0.062,
                                    "memoryUsage": 98402304
                                },
                                {
                                    "time": "12:54",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 91852800
                                },
                                {
                                    "time": "12:55",
                                    "cpuUsage": 0.06,
                                    "memoryUsage": 109920256
                                },
                                {
                                    "time": "12:56",
                                    "cpuUsage": 0.066,
                                    "memoryUsage": 123932672
                                },
                                {
                                    "time": "12:57",
                                    "cpuUsage": 0.065,
                                    "memoryUsage": 123428864
                                },
                                {
                                    "time": "12:58",
                                    "cpuUsage": 0.056,
                                    "memoryUsage": 124796928
                                },
                                {
                                    "time": "12:59",
                                    "cpuUsage": 0.075,
                                    "memoryUsage": 107069440
                                },
                                {
                                    "time": "13:00",
                                    "cpuUsage": 0.081,
                                    "memoryUsage": 120406016
                                },
                                {
                                    "time": "13:01",
                                    "cpuUsage": 0.057,
                                    "memoryUsage": 121118720
                                },
                                {
                                    "time": "13:02",
                                    "cpuUsage": 0.07,
                                    "memoryUsage": 121589760
                                },
                                {
                                    "time": "13:03",
                                    "cpuUsage": 0.059,
                                    "memoryUsage": 79851520
                                },
                                null
                            ],
                            "age": "26 day",
                            "creationDateTime": "2024. 04. 26. 오후 15:51:37"
                        }
                    ],
                    "services": []
                },
                "error": null
            }
        )
    }),

    // get replicas of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/replicas`, ({params}) => {
        const {clusterId} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "kubernetes-dashboard-7f479859cc",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard",
                            "pod-template-hash": "7f479859cc"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2023. 05. 06. 오전 06:12:23",
                        "age": "1 year"
                    },
                    {
                        "name": "kubernetes-dashboard-bc88b5c98",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard",
                            "pod-template-hash": "bc88b5c98"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 06. 오전 08:12:46",
                        "age": "1 year"
                    },
                    {
                        "name": "kubernetes-dashboard-dc96f9fc",
                        "namespace": "kube-system",
                        "images": [
                            "kubernetesui/dashboard:v2.7.0"
                        ],
                        "labels": {
                            "k8s-app": "kubernetes-dashboard",
                            "pod-template-hash": "dc96f9fc"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2023. 05. 06. 오전 06:04:58",
                        "age": "1 year"
                    },
                    {
                        "name": "metrics-server-68885988d",
                        "namespace": "kube-system",
                        "images": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server",
                            "pod-template-hash": "68885988d"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2023. 05. 03. 오전 09:09:22",
                        "age": "1 year"
                    },
                    {
                        "name": "metrics-server-6cd6d6ffb8",
                        "namespace": "kube-system",
                        "images": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server",
                            "pod-template-hash": "6cd6d6ffb8"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2023. 05. 03. 오전 07:21:30",
                        "age": "1 year"
                    },
                    {
                        "name": "metrics-server-6d8dc95f86",
                        "namespace": "kube-system",
                        "images": [
                            "registry.k8s.io/metrics-server/metrics-server:v0.5.2"
                        ],
                        "labels": {
                            "k8s-app": "metrics-server",
                            "pod-template-hash": "6d8dc95f86"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2023. 05. 05. 오전 05:37:43",
                        "age": "1 year"
                    },
                    {
                        "name": "grafana-54df5dbbc7",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "54df5dbbc7"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 18. 오후 16:03:55",
                        "age": "1 month"
                    },
                    {
                        "name": "grafana-657c7689bd",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 26. 오후 14:11:40",
                        "age": "26 day"
                    },
                    {
                        "name": "grafana-668b9b7d5d",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "668b9b7d5d"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 05. 19. 오후 13:06:37",
                        "age": "4 day"
                    },
                    {
                        "name": "grafana-6bc4b5b4b7",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "6bc4b5b4b7"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 18. 오후 16:09:22",
                        "age": "1 month"
                    }
                ],
                "error": null
            }
        )
    }),

    // get replicas of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/replicas/namespace`, ({params, request}) => {
        const {clusterId} = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "grafana-54df5dbbc7",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "54df5dbbc7"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 18. 오후 16:03:55",
                        "age": "1 month"
                    },
                    {
                        "name": "grafana-657c7689bd",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "657c7689bd"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 26. 오후 14:11:40",
                        "age": "27 day"
                    },
                    {
                        "name": "grafana-668b9b7d5d",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "668b9b7d5d"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 05. 19. 오후 13:06:37",
                        "age": "4 day"
                    },
                    {
                        "name": "grafana-6bc4b5b4b7",
                        "namespace": "monitoring",
                        "images": [
                            "grafana/grafana:latest"
                        ],
                        "labels": {
                            "app": "grafana",
                            "pod-template-hash": "6bc4b5b4b7"
                        },
                        "replicas": 0,
                        "readyReplicas": 0,
                        "creationDateTime": "2024. 04. 18. 오후 16:09:22",
                        "age": "1 month"
                    }
                ],
                "error": null
            }
        )
    }),

    // get replica Detail of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/replicas/:replicasSetName`, ({params}) => {
        const {clusterId, replicaSetName} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": {
                    "metadata": {
                        "name": "jenkins-696ccd6ffc",
                        "namespace": "jenkins",
                        "creationDate": "2024 .05 .19 .",
                        "creationTime": "오후 01:30:08",
                        "age": "4 day",
                        "uid": "f0eee0d7-392e-4a6b-8425-d36f49e5e56c",
                        "labels": {
                            "app": "jenkins",
                            "pod-template-hash": "696ccd6ffc"
                        },
                        "annotations": {
                            "deployment.kubernetes.io/desired-replicas": "1",
                            "deployment.kubernetes.io/max-replicas": "2",
                            "deployment.kubernetes.io/revision": "13"
                        }
                    },
                    "resource": {
                        "selector": {
                            "app": "jenkins",
                            "pod-template-hash": "696ccd6ffc"
                        },
                        "image": "ghcr.io/konempty/jenkins-docker-image:latest"
                    },
                    "podConditions": {
                        "runningPods": 1,
                        "desiredPods": 1
                    },
                    "pods": [
                        {
                            "name": "jenkins-696ccd6ffc-bxtz4",
                            "namespace": "jenkins",
                            "images": [
                                "ghcr.io/konempty/jenkins-docker-image:latest"
                            ],
                            "labels": {
                                "app": "jenkins",
                                "pod-template-hash": "696ccd6ffc"
                            },
                            "node": "instance-20230426-2354",
                            "status": "Running",
                            "restartCount": 0,
                            "usage": {
                                "time": "18:54",
                                "cpuUsage": 0.002,
                                "memoryUsage": 960290816
                            },
                            "metrics": [
                                null,
                                null,
                                null,
                                null,
                                {
                                    "time": "18:45",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:46",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:47",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:48",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:49",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:50",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:51",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:52",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                },
                                {
                                    "time": "18:53",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 960290816
                                }
                            ],
                            "age": "4 day",
                            "creationDateTime": "2024. 05. 19. 오후 13:30:08"
                        }
                    ],
                    "services": [
                        {
                            "serviceName": "jenkins",
                            "serviceNamespace": "jenkins",
                            "serviceLabels": {},
                            "serviceClusterIP": "10.152.183.232",
                            "serviceExternalIP": null,
                            "servicePort": [
                                8080
                            ],
                            "serviceAge": "1 year"
                        }
                    ]
                },
                "error": null
            }
        )
    }),

    // get statefuls of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/statefuls`, ({params}) => {
        const {clusterId} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "prometheus-server",
                        "namespace": "monitoring",
                        "images": [
                            "prom/prometheus:latest"
                        ],
                        "labels": {
                            "app": "prometheus"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 02. 24. 오후 18:40:06",
                        "age": "2 month"
                    }
                ],
                "error": null
            }
        )
    }),

    // get statefuls of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/statefuls/namespace`, ({params, request}) => {
        const {clusterId} = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json(
            {
                "success": true,
                "data": [
                    {
                        "name": "prometheus-server",
                        "namespace": "monitoring",
                        "images": [
                            "prom/prometheus:latest"
                        ],
                        "labels": {
                            "app": "prometheus"
                        },
                        "replicas": 1,
                        "readyReplicas": 1,
                        "creationDateTime": "2024. 02. 24. 오후 18:40:06",
                        "age": "2 month"
                    }
                ],
                "error": null
            }
        )
    }),

    // get stateful Detail of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/statefuls/:replicasSetName`, ({params}) => {
        const {clusterId, replicaSetName} = params;
        return HttpResponse.json(
            {
                "success": true,
                "data": {
                    "metadata": {
                        "name": "prometheus-server",
                        "namespace": "monitoring",
                        "creationDate": "2024 .02 .24 .",
                        "creationTime": "오후 06:40:06",
                        "age": "2 month",
                        "uid": "f0f825ae-cca8-44a7-ac28-eb27402948d1",
                        "labels": {
                            "app": "prometheus"
                        },
                        "annotations": {
                            "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"apps/v1\",\"kind\":\"StatefulSet\",\"metadata\":{\"annotations\":{},\"labels\":{\"app\":\"prometheus\"},\"name\":\"prometheus-server\",\"namespace\":\"monitoring\"},\"spec\":{\"replicas\":1,\"selector\":{\"matchLabels\":{\"app\":\"prometheus\"}},\"serviceName\":\"prometheus-server-http\",\"template\":{\"metadata\":{\"labels\":{\"app\":\"prometheus\"}},\"spec\":{\"containers\":[{\"args\":[\"--storage.tsdb.path=/prometheus\",\"--storage.tsdb.retention.time=15d\",\"--config.file=/etc/prometheus/prometheus.yaml\",\"--web.enable-admin-api\"],\"image\":\"prom/prometheus:latest\",\"name\":\"prometheus\",\"ports\":[{\"containerPort\":9090,\"name\":\"prometheus\"}],\"resources\":{\"limits\":{\"cpu\":\"500m\",\"memory\":\"500Mi\"},\"requests\":{\"cpu\":\"500m\",\"memory\":\"500Mi\"}},\"volumeMounts\":[{\"mountPath\":\"/prometheus\",\"name\":\"prometheus-storage\"},{\"mountPath\":\"/etc/prometheus\",\"name\":\"prometheus-server-conf\"}]}],\"nodeSelector\":{\"kubernetes.io/hostname\":\"instance-20230502-0040\"},\"securityContext\":{\"runAsUser\":0},\"serviceAccountName\":\"monitoring\",\"volumes\":[{\"configMap\":{\"defaultMode\":420,\"name\":\"prometheus-server-conf\"},\"name\":\"prometheus-server-conf\"}]}},\"volumeClaimTemplates\":[{\"metadata\":{\"name\":\"prometheus-storage\",\"namespace\":\"monitoring\"},\"spec\":{\"accessModes\":[\"ReadWriteOnce\"],\"resources\":{\"requests\":{\"storage\":\"20Gi\"}},\"storageClassName\":\"manual\"}}]}}\n"
                        }
                    },
                    "resource": {
                        "selector": {
                            "app": "prometheus"
                        },
                        "image": "prom/prometheus:latest"
                    },
                    "podConditions": {
                        "runningPods": 1,
                        "desiredPods": 1
                    },
                    "pods": [
                        {
                            "name": "prometheus-server-0",
                            "namespace": "monitoring",
                            "images": [
                                "prom/prometheus:latest"
                            ],
                            "labels": {
                                "app": "prometheus",
                                "apps.kubernetes.io/pod-index": "0",
                                "controller-revision-hash": "prometheus-server-566fc6784b",
                                "statefulset.kubernetes.io/pod-name": "prometheus-server-0"
                            },
                            "node": "instance-20230502-0040",
                            "status": "Running",
                            "restartCount": 0,
                            "usage": {
                                "time": "17:05",
                                "cpuUsage": 0.001,
                                "memoryUsage": 63209472
                            },
                            "metrics": [
                                {
                                    "time": "16:52",
                                    "cpuUsage": 0.003,
                                    "memoryUsage": 60203008
                                },
                                {
                                    "time": "16:53",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 60203008
                                },
                                {
                                    "time": "16:54",
                                    "cpuUsage": 0.003,
                                    "memoryUsage": 60203008
                                },
                                {
                                    "time": "16:55",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 60203008
                                },
                                {
                                    "time": "16:56",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 60203008
                                },
                                {
                                    "time": "16:57",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 61390848
                                },
                                null,
                                null,
                                null,
                                {
                                    "time": "17:01",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 61177856
                                },
                                {
                                    "time": "17:02",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 61177856
                                },
                                {
                                    "time": "17:03",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 63209472
                                },
                                {
                                    "time": "17:04",
                                    "cpuUsage": 0.002,
                                    "memoryUsage": 63209472
                                }
                            ],
                            "age": "7 day",
                            "creationDateTime": "2024. 05. 16. 오후 13:40:06"
                        }
                    ],
                    "services": null
                },
                "error": null
            }
        )
    }),

    // get jobs of cluster
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/jobs`, ({params}) => {
        const {clusterId} = params;
        return HttpResponse.json(
        )
    }),

    // get jobs of cluster with namespace
    http.get(`${baseURL}/api/v1/cluster/:clusterId/workload/jobs/namespace`, ({params, request}) => {
        const {clusterId} = params;
        const namespace = new URL(request.url).searchParams.get('namespace');
        return HttpResponse.json(
        )
    }),
]