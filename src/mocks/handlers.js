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
]